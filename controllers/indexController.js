const db = require('../config/db');

const indexController = {
    index: async (req, res) => {
        try {
            const [users] = await db.query('SELECT * FROM users');
            const data = {
                title: 'My App',
                user: 'Nattawat',
                items: ['Item A', 'Item B', 'Item C'],
                users: users,
                sessionUser: req.session.user || null
            };
            res.render('pages/index', data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    }
};

module.exports = indexController;