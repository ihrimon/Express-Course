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

_`Syntax:`_

```Javascript
app.METHOD(PATH, HANDLER);
```

#### Routing (chained) example using HTTP methods

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

#### Route Parameters

```JavaScript
app.get('/products/:productID/users/:userId', (req, res) => {
  const {productID, userId} = req.params;
  res.send(`productID: ${productID}, userId: ${userId}`);
    // response on console: { "productID": "123", "userId": "147" }
});
```

#### Query String in Route

```JavaScript
// URL: http://localhost:3000/user?name=Rimon&age=22

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

#### Error Handling in Route

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

**_`Summary:`_** Routing uses for dynamic URL handling with route parameters and query strings, supports modular system and organized code structure through route chaining and middleware and manage error with customizable error-handling mechanisms.

### Middleware

Middleware is a function that have access to request-response object and next() function. IT is a powerful feature that provides flexibility and modularity in handling request-response cycle and application logic. It is essential for tasks like authentication, logging, input validation, and error handling.

#### Types of Middleware

- Application-Level Middleware
- Built-in Middleware
- Router-Level Middleware
- Third-Party Middleware
- Error-Handling Middleware

_`Syntax:`_

```Javascript
app.use((req, res, next) => {
  console.log('Middleware executed');
  next(); // Passing to the next middleware
});
```

#### Application-Level Middleware

```JavaScript
const express = require('express');
const app = express();

// application-level middleware for loggin and monitoring
const logger = (req, res, next) => {
  console.log(`
  Date/Time: ${new Date(Date.now()).toLocaleString()}\n
  Method: ${req.method}\n
  Url: ${req.originalUrl}\nProtocol: ${req.protocol}`
  );
  next();
};

app.use(logger);

app.get('/test', (req, res) => {
  res.send('Testing middleware');
});

app.listen(3000, () => {
  console.log(`server is running on port at ${3000}`);
});
```

#### Built-in Middleware

```JavaScript
const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());

app.post('/user', (req, res) => {
  res.send(`Data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
```

#### Router-Level Middleware

```JavaScript
const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Date/Time: ${new Date(Date.now()).toLocaleString()}`);
  next();
});

router.use('/user/:id', (req, res, next) => {
  console.log(`URL:, ${req.originalUrl} Type: ${req.method}`);
  next();
});

router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('Id is equal to zero');
  else next();
});
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id);
  res.send({ success: true });
});

app.use('/', router);

app.listen(3000, () => {
  console.log(`Server is running on port at ${3000}`);
});

```

#### Third-Party Middleware

`rate-limiter-flexible`

```JavaScript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// parse cookies
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'Rimon');
  res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
  const user = req.cookies.user;
  res.send(`User cookie: ${user}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

#### Error-Handling Middleware

`rate-limiter-flexible`

```JavaScript
const express = require('express');
const app = express();

// craete route for trigger an error
app.get('/error', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 500;
  next(error); // Pass the error to the error handler
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

**_`Summary:`_** Middleware is the foundation for building robust, flexible, scalable and maintainable Express.js applications, providing the backbone for handling requests, responses, and application logic.

### Error Handling

Error handling in Express.js refers to managing runtime errors that occur during the request-response lifecycle, whether synchronously or asynchronously. Custom error handlers in Express.js use middleware functions with four parameters: `err`, `req`, `res`, and `next`. These handlers allow developers to _catch errors_, _log them_, and _send appropriate responses_ to clients.

#### Types of Error-handler

- Invalid JSON Payloads
- Custom Error Classes
- Error Handling with Asynchronous Code
- Customizing Error Responses
- Centralized Error Handling

#### Basic Error Handling with 404 Errors

```JavaScript
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  const error = new Error('Something went wrong!');
  next(error); // Pass the error to the error-handling middleware
});

/* status 404 is not an error. this an error from user */
// 404 error handle
app.use((req, res, next) => {
  const error = new Error('Request url was not found!');
  error.status = 404;
  next(error);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port at ${3000}`);
});
```

#### Invalid JSON Payloads

```JavaScript
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

```

**_`Summary:`_** Error handling in Express.js involves using middleware to manage, log, and respond to errors in a consistent and centralized manner. By defining custom error handlers and leveraging tools like asynchronous helpers, you can build robust applications capable of gracefully handling unexpected scenarios.
