// This script will automate the build process in GitHub from the src folder
const { exec } = require('child_process');

// Run your build process
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`Build Output: ${stdout}`);
  console.error(`Errors (if any): ${stderr}`);
});
