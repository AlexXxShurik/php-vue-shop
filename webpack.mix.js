const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .webpackConfig({
        plugins: [
            new BrowserSyncPlugin({
                proxy: 'http://127.0.0.1:8000/', // замените на полный URL вашего локального домена
                files: [
                    'app/**/*.php',
                    'resources/views/**/*.php',
                    'public/**/*.(js|css)'
                ],
                injectChanges: true,
                open: true,
            })
        ]
    });
