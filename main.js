const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const { app } = require('electron');

const startServer = () => {
  const ex = express();
  ex.use(express.static(path.join(__dirname, 'public')));
  ex.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  ex.listen(3000, () => {
    console.log('Server ready at http://localhost:3000');

    // Open Chrome
    const chromePath = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
    exec(`${chromePath} http://localhost:3000`);
  });
};

app.whenReady().then(startServer);
