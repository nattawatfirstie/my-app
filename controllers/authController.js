const db = require('../config/db');

const authController = {
    // แสดงหน้า login
    loginForm: (req, res) => {
        res.render('pages/login', { title: 'เข้าสู่ระบบ', error: null });
    },

    // ตรวจสอบ login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

            if (users.length === 0) {
                return res.render('pages/login', { title: 'เข้าสู่ระบบ', error: 'ไม่พบ Email นี้ในระบบ' });
            }

            // สมมติเช็ค password ตรงๆ ก่อน (ยังไม่ hash)
            if (users[0].password !== password) {
                return res.render('pages/login', { title: 'เข้าสู่ระบบ', error: 'Password ไม่ถูกต้อง' });
            }

            // login สำเร็จ เก็บ session
            req.session.user = {
                id: users[0].id,
                name: users[0].name,
                email: users[0].email
            };

            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    },

    // logout
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
};

module.exports = authController;