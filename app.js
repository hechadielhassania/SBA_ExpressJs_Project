const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const fs = require('fs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
// app.use(auth);
app.use(methodOverride('_method'));

// Routes
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Define a route to render the index page
app.get('/', (req, res) => {
  // Read posts data from JSON file
  const postsData = JSON.parse(fs.readFileSync('./data/posts.json'));
  res.render('index', { posts: postsData });
});

// Define a route to render the edit page
app.get('/edit/:id', (req, res) => {
  // Retrieve the post ID from the request parameters
  const postId = parseInt(req.params.id);
  // Read posts data from JSON file
  const postsData = JSON.parse(fs.readFileSync('./data/posts.json'));
  // Find the post with the specified ID
  const post = postsData.find(post => post.id === postId);
  // Render the edit page and pass the post data to the view
  res.render('edit', { post });
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
