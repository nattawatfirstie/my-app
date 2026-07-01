const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');
const profileController = require('../controllers/profileController');
const auth = require('../middleware/auth');

router.get('/', indexController.index);
router.get('/about', auth, aboutController.index);
router.get('/profile', auth, profileController.index);

module.exports = router;