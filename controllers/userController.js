const db = require('../config/db');

const userController = {
    // READ - แสดงรายการ users ทั้งหมด
    index: async (req, res) => {
        try {
            const [users] = await db.query('SELECT * FROM users');
            res.render('pages/users/index', { title: 'Users', users });
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    },

    // CREATE - แสดงฟอร์มสร้าง user
    createForm: (req, res) => {
        res.render('pages/users/create', { title: 'เพิ่ม User' });
    },

    // CREATE - บันทึก user ใหม่
    create: async (req, res) => {
        try {
            const { name, email } = req.body;
            await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
            res.redirect('/users');
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    },

    // UPDATE - แสดงฟอร์มแก้ไข user
    editForm: async (req, res) => {
        try {
            const [users] = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
            res.render('pages/users/edit', { title: 'แก้ไข User', user: users[0] });
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    },

    // UPDATE - บันทึกการแก้ไข
    update: async (req, res) => {
        try {
            const { name, email } = req.body;
            await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id]);
            res.redirect('/users');
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    },

    // DELETE - ลบ user
    delete: async (req, res) => {
        try {
            await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
            res.redirect('/users');
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    }
};

module.exports = userController;