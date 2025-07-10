const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static JSON file
app.get('/keywordsdata.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'keywordsdata.json'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
