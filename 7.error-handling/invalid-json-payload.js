const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res, next) => {
  res.send({success: true})
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Invalid JSON payload' });
  }
  next(err); // Pass other errors to the generic error handler
});

app.listen(3000, () => {
    console.log('Server is running on port at 3000')
})