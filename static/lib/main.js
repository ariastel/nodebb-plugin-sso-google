'use strict';

$(window).on('action:script.load', function (ev, data) {
	data.scripts.push('sso-google/login');
});

define('sso-google/login', function () {
	var Login = {};

	Login.init = function () {
		var replaceEl = $('.alt-logins .google a i');
		var replacement = document.createElement('img');
		replacement.src = config.relative_path + '/plugins/@ariastel/nodebb-plugin-sso-google/images/button_google_logo.svg';
		replaceEl.replaceWith(replacement);
	}

	return Login;
})