const fs = require('fs');
const path = require('path');
const dir = 'd:/Projects/Personal Projects/portfolio/app';

const replaceMap = {
  '#2F3020': '#EBEBDF',
  'rgba(47,48,32,': 'rgba(235, 235, 223,',
  'rgba(89, 98, 53, 0.2)': 'rgba(255, 255, 255, 1)',
  
  'linear-gradient(135deg, #D96846, #CDCBD6)': '#E9631A',
  
  '#D96846': '#E9631A',
  'rgba(217, 104, 70': 'rgba(233, 99, 26',
  'rgba(217,104,70': 'rgba(233, 99, 26',
  
  'color: "#CDCBD6"': 'color: "#555555"', 
  'color: "#CDCBD6",': 'color: "#555555",', 
  
  'background: "#CDCBD6"': 'background: "#E9631A"',
  'boxShadow: "0 0 8px #CDCBD6"': 'boxShadow: "0 0 8px #E9631A"',
  
  '#CDCBD6': '#E9631A', 
  'rgba(205, 203, 214': 'rgba(233, 99, 26',
  'rgba(205,203,214': 'rgba(233, 99, 26',

  'color: "#ffffff"': 'color: "#333333"',
  'color: "#ffffff",': 'color: "#333333",',
  
  '#596235': '#EBEBDF',
  'rgba(89, 98, 53': 'rgba(235, 235, 223',
};

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      for (const [key, value] of Object.entries(replaceMap)) {
        content = content.split(key).join(value);
      }
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated', fullPath);
    }
  }
}

processDir(dir);
