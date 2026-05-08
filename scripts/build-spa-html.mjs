import fs from 'node:fs';
import path from 'node:path';

const clientDir = 'dist/client';
const assetsDir = path.join(clientDir, 'assets');
const files = fs.readdirSync(assetsDir);

const jsFiles = files.filter(f => /^main-.*\.js$/.test(f) || /^index-.*\.js$/.test(f));
const mainJs = jsFiles.length > 0 
  ? jsFiles.sort((a, b) => fs.statSync(path.join(assetsDir, b)).size - fs.statSync(path.join(assetsDir, a)).size)[0]
  : null;

const css = files.find(f => /^styles-.*\.css$/.test(f));

if (!mainJs) {
  console.error('No main JS bundle found in', assetsDir);
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="https://app.fiflowai.com/fiflow-logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FiFlowAI — From store data to clear next steps</title>
    <meta name="description" content="FiFlowAI explains what's happening in your store, why, and the actions to take next." />
    ${css ? `<link rel="stylesheet" href="/assets/${css}" />` : ''}
    <script type="module" crossorigin src="/assets/${mainJs}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

fs.writeFileSync(path.join(clientDir, 'index.html'), html);
console.log('Wrote dist/client/index.html with', mainJs);
