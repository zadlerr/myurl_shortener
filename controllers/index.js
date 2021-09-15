const models = require('../models');
const bcrypt = require("bcrypt");

let indexFunc = function(req, res, next) {
  res.render('index', { title: 'Zach\'s URL Shortener'});
};

let createHash = function(url){
  // Generate Salt
  let salt = bcrypt.genSaltSync(10);

  // Hash Password
  return bcrypt.hashSync(url, salt);
}

let submitUrl = function(req, res, next) {
  let hashh = createHash(req.body.inputURL);
  console.log("hash: " + hashh);
  console.log(req.body.inputURL);
  let short = 'zach.ly/' + hashh.substring(10,21);
  console.log(short);
  return models.Url.create({
    url: req.body.inputURL,
    hash : hashh.substring(10,21),
    short_url : short
  }).then( newUrl => {res.render('index', { title: 'Zach\'s URL Shortener', newHash: short })} );
};

exports.landing = indexFunc;
exports.submit_url = submitUrl;