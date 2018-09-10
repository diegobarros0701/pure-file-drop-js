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
	      	onComplete: function (data) {},
	      	onAddFile: function(files_info) {},
	      	onRemoveFile: function(files_info) {},
	      	initialFiles: [],
	      	remove_options: {
				url: null,
				method: 'DELETE',
				data: null
			},
			beforeRemove: function(options) {}
	  	}
	  this._files_selected = [];
	  this._overrideOptionsProperties(options);
	  this._build();
	}

	setInitialFiles(initialFiles) {
		this.options.initialFiles = initialFiles;
		this._updateInitialFiles();
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

		this._updateInitialFiles();

		this._initializeEvents();
	}

	_updateInitialFiles() {
		document.querySelectorAll('.single-file').forEach((single_file) => {
			single_file.parentNode.removeChild(single_file);
		})

		if(typeof this.options.initialFiles === 'object') {

			simpleAjax.request({
				url: this.options.initialFiles.url,
				method: this.options.initialFiles.method,
				data: this.options.initialFiles.params,
				returnType: 'json',
				async: false,
				onSuccess: (response) => {
					console.log(typeof JSON.parse(response));
					this.options.initialFiles = JSON.parse(response);
				}
			})
		}

		this.options.initialFiles.forEach((file) => {
			console.log(file);
			this._createFileInfo(file.name, file.id, file.remove_options);
		})
	}

	_overrideOptionsProperties(custom_options, keys = []) {
		for (var option_key in custom_options) {
			if (this.options.hasOwnProperty(option_key))
				this.options[option_key] = custom_options[option_key];
		}
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
			this._removeFile(e, e.target.dataset.removeId);
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

	_removeFile(e, remove_id) {
		if(remove_id) {
			let dataset = e.target.dataset;
			let url = dataset.removeUrl ? dataset.removeUrl : this.options.remove_options.url;
			let method = dataset.method ? dataset.method : this.options.remove_options.method;
			let params = dataset.params ? JSON.parse(dataset.params) : this.options.remove_options.params;

			if(!params.id && dataset.removeId) params.id = dataset.removeId;

			console.log(params);
			simpleAjax.request({
				url: url,
				method: method,
				data: {teste:'123'},
				onSuccess: (response) => {
					this._removeFileDomInfo(e);
				},
				onError: (response) => {
					console.log("Can't remove");
				}
			});
		} else {
			this._removeFileDomInfo(e);
		}
	}

	_removeFileDomInfo(e) {
		let parent_index = domHandler.index(e.target.parentNode);

		this._files_selected.splice(parent_index, 1);
		this._files_dropped_area.removeChild(e.target.parentNode);

		if(this._files_dropped_area.children.length == 0) {
			this._pure_file_drop_container.removeChild(this._files_dropped_area);
			this._files_dropped_area = null;
		}

		this.options.onRemoveFile(this._files_selected);
	}

	_createFileInfo(filename, id = null, remove_options = null) {
		let filename_span = document.createElement('span');
		filename_span.innerText = filename;

		let btn_remove_file_drop = document.createElement('button');
		btn_remove_file_drop.setAttribute('type', 'button');
		btn_remove_file_drop.className = 'btn btn-danger';
		btn_remove_file_drop.innerText = 'Remover';
		btn_remove_file_drop.dataset.removeFileDrop = 'remove-file-drop';

		if(remove_options) {
			if(remove_options.url) {
				btn_remove_file_drop.dataset.removeUrl = remove_options.url;
			}

			if(remove_options.method) {
				btn_remove_file_drop.dataset.method = remove_options.method;
			}

			if(remove_options.params) {
				btn_remove_file_drop.dataset.params = JSON.stringify(remove_options.params);
			}
		}

		if(id) { 
			btn_remove_file_drop.dataset.removeId = id;
		}

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
	}

	_handleFiles(files, e) {
		e.preventDefault();

		for(let i = 0; i < files.length; i++) {
			let file = files[i];

			// let filename_span = document.createElement('span');
			// filename_span.innerText = file.name;

			// let btn_remove_file_drop = document.createElement('button');
			// btn_remove_file_drop.setAttribute('type', 'button');
			// btn_remove_file_drop.className = 'btn btn-danger';
			// btn_remove_file_drop.innerText = 'Remover';
			// btn_remove_file_drop.dataset.removeFileDrop = 'remove-file-drop';

			// let single_file_wrapper_element = document.createElement('div');
			// single_file_wrapper_element.className = 'single-file';
			// single_file_wrapper_element.appendChild(filename_span);
			// single_file_wrapper_element.appendChild(btn_remove_file_drop);

			// if(!this._files_dropped_area) {
			// 	this._files_dropped_area = document.createElement('div');
			// 	this._files_dropped_area.className = 'files-dropped';
			// 	this._pure_file_drop_container.appendChild(this._files_dropped_area);
			// }

			// this._files_dropped_area.appendChild(single_file_wrapper_element);
			this._createFileInfo(file.name);
			this._files_selected.push(file);

			this.options.onAddFile(this._files_selected);
		}
	}

	_sendForm(data) {
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