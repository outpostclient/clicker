const fs = require('fs');
const path = require('path');

// Path to the generated index.html file
const filePath = path.join(__dirname, 'build', 'index.html');

// Read the index.html file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    return;
  }

  // Extract the hashed JS file name dynamically
  const jsMatch = data.match(/static\/js\/main\.[a-z0-9]+\.js/);
  const cssMatch = data.match(/static\/css\/main\.[a-z0-9]+\.css/);

  if (!jsMatch) {
    console.error('Error: Could not find hashed JS file reference in index.html.');
    return;
  }

  const hashedJSFile = jsMatch[0];
  const hashedcssFile = cssMatch[0];

  // Add a preload link for the optimized CSS file
  const cssLink = `<link rel="stylesheet" href="/static/css/optimized.min.css">`;
//   const preloadCSSLink = `<link rel="reload" href="/static/css/optimized.min.css">`;

  // Replace the default CSS link with the optimized CSS link
  let updatedData = data.replace(
    /<link href="\/static\/css\/main\.[a-z0-9]+\.css" rel="stylesheet">/,
    cssLink
  );

  // Add a preload link for the main JS file
  const preloadJSLink = `<link rel="preload" href="/${hashedJSFile}" as="script">`;
  const preloadcssLink = `<link rel="preload" href="/static/css/optimized.min.css" as="stylesheet">`;
  updatedData = updatedData.replace(
    /<head>/,
    `<head>\n    ${preloadJSLink}`
  );
  updatedData = updatedData.replace(
    /<head>/,
    `<head>\n    ${preloadcssLink}`
  );


  // Write the updated index.html file back
  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing updated index.html:', err);
    } else {
      console.log('index.html updated with optimized CSS file and JS preload links!');
    }
  });
});


// this code for jjson to build the optimizes css 

// "build": "react-scripts build && npx postcss build/**/*.css -o build/static/css/optimized.min.css && node update_index.js",
