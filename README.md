# Express.js Course

Express.js is a fast, scalable and minimalist popular web framework for Node.js. It'is designed to simplify the process of building web applications and API's development. It provides a robust set of features for web and mobile applications.

## Key Features of Express.js

- Middleware Support
- Routing
- Built-in Functions
- Support for RESTful APIs
- Error Handling
- Template Engine Integration
- Integration with Databases
- Cross-Platform Compatibility

Now describe about some main features and functionalities of Express.js with examples.

### Routing

Routing refers to how an application defines and manages different endpoints (URIs means for Uniform Resource Identifier) for handling client requests. Each route determines how the application responds to a specific HTTP method for a given path or URL.

Syntax:

```Javascript
app.METHOD(PATH, HANDLER);
```

### Routing (chained) example using HTTP methods

```JavaScript
const express = require('express');
const app = express();
// create a router from express router
const publicRouter = express.Router();

app.use('/', publicRouter);

publicRouter
  .route('/')
  .all((req, res, next) => {
    console.log('Root Route');
    next();
  })
  .get((req, res) => {
    res.send('GET route');
  })
  .post((req, res) => {
    res.send('POST route');
  })
  .put((req, res) => {
    res.send('PUT route');
  })
  .delete((req, res) => {
    res.send('DELETE route');
  });

app.listen(3000, () => {
  console.log(`server is running on port at ${3000}`);
});
```

### Route Parameters

```JavaScript
app.get('/products/:productID/users/:userId', (req, res) => {
  const {productID, userId} = req.params;
  res.send(`productID: ${productID}, userId: ${userId}`);
    // response on console: { "productID": "123", "userId": "147" }
});
```

### Query String in Route

`URL: http://localhost:3000/user?name=Rimon&age=22`

```JavaScript
const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    const {name, age} = req.query;

    res.send(`Name: ${name}, Age: ${age}`);
    // response on console: {"Name": Rimon, "Age": 22}
});

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});

```

### Error Handling in Route

```JavaScript
app.get('/error', (req, res, next) => {
  try {
    // throw an error occured
    throw new Error('Something was an error!');
  } catch (err) {
    next(err); // Pass the error to the error handler
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Internal Server Error');
});
```
**Summary:** Routing uses for dynamic URL handling with route parameters and query strings, supports modular system and organized code structure through route chaining and middleware and manage error with customizable error-handling mechanisms.

