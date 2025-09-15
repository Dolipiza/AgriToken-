const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();

app.post('/api/farmers/register', upload.single('docs'), (req, res) => {
  const { name } = req.body;
  const docs = req.file;
  if (!name || !docs) {
    return res.status(400).send('Missing data');
  }
  // TODO: Save farmer info, mint tokens on Hedera, etc.
  console.log('Registered farm:', name, docs.filename);
  res.status(200).send('Registered');
});

app.listen(3001, () => console.log('Server running on port 3001'));
