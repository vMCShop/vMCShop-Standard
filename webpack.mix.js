const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const PATHS = {
    src: 'resources',
    dist: 'public',
    proxy: 'http://vmcshop.net/'
};

mix
    .setPublicPath(PATHS.dist)
    .webpackConfig({
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "@": __dirname + "/resources/js",
                "@font": __dirname + "/resources/fonts",
            }
        }
    })
    .options({ processCssUrls: false })
    .react(`${PATHS.src}/js/index.js`, `${PATHS.dist}/js/app.js`)
    .version()
    .browserSync({
        open: false,
        ui: false,
        injectChanges: true,
        notify: false,
        host: 'localhost',
        port: 8080,
        proxy: `${PATHS.proxy}`,
        logLevel: 'silent',
        files: [`${PATHS.dist}/*.*`]
    });
