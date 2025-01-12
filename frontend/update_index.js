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

  const jsMatch = data.match(/static\/js\/main\.[a-z0-9]+\.js/);

  const hashedJSFile = jsMatch[0];

  console.log(hashedJSFile);

  // Replace the default CSS file with the optimized CSS file
  let updatedData = data.replace(
    /static\/css\/main\.[a-z0-9]+\.css/g,
    'static/css/optimized.min.css'
  );

  // Add a preload link for the optimized CSS file
  const preloadLink = `<link rel="preload" href="/static/css/optimized.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`;
  updatedData = updatedData.replace(
    /<head>/,
    `<head>\n    ${preloadLink}`
  );

  const preloadLinkForScript = `<link rel="preload" href="${hashedJSFile}" as="script">`;
  updatedData = updatedData.replace(
    /<head>/,
    `<head>\n    ${preloadLinkForScript}`
  );

  // Write the updated index.html file back
  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing updated index.html:', err);
    } else {
      console.log('index.html updated with optimized CSS file and preload link!');
    }
  });
});
