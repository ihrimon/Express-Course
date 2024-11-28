const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

// file upload folder
const uploadFolder = './uploads';

// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExtension, '')
        .toLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      Date.now();
    cb(null, fileName + fileExtension);
  },
});

// prepare the final multer upload object
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100000, // 1MB
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'avatar') {
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) {
        cb(null, true);
      } else {
        cb(new Error('Only .jpg, .png or jpeg format allowed!'));
      }
      // console.log(file);
    } else if (file.fieldname === 'doc') {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Only .pdf format allowed'));
      }
      console.log(file);
    } else {
      cb(new Error('There was an unknown error!'));
    }
  },
});

/*
// single file upload
app.post('/', upload.single('avatar'), (req, res) => {
  res.send('Hello world');
});

// multiple file upload
app.post('/', upload.array('avatar', 3), (req, res) => {
  res.send('Hello world');
});

// multiple file upload with fields
app.post('/', upload.fields([
  {name: 'avatar', maxCount: 1},
  {name: 'gallery', maxCount: 2},
]), (req, res) => {
  res.send('Hello world');
});

// not file upload but form handle
app.post('/', upload.none(), (req, res) => {
  res.send('Hello world');
});

*/

app.post(
  '/',
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'doc', maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.files);
    res.send('Uploaded Successfully');
  }
);

// default error hanler with multer error
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send('There was an upload error!');
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send({ success: true });
  }
});

app.listen(3000, () => {
  console.log(`App listening at port ${3000}`);
});
