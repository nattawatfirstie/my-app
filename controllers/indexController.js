const indexController = {
    index: (req, res) => {
        const data = {
            title: 'My App',
            user: 'Nattawat',
            items: ['Item Ax', 'Item Bx', 'Item Cx']
        };
        res.render('pages/index', data);
    }
};

module.exports = indexController;