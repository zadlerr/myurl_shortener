var express = require('express');
var router = express.Router();

let landing = require('../controllers/index');

/* GET home page. */
router.get('/', landing.landing);
router.post('/',landing.submit_url);

module.exports = router;
