const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');
const auth = require('../middleware/auth');

router.get('/', indexController.index);
router.get('/about', auth, aboutController.index);  // ต้อง login ก่อนถึงเข้าได้

module.exports = router;