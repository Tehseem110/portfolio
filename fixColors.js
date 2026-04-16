const fs = require('fs');
const path = require('path');
const dir = 'd:/Projects/Personal Projects/portfolio/app';

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Body text mapping
      content = content.replace(/#333333/g, '#ffffff');
      content = content.replace(/#555555/g, '#a3a3a3');
      
      // Card bg mapping
      // Note: we only want to map background: "#FFFFFF", not all white text.
      content = content.replace(/background:\s*["']#FFFFFF["']/g, 'background: "#111111"');
      content = content.replace(/background:\s*["']rgba\(235,\s*235,\s*223,\s*0\.5\)["']/g, 'background: "rgba(10, 10, 10, 0.5)"');
      content = content.replace(/background:\s*["']#EBEBDF["']/g, 'background: "#ffffff"');

      // Navbar text overrides
      content = content.replace(/color:\s*["']#EBEBDF["']/g, 'color: "#ffffff"');
      content = content.replace(/color:\s*["']#1A1A1A["']/g, 'color: "#000000"'); // CTA button text

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir(dir);
