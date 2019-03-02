let mix = require('laravel-mix')

mix.setPublicPath('dist')
	.js('resources/js/tool.js', 'dist/js')
	.sass('resources/sass/tool.scss', 'dist/css')
	.webpackConfig({
		resolve: {
			symlinks: false
		}
	})
