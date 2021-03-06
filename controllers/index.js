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


let showUrls = function(req,res,next){
  return models.Url.findAll().then(url => { // leads is the returned obj from findAll()
    res.render('urls', { title: 'All available hashed Urls',urls: url });
  });
};

let redirect = function(req,res,next){
  models.Url.findOne({
    where:{
      hash : req.params.hash
    }
  }).then(result =>{
    console.log(result.dataValues.url);
    res.redirect(result.dataValues.url);
  })
};


exports.landing = indexFunc;
exports.submit_url = submitUrl;
exports.show_urls = showUrls;
exports.redirect = redirect;