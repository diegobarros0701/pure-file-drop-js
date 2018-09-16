class ObjectHandler {
	mergeObjects(first_object, second_object) {
		Object.keys(second_object).forEach((key) => {
			if(Array.isArray(second_object[key])) {

				second_object[key].forEach((array_object) => {
					first_object[key].push(array_object);
				})

			} else if(second_object[key] != null && typeof second_object[key] === 'object' && second_object[key].constructor.name === 'Object') {
				if(!first_object[key]) {
					first_object[key] = {};
				}

				this.mergeObjects(first_object[key], second_object[key]);
			} else {
				first_object[key] = second_object[key];
			}
		})

		return first_object;
	}

	cloneObject(object) {
		let cloned_object = {};

		Object.keys(object).forEach((key) => {
			if(Array.isArray(object[key])) {
				cloned_object[key] = [];

				object[key].forEach((array_value) => {
					if(array_value != null && typeof array_value === 'object' && object[key].constructor.name === 'Object') {
						cloned_object[key].push(this.cloneObject(array_value));
					} else {
						cloned_object[key].push(array_value);
					}
				})

			} else if(object[key] != null && typeof object[key] === 'object') {
				cloned_object[key] = this.cloneObject(object[key]);
			} else {
				cloned_object[key] = object[key];
			}
		})

		return cloned_object;
	}
}

const objectHandler = new ObjectHandler();
export { objectHandler };