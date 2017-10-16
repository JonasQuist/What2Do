let mix = require('laravel-mix');

mix.setPublicPath('assets')
    .js('resources/app.js', 'assets/app.js');