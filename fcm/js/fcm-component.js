window.Button = {
	create: function(cfg) {
		var $button = $([
			'<div class="button">',
				cfg.value,
			'</div>'
		].join('')).click(function() {
			cfg.onclick(cfg.value);
		}).appendTo($('div#' + cfg.containerId));
	}
};
