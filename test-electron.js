console.log('Testing electron require...');
try {
  const electron = require('electron');
  console.log('Electron object:', electron);
  console.log('Electron.app:', electron.app);
  console.log('Type of electron:', typeof electron);
  console.log('Keys:', Object.keys(electron));
} catch (error) {
  console.error('Error requiring electron:', error);
}
