var express = require('express');
var router = express.Router();
const postController = require("../controller/post.controller")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/bfhl', function (req, res, next) {
  // console.log(req.body);
  postController.handlePostReq(req, res);
});

module.exports = router;
