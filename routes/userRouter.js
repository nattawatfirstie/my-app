const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth,userController.index);           // แสดงรายการทั้งหมด
router.get('/create', auth,userController.createForm); // แสดงฟอร์มสร้าง
router.post('/create', auth,userController.create);    // บันทึกข้อมูลใหม่
router.get('/edit/:id', auth,userController.editForm); // แสดงฟอร์มแก้ไข
router.post('/edit/:id', auth,userController.update);  // บันทึกการแก้ไข
router.post('/delete/:id', auth,userController.delete);// ลบข้อมูล

module.exports = router;