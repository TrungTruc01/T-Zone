const fs = require('fs');
const path = require('path');

// Icon sizes needed for PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Create a simple HTML file to generate icons
const createIconGenerator = () => {
  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Icon Generator</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            padding: 20px; 
            background: #f5f5f5; 
        }
        .icon-container { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 20px; 
            margin-top: 20px; 
        }
        .icon-item { 
            text-align: center; 
            background: white; 
            padding: 10px; 
            border-radius: 8px; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
        }
        .icon { 
            border: 1px solid #ddd; 
            margin-bottom: 10px; 
        }
        button { 
            background: #0ea5e9; 
            color: white; 
            border: none; 
            padding: 8px 16px; 
            border-radius: 4px; 
            cursor: pointer; 
        }
        button:hover { 
            background: #0284c7; 
        }
    </style>
</head>
<body>
    <h1>T-Zone Icon Generator</h1>
    <p>Right-click on each icon and "Save image as..." to download</p>
    
    <div class="icon-container">
        ${iconSizes.map(size => `
            <div class="icon-item">
                <canvas id="icon-${size}" class="icon" width="${size}" height="${size}"></canvas>
                <div>${size}x${size}</div>
                <button onclick="downloadIcon(${size})">Download</button>
            </div>
        `).join('')}
    </div>

    <script>
        // Generate T-Zone icon
        function generateIcon(size) {
            const canvas = document.getElementById(\`icon-\${size}\`);
            const ctx = canvas.getContext('2d');
            
            // Clear canvas
            ctx.clearRect(0, 0, size, size);
            
            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, size, size);
            gradient.addColorStop(0, '#0ea5e9');
            gradient.addColorStop(1, '#d946ef');
            
            // Draw background circle
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(size/2, size/2, size/2 - 4, 0, 2 * Math.PI);
            ctx.fill();
            
            // Draw white border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = size/64;
            ctx.stroke();
            
            // Draw T letter
            ctx.fillStyle = '#ffffff';
            ctx.font = \`bold \${size * 0.35}px Arial\`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('T', size/2, size/2);
            
            // Add small fitness elements
            const scale = size / 512;
            
            // Dumbbell
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(size * 0.23, size * 0.35, size * 0.15, size * 0.015);
            ctx.fillRect(size * 0.23, size * 0.33, size * 0.025, size * 0.09);
            ctx.fillRect(size * 0.355, size * 0.33, size * 0.025, size * 0.09);
            
            // Heart
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(size * 0.625, size * 0.35);
            ctx.bezierCurveTo(size * 0.625, size * 0.33, size * 0.68, size * 0.31, size * 0.72, size * 0.31);
            ctx.bezierCurveTo(size * 0.76, size * 0.31, size * 0.8, size * 0.33, size * 0.8, size * 0.35);
            ctx.bezierCurveTo(size * 0.8, size * 0.37, size * 0.72, size * 0.39, size * 0.72, size * 0.39);
            ctx.bezierCurveTo(size * 0.72, size * 0.39, size * 0.625, size * 0.37, size * 0.625, size * 0.35);
            ctx.fill();
        }
        
        // Download icon
        function downloadIcon(size) {
            const canvas = document.getElementById(\`icon-\${size}\`);
            const link = document.createElement('a');
            link.download = \`icon-\${size}x\${size}.png\`;
            link.href = canvas.toDataURL();
            link.click();
        }
        
        // Generate all icons on load
        window.onload = function() {
            ${iconSizes.map(size => `generateIcon(${size});`).join('\n            ')}
        };
    </script>
</body>
</html>
  `;
  
  return html;
};

// Create the icon generator HTML file
const iconGeneratorPath = path.join(__dirname, '..', 'public', 'icon-generator.html');
fs.writeFileSync(iconGeneratorPath, createIconGenerator());

console.log('Icon generator created at:', iconGeneratorPath);
console.log('Open this file in your browser to generate and download icons');
console.log('Generated icons should be saved to public/icons/ directory');
