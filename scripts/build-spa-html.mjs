import fs from 'node:fs';
import path from 'node:path';

const clientDir = 'dist/client';
const assetsDir = path.join(clientDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory not found:', assetsDir);
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);

// Find the JS file that contains 'hydrateRoot' - this is our entry point
let mainJs = null;
const jsFiles = files.filter(f => f.endsWith('.js'));

for (const file of jsFiles) {
  const content = fs.readFileSync(path.join(assetsDir, file), 'utf8');
  if (content.includes('hydrateRoot')) {
    mainJs = file;
    break;
  }
}

// Fallback to largest if not found (though it should be found)
if (!mainJs) {
  mainJs = jsFiles.length > 0 
    ? jsFiles.sort((a, b) => fs.statSync(path.join(assetsDir, b)).size - fs.statSync(path.join(assetsDir, a)).size)[0]
    : null;
}

// Find the styles CSS
const cssFile = files.find(f => /^styles-.*\.css$/.test(f));

if (!mainJs) {
  console.error('No main JS bundle found in', assetsDir);
  process.exit(1);
}

console.log(`Using main JS (entry point): ${mainJs}`);
if (cssFile) console.log(`Using CSS: ${cssFile}`);

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="/">
    <link rel="icon" type="image/png" href="https://app.fiflowai.com/fiflow-logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FiFlowAI — From store data to clear next steps</title>
    <meta name="description" content="FiFlowAI explains what's happening in your store, why, and the actions to take next.">
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ''}
</head>
<body>
    <div id="root"></div>
    <!-- Load the entry point bundle -->
    <script type="module" src="/assets/${mainJs}"></script>
</body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), template);
console.log('Successfully generated dist/client/index.html');
