var express = require('express');
var router = express.Router();

var reply;

router.post('/device', function(req, res){
    reply = req.body;
    res.send(reply);
});

router.get('/get-device', function(req, res) {
  res.send(reply);
});

router.get('/show-bay-face', function(req, res){
    res.render('index');
});

router.get('/show-bay-face', function(req, res){
    res.render('index');
});
module.exports = router;
