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
    proxy: 'http://localhost:8000/'
};

mix
    .setPublicPath(PATHS.dist)
    .webpackConfig({
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "@": __dirname + "/resources/js",
                "@images": __dirname + "/resources/images",
                "@lang": __dirname + "/resources/lang",
                "@utils": __dirname + "/resources/js/common/utils",
                "@font": __dirname + "/resources/fonts",
            }
        }
    })
    .options({ processCssUrls: false })
    .react(`${PATHS.src}/js/shop/index.js`, `${PATHS.dist}/js/shop.js`)
    .react(`${PATHS.src}/js/admin/index.js`, `${PATHS.dist}/js/admin.js`)
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
