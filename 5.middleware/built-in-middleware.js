const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());

app.post('/data', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
