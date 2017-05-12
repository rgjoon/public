$(function() {
	[1, 5, 10, 50].forEach(function(v) {
		Button.create({
			value: v,
			containerId: 'money-button-container',
			onclick: function(value) {
				console.log('MoneyButton.click: ', value);
			}
		});
	});

	["Mc Donald", "Burger King", "Pizza Hut", "BBQ"].forEach(function(v) {
		Button.create({
			value: v,
			containerId: 'chain-button-container',
			onclick: function(value) {
				console.log('ChainButton.click: ', value);
			}
		})
	})
});
