'use strict';

require(['hooks'], function (hooks) {
	hooks.on('action:ajaxify.end', ({ tpl_url }) => {
		if (tpl_url === 'login') {
			var replaceEl = $('.alt-logins .google a i');
			var replacement = document.createElement('img');
			replacement.src = config.relative_path + '/plugins/@ariastel/nodebb-plugin-sso-google/images/button_google_logo.svg';
			replaceEl.replaceWith(replacement);
		}
	});
});
