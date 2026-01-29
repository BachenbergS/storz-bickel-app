console.log('Test starting...');
console.log('typeof require:', typeof require);
console.log('require electron:', typeof require('electron'));

try {
  const electron = require('electron');
  console.log('electron:', electron);
  console.log('electron.app:', electron.app);
} catch (e) {
  console.error('Error:', e.message);
}
