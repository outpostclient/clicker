const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: [
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './public/**/*.html',
        './node_modules/bootstrap/dist/css/bootstrap.min.css', // Include Bootstrap or other library CSS
        './node_modules/react-bootstrap/**/*.js', // React-Bootstrap JS files
      ],
      safelist: {
        deep: [
          /^accordion/, 
          /^btn/, 
          /^modal/, 
          /^dropdown/, 
          /^alert/, 
          /^card/, 
          /^form/, 
          /^nav/, 
          /^navbar/, 
          /^col/, 
          /^row/,
        ],
        greedy: [
          /^accordion/, 
          /^btn/, 
          /^modal/, 
          /^dropdown/, 
          /^alert/, 
          /^card/, 
          /^form/, 
          /^nav/, 
          /^navbar/, 
          /^col/, 
          /^row/,
        ],
      },
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    })
  ],
};
