const express = require('express');
const router = express.Router();
const fs = require('fs');

// Read posts data from JSON file
const postsData = JSON.parse(fs.readFileSync('./data/posts.json'));

// GET all posts
router.get('/', (req, res) => {
  res.json(postsData);
});

// GET a specific post
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = postsData.find(post => post.id === postId);
  if (!post) {
    res.status(404).json({ message: "Post not found" });
  } else {
    res.json(post);
  }
});

// POST a new post
router.post('/', (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    id: postsData.length + 1,
    title,
    content,
    author,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  postsData.push(newPost);
  fs.writeFileSync('./data/posts.json', JSON.stringify(postsData, null, 2));
  res.status(201).json(newPost);
});

// PUT/PATCH update a post
// Update a post by ID
router.put('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postsData = JSON.parse(fs.readFileSync('./data/posts.json'));
  const postIndex = postsData.findIndex(post => post.id === postId);
  if (postIndex !== -1) {
    // Update the post data
    // ...
    fs.writeFileSync('./data/posts.json', JSON.stringify(postsData, null, 2));
    res.redirect('/'); // Redirect back to the homepage
  } else {
    res.status(404).send('Post not found');
  }
});

// Delete a post by ID
router.delete('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postsData = JSON.parse(fs.readFileSync('./data/posts.json'));
  const updatedPosts = postsData.filter(post => post.id !== postId);
  fs.writeFileSync('./data/posts.json', JSON.stringify(updatedPosts, null, 2));
  res.redirect('/'); // Redirect back to the homepage
});

module.exports = router;
