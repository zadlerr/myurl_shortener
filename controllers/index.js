let indexFunc = function(req, res, next) {
  res.render('index', { title: 'Zach\'s URL Shortener'});
};

exports.landing = indexFunc;