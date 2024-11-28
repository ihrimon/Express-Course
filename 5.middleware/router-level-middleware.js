const express = require('express');
const app = express();
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log('Router middleware triggered');
  next();
});

router.get('/users', (req, res) => {
  res.send('User List');
});

app.use('/api', router);

app.listen(3000, () => console.log('Server running on port 3000'));
