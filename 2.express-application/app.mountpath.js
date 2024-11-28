const express = require('express');
const app = express();
const admin = express();

// mounting on parent app or main app
admin.on('mount', function (parent) {
    console.log('Admin Mounted')
    console.log(parent) // refers to the parent app
  })

// Mount the admin app at '/admin' on the main app
app.use('/admin', admin);

// Main app routes
app.get('/', (req, res) => {
  res.send('Home page');
});

// Admin-specific routes
admin.get('/dashboard/users', (req, res) => {
  console.log(admin.mountpath);
  res.send('Welcome to admin dashboard');
});

app.listen(3000, () => {
  console.log(`Server is running on port at ${3000}`);
});
