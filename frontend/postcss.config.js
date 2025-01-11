const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
    plugins: [
        purgecss({
            content: [
                './src/**/*.js',
                './src/**/*.jsx',
                './src/**/*.html',
                './public/index.html'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
};
