const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve index.html directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});