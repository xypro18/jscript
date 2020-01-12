var helper = {
	getInputValues(elements, storageValues) {
		var results = [];
		for (var item of elements) {
			if (item.value != "")
				results.push({
					selector: "input" + "#" + item.id,
					value: item.value
				});
		}
		localStorage.setItem(storageValues, JSON.stringify(results));
	},
	getAllInputValues(storageValues) {
		this.getInputValues(document.querySelectorAll("input[id]"), storageValues);
	},
	getSelectedInputValues(storageSelectors, storageValues) {
		var list = JSON.parse(localStorage.getItem(storageSelectors));
		var elements = list.map(item => document.querySelector(item));
		this.getInputValues(elements, storageValues);
	},
	fillAllInputValues(storageValues) {
		var list = JSON.parse(localStorage.getItem(storageValues));
		for (var item of list) {
			elem = document.querySelector(item.selector);
			elem.value = item.value
		}
	},
	storestorageSelectors(storageValues, storageSelectors) {
		var list = JSON.parse(localStorage.getItem(storageValues));
		var results = [];
		for (var item of list) {
			results.push(item.selector)
		}
		localStorage.setItem(storageSelectors, JSON.stringify(results))	
	}
}