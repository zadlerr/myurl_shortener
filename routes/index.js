var express = require('express');
var router = express.Router();

let landing = require('../controllers/index');

/* GET home page. */
router.get('/', landing.landing);
router.post('/',landing.submit_url);
router.get('/urls',landing.show_urls);
router.get('/:hash',landing.redirect);

module.exports = router;
