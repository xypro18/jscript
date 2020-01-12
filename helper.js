var helper = {
	keys: [
	{
		id: "#teste",
		type: null
	}		
	],	
	getAllInputValues() {
		var list = document.querySelectorAll("input[id]");
		var results = []
		for (var item of list) {
			if (item.value != "")
				results.push({
					selector: "input" + "#" + item.id,
					value: item.value
				});
		}
		localStorage.setItem('input_values', JSON.stringify(results))
	},		
	fillAllInputValues() {
		var list = JSON.parse(localStorage.getItem('input_values'));
		for (var item of list) {
			elem = document.querySelector(item.selector);
			elem.value = item.value
		}
	}
}