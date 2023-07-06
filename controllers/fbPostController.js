const express = require('express');
var router = express.Router();

var { FbPost } = require('../models/fbposts');

// => localhost:3000/fbPosts/
// router.get('/', (req, res) => {
//     let results = FbPost.find({});
//     res.send(results);
// });

// Get a list of 50 posts
router.get("/", async (req, res) => {
    let fbposts = await FbPost.collection("fbposts");
    let results = await fbposts.find({})
      .limit(50)
      .toArray();
  
    res.send(results).status(200);
  });

module.exports = router;

