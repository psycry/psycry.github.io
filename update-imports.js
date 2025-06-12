import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, 'src');

function updateFile(filePath) {
  let content = readFileSync(filePath, 'utf8');
  
  // Update React imports
  content = content.replace(
    /^import React(?:,?\s*\{([^}]*)\})? from 'react';/m,
    (match, imports) => {
      if (imports) {
        return `import * as React from 'react';\nimport { ${imports.trim()} } from 'react';`;
      }
      return "import * as React from 'react';";
    }
  );

  // Update ReactDOM imports
  content = content.replace(
    /^import (\w+) from 'react\-dom\/client';/m,
    "import { createRoot } from 'react-dom/client';"
  );

  writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath}`);
}

function processDirectory(directory) {
  const files = readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = join(directory, file);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      updateFile(fullPath);
    }
  });
}

// Start processing from the src directory
processDirectory(srcDir);

console.log('All React imports have been updated!');
