var elixir = require('laravel-elixir');
var BrowserSync = require('laravel-elixir-browser-sync');
 
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
   
    mix.browserSync([
    'app/**/*',
    'public/**/*',
    'resources/views/**/*'
      ], {
        proxy           : "laravel-boilerplate.dev",
        logPrefix       : "Laravel Eixir BrowserSync",
        logConnections  : false,
        reloadOnRestart : false,
        notify          : false
      });
    mix.sass('app.scss');
});
