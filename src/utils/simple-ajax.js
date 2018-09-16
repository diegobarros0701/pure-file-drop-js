import { objectHandler } from './object-handler';

class SimpleAjax {
	constructor() {
		this.options = {
			method: 'GET',
			url: null,
			async: true,
			data: '',
			responseType: 'text',
			headers: [],
			onError: function(response, xhr) {},
			onSuccess: function(response, xhr) {},
			onComplete: function(response, xhr) {},
			beforeSend: function(xhr) {}
		}
	}

	_setRequestHeaders(xhr) {
		this.options.headers.forEach(header => xhr.setRequestHeader(header.name, header.value))
	}

	request(custom_options = {}) {

		let options_cloned = objectHandler.cloneObject(this.options);
		let request_options = objectHandler.mergeObjects(options_cloned, custom_options);


		if(this._isOptionsValid(request_options)) {
			let xhr = new XMLHttpRequest();
			xhr.open(request_options.method, request_options.url, request_options.async);

			xhr.onreadystatechange = function() {
				let status = this.status.toString();

				if(this.readyState == 4) {
					let response = this.response;

					if(status.startsWith('2')) {
						if(request_options.responseType === 'json') {
							response = JSON.parse(response);
						}

						request_options.onSuccess(response, this);
					} else if(status.startsWith('4') || status.startsWith('5')) {
						console.error(status, ' - ', this.statusText);
						request_options.onError(response, this);
					}

					request_options.onComplete(response, this);
				}
			}


			if(request_options.method === 'POST' && typeof request_options.data === 'string') {
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			} else if(request_options.data !== 'string' && !(request_options.data instanceof FormData)) {
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				request_options.data = this._convertToQueryParams(request_options.data);
			}

			this._setRequestHeaders(xhr);
			request_options.beforeSend(xhr);

			xhr.send(request_options.data);
		} else {
			console.error('ERROR - Specify the options correctly');
		}
	}

	_convertToQueryParams(data) {
		let params = '';
		Object.keys(data).forEach((param_name) => {
			let param_value = data[param_name];
			params += `${param_name}=${param_value}`;
		})

		return params;
	}

	_isOptionsValid(options) {
		if(typeof options.url !== 'string' || options.url == null || options.url.trim() === '')
			return false;

		return true;
	}
}

const simpleAjax = new SimpleAjax();
export { simpleAjax };