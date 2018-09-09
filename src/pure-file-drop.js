import { simpleAjax } from './utils/simple-ajax';
import { domHandler } from './utils/dom-handler';
import { eventJS } from './utils/event-js';

class PureFileDrop {
	constructor(options = {}) {
		this.options = {
			form_ajax: {
				enabled: false,
				selector: 'form',
			},
			submit_button: {
				title: 'Send',
				classes: 'btn btn-success'
			},
	      file_drop_selector: '.pure-file-drop', // default
	      file_drop_area_text: 'Arraste os arquivos ou clique aqui',
	      upload_url: null, // default is the form action attribute
	      async_request: true, // default
	      param_name: 'file', // default
	      upload_on_drop: false, // TO DO
	      select_by_click: true, // default
	      onSuccess: function (data) {},
	      onError: function (data) {},
	      onComplete: function (data) {}
	  }
	  this._files_selected = [];

	  this._overrideOptionsProperties(options);
	  console.log(this.options);
	  this._build();
	}

	_build() {
		let drop_zone_text = document.createElement('span');
		drop_zone_text.innerText = this.options.file_drop_area_text;

		this._pure_file_drop_container = document.querySelector(this.options.file_drop_selector);
		this._drop_zone_area = document.createElement('div');
		this._drop_zone_area.className = 'drop-zone';
		this._drop_zone_area.appendChild(drop_zone_text)

		if(this.options.select_by_click) {
			this._drop_zone_file_input = document.createElement('input');
			this._drop_zone_file_input.setAttribute('type', 'file');
			this._drop_zone_file_input.setAttribute('multiple', true);

			this._drop_zone_area.appendChild(this._drop_zone_file_input);
		}

		this._pure_file_drop_container.appendChild(this._drop_zone_area);

		if (this.options.form_ajax.enabled) {
			this._form = document.querySelector(this.options.form_ajax.selector);
			this._form.enctype = 'multipart/form-data';

			if (this.options.upload_url)
				this._form.action = this.options.upload_url;
			else
				this.options.upload_url = this._form.action;

		}

		this._initializeEvents();
	}

	_overrideOptionsProperties(custom_options, keys = []) {
		for (var option_key in custom_options) {
			if(typeof custom_options[option_key] === 'object') {
				keys.push(`"${option_key}"`)
				keys = this._overrideOptionsProperties(custom_options[option_key], keys) 
			} else {
				keys.push(`"${option_key}"`);

				let compound_key = keys.join('][');
				let command = `this.options[${compound_key}] = custom_options["${option_key}"]`;
				let exist_property = eval(`this.options[${compound_key}]`) !== undefined;

				if (exist_property)
					eval(command);
				
				keys = keys.slice(0, keys.length - 1);
			}
		}
		keys = keys.slice(0, keys.length - 1);

		return keys;
	}

	_createSubmitButton() {
		this._submit_button = document.createElement('button');
		this._submit_button.innerText = this.options.submit_button.title;
		this._submit_button.className = this.options.submit_button.classes;
		this._pure_file_drop_container.appendChild(this._submit_button);
	}

	_initializeEvents() {

		if(this.options.form_ajax.enabled) {
			this._form.addEventListener('submit', (e) => {
				e.preventDefault();
				this._sendForm();
			});
		} else {
			this._createSubmitButton();
			this._submit_button.addEventListener('click', (e) => {
				this._sendForm();
			})
		}

		this._drop_zone_area.addEventListener('dragenter', (e) => {
			this._drop_zone_area.className += ' dragging';
		})

		this._drop_zone_area.addEventListener('dragover', e => e.preventDefault());

		this._drop_zone_area.addEventListener('drop', (e) => {
			e.preventDefault();
			this._drop_zone_area.className = this._drop_zone_area.className.replace(/\s*.(dragging)/g, ''	);

			this._handleFiles(e.dataTransfer.files, e);

			if(this.options.upload_on_drop) {
				// TO DO
			}
		});

		this._drop_zone_area.addEventListener('dragleave', (e) => {
			this._drop_zone_area.className = this._drop_zone_area.className.replace(/\s*.(dragging)/g, ''	);
		});

		eventJS.node(this._pure_file_drop_container).on('click', 'button[data-remove-file-drop]', (e) => {
			this._removeFile(e);
		})

		if(this.options.select_by_click) {
			let _this = this;
			this._drop_zone_area.addEventListener('click', (e) => {
				_this._drop_zone_file_input.click();
			})

			this._drop_zone_file_input.addEventListener('change', (e) => {
				this._handleFiles(e.target.files, e);
				e.target.value = "";
			})
		}
	}

	_removeFile(e) {
		let parent_index = domHandler.index(e.target.parentNode);

		this._files_selected.splice(parent_index, 1);
		this._files_dropped_area.removeChild(e.target.parentNode);

		if(this._files_dropped_area.children.length == 0) {
			this._pure_file_drop_container.removeChild(this._files_dropped_area);
			this._files_dropped_area = null;
		}
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
				this._pure_file_drop_container.appendChild(this._files_dropped_area);
			}

			this._files_dropped_area.appendChild(single_file_wrapper_element);
			this._files_selected.push(file);
		}
	}

	_sendForm(data) {
		console.log('Requesting...');
		console.log(this.options);
		simpleAjax.request({
			url: this.options.upload_url,
			method: 'POST',
			data: this._getFormData(),
			onError: (response) => {
				this.options.onError(response);
			},
			onSuccess: (response) => {
				this.options.onSuccess(response);
			},
			onComplete: (response) => {
				this.options.onComplete(response);
			}
		});
	}

	_getFormData() {
		let _this = this;
		let formData = _this.options.form_ajax.enabled ? new FormData(_this._form) : new FormData();

		_this._files_selected.forEach(function (file_selected) {
			formData.append(_this.options.param_name, file_selected);
		})

		return formData;
	}

}

export { PureFileDrop }