const express = require('express');
const app = express();

// middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    isbn: '978-0061120084',
    summary:
      'A novel about the injustices of race and class in the Deep South.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    isbn: '978-0451524935',
    summary: 'A dystopian story about surveillance and totalitarianism.',
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    isbn: '978-0141439518',
    summary: 'A classic novel exploring love and social standing.',
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    isbn: '978-0743273565',
    summary: 'A story of wealth, love, and the American Dream in the 1920s.',
  },
];

// home route
app.get('/', (req, res) => {
  res.json({
    message: 'welcome to our book store api',
  });
});

// get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// get a single book
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const getSingleBook = books.find((book) => book.id === bookId);

  if (getSingleBook) {
    res.status(200).json(getSingleBook);
  } else {
    res.status(404).json({
      message: 'Book not found, please try with different Book Id',
    });
  }
});

// add a new book
app.post('/create-book', (req, res) => {
  const newBook = {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    isbn: '978-0316769488',
    summary: 'A tale of teenage angst and alienation in mid-century America.',
  };
  books.push(newBook);
  res.status(200).json({
    message: 'new book added successfully',
    data: newBook,
  });
});

// update a book
app.put('/update/:id', (req, res) => {
  const findCurrentBook = books.find(
    (book) => book.id === parseInt(req.params.id)
  );
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with Id ${req.params.id} updated successfully`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: 'Book not found',
    });
  }
});

app.delete('/delete/:id', (req, res)=> {
    const findCurrentBook = books.findIndex(book => book.id === parseInt(req.params.id))
    if(findCurrentBook) {
        const deletedBook = books.splice(findCurrentBook, 1);
        res.status(200).json({
            message: 'Book deleted successfully',
            data: deletedBook[0]
        })
    } else {
        res.status(404).json({
            message: 'Book not found',
          });
    }
})

app.listen(3000, () => {
  console.log(`server is running on port at ${3000}`);
});
