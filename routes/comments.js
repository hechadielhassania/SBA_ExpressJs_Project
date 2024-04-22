const express = require('express');
const router = express.Router();
const fs = require('fs');

// Read comments data from JSON file
const commentsData = JSON.parse(fs.readFileSync('./data/comments.json'));

// GET all comments
router.get('/', (req, res) => {
  res.json(commentsData);
});

// GET a specific comment
router.get('/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const comment = commentsData.find(comment => comment.id === commentId);
  if (!comment) {
    res.status(404).json({ message: "Comment not found" });
  } else {
    res.json(comment);
  }
});

// POST a new comment
router.post('/', (req, res) => {
  const { postId, content, author } = req.body;
  const newComment = {
    id: commentsData.length + 1,
    postId,
    content,
    author,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  commentsData.push(newComment);
  fs.writeFileSync('./data/comments.json', JSON.stringify(commentsData, null, 2));
  res.status(201).json(newComment);
});

// PUT/PATCH update a comment
router.put('/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const { content } = req.body;
  const commentIndex = commentsData.findIndex(comment => comment.id === commentId);
  if (commentIndex === -1) {
    res.status(404).json({ message: "Comment not found" });
  } else {
    const updatedComment = {
      ...commentsData[commentIndex],
      content: content || commentsData[commentIndex].content,
      updatedAt: new Date().toISOString()
    };
    commentsData[commentIndex] = updatedComment;
    fs.writeFileSync('./data/comments.json', JSON.stringify(commentsData, null, 2));
    res.json(updatedComment);
  }
});

// DELETE a comment
router.delete('/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const commentIndex = commentsData.findIndex(comment => comment.id === commentId);
  if (commentIndex === -1) {
    res.status(404).json({ message: "Comment not found" });
  } else {
    commentsData.splice(commentIndex, 1);
    fs.writeFileSync('./data/comments.json', JSON.stringify(commentsData, null, 2));
    res.json({ message: "Comment deleted successfully" });
  }
});

module.exports = router;
