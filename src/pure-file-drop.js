class PureFileDrop {
	constructor(options = {}) {
		this.options = {
      form_selector: 'form[data-file-choose-form]', // default
      file_drop_selector: '.pure-file-drop', // default
      file_drop_area_text: 'Arraste os arquivos ou clique aqui',
      upload_url: null, // default is the form action attribute
      async_request: true, // default
      param_name: 'file', // default
      form_ajax: true, // TO DO
      upload_on_drop: false, // TO DO
      select_by_click: true, // default
      onSuccess: function (data) {},
      onError: function (data) {},
      onEnd: function (data) {}
  }
  this._files_selected = [];

  this._overrideOptionsProperties(options);
  this._build();
}

_build() {
	this._form = document.querySelector(this.options.form_selector);
	let drop_zone_text = document.createElement('span');
	drop_zone_text.innerText = this.options.file_drop_area_text;

	this._files_drop_area = document.querySelector(this.options.file_drop_selector);
	this._drop_zone_area = document.createElement('div');
	this._drop_zone_area.className = 'drop-zone';
	this._drop_zone_area.appendChild(drop_zone_text)

	if(this.options.select_by_click) {
		this._file_input = document.createElement('input');
		this._file_input.setAttribute('type', 'file');
		this._file_input.setAttribute('multiple', true);

		this._drop_zone_area.appendChild(this._file_input);
	}

    // this._files_dropped_area = document.createElement('div');
    // this._files_dropped_area.className = 'files-dropped';

    this._files_drop_area.appendChild(this._drop_zone_area);
    // this._files_drop_area.appendChild(this._files_dropped_area);

    if (this._form) {
    	this._form.enctype = 'multipart/form-data';

    	if (this.options.upload_url)
    		this._form.action = this.options.upload_url;

    	this._initializeEvents();
    }
}

_overrideOptionsProperties(custom_options) {
	for (var option_key in custom_options) {
		if (this.options.hasOwnProperty(option_key))
			this.options[option_key] = custom_options[option_key];
	}
}

_initializeEvents() {
	this._form.addEventListener('submit', (e) => this._doRequest(e));

	this._files_drop_area.addEventListener('dragenter', (e) => {
		this._drop_zone_area.className += ' dragging';
	})

	this._files_drop_area.addEventListener('dragover', e=> e.preventDefault());

	this._files_drop_area.addEventListener('drop', (e) => {
		e.preventDefault();

		this._handleFiles(e.dataTransfer.files, e);

	});

	this._files_drop_area.addEventListener('dragleave', (e) => {
		this._drop_zone_area.className = this._drop_zone_area.className.replace(/\s*.(dragging)/g, ''	);
	});

	this._files_drop_area.addEventListener('click', (e) => {
		if(e.target.dataset.removeFileDrop) {
			this._removeFile(e);
		}
	});


	if(this.options.select_by_click) {
		let _this = this;
		this._files_drop_area.addEventListener('click', (e) => {

			if(e.target === _this._drop_zone_area)
				$(_this._file_input).trigger('click');
		})

		this._file_input.addEventListener('change', (e) => {
			this._handleFiles(e.target.files, e);
			e.target.value = "";
		})
	}
}

_removeFile(e) {
	let parent_index = this._index(e.target.parentNode);

	this._files_selected.splice(parent_index, 1);
	this._files_dropped_area.removeChild(e.target.parentNode);

	if(this._files_dropped_area.children.length == 0) {
		this._files_drop_area.removeChild(this._files_dropped_area);
		this._files_dropped_area = null;
	}
}

_index(node) {
	let siblings = 0;

	while(node) {
		node = node.previousSibling;
		siblings++;
	}

	siblings--; // para não contar o próprio elemento que originou a contagem

	return siblings;
}

_handleFiles(files, e) {
	e.preventDefault();

	for(let i = 0; i < files.length; i++) {
		let file = files[i];

		let filename_span = document.createElement('span');
		filename_span.innerText = file.name;

		let btn_remove_file_drop = document.createElement('button');
		btn_remove_file_drop.setAttribute('type', 'button');
		btn_remove_file_drop.className = 'btn btn-danger';
		btn_remove_file_drop.innerText = 'Remover';
		btn_remove_file_drop.dataset.removeFileDrop = 'remove-file-drop';

		let single_file_wrapper_element = document.createElement('div');
		single_file_wrapper_element.className = 'single-file';
		single_file_wrapper_element.appendChild(filename_span);
		single_file_wrapper_element.appendChild(btn_remove_file_drop);

		if(!this._files_dropped_area) {
			this._files_dropped_area = document.createElement('div');
			this._files_dropped_area.className = 'files-dropped';
			this._files_drop_area.appendChild(this._files_dropped_area);
		}

		this._files_dropped_area.appendChild(single_file_wrapper_element);
		this._files_selected.push(file);
	}

}

_doRequest(e) {
	console.log('Requesting...');
	e.preventDefault();

	var formData = this._getFormData();

	$.ajax({
		url: this.options.upload_url,
		type: 'POST',
		async: this.options.async_request,
		processData: false,
		contentType: false,
		data: formData,
		error: function (data) {
			this.options.onError(data);
		},
		complete: function (data) {
			this.options.onEnd(data);
		}
	}).done(function (data) {
		this.options.onSuccess(data);
	})
}

_getFormData() {
	let _this = this;
	let formData = new FormData(_this._form);

	_this._files_selected.forEach(function (file_selected) {
		formData.append(_this.options.param_name, file_selected);
	})

	return formData;
}
}

var p = new PureFileDrop({ form_selector: '#myForm', upload_url: 'http://localhost:3000/servicos' });