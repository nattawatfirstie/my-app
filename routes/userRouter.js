const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);           // แสดงรายการทั้งหมด
router.get('/create', userController.createForm); // แสดงฟอร์มสร้าง
router.post('/create', userController.create);    // บันทึกข้อมูลใหม่
router.get('/edit/:id', userController.editForm); // แสดงฟอร์มแก้ไข
router.post('/edit/:id', userController.update);  // บันทึกการแก้ไข
router.post('/delete/:id', userController.delete);// ลบข้อมูล

module.exports = router;