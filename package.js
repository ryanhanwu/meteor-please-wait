Package.describe({
	name: 'ryanwu:please-wait',
	version: '0.1.0',
	summary: 'A simple library to show your users a beautiful splash page while your application loads.',
	git: 'https://github.com/ryanhanwu/meteor-please-wait.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2');
	api.use('ecmascript');
	api.addFiles('lib/please-wait.js/build/please-wait.css', 'client');
	api.addFiles('lib/please-wait.js/build/please-wait.min.js', 'client');
});
