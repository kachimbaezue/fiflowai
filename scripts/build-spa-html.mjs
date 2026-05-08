import fs from 'node:fs';
import path from 'node:path';

const clientDir = 'dist/client';
const assetsDir = path.join(clientDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory not found:', assetsDir);
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);

// Find the main JS bundle (largest file starting with index- or main-)
const jsFiles = files.filter(f => /^main-.*\.js$/.test(f) || /^index-.*\.js$/.test(f));
const mainJs = jsFiles.length > 0 
  ? jsFiles.sort((a, b) => fs.statSync(path.join(assetsDir, b)).size - fs.statSync(path.join(assetsDir, a)).size)[0]
  : null;

// Find the styles CSS
const cssFile = files.find(f => /^styles-.*\.css$/.test(f));

if (!mainJs) {
  console.error('No main JS bundle found in', assetsDir);
  process.exit(1);
}

console.log(`Using main JS: ${mainJs}`);
if (cssFile) console.log(`Using CSS: ${cssFile}`);

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="https://app.fiflowai.com/fiflow-logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FiFlowAI — From store data to clear next steps</title>
    <meta name="description" content="FiFlowAI explains what's happening in your store, why, and the actions to take next.">
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ''}
    <script>
      // TanStack Start/Router hydration globals to prevent white screen crashes
      window.$_TSR = {
        buffer: [],
        initialized: false,
        router: {
          matches: [],
          manifest: { routes: {} },
          dehydratedData: null
        }
      };
      console.log('FiFlowAI SPA shell initialized');
    </script>
</head>
<body>
    <div id="root"></div>
    <script type="module" crossorigin src="/assets/${mainJs}"></script>
    <script>
      // Fallback for hydration - mark as hydrated once app starts
      window.addEventListener('load', () => {
        setTimeout(() => {
          const root = document.getElementById('root');
          if (root && root.innerHTML === '') {
            console.warn('Hydration might have failed. If you see this, check console for JS errors.');
          }
        }, 1000);
      });
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), template);
console.log('Successfully generated dist/client/index.html');
