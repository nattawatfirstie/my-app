const aboutController = {
    index: (req, res) => {
        const data = {
            title: 'เกี่ยวกับเรา',
            description: 'นี่คือหน้า About ครับ'
        };
        res.render('pages/about', data);
    }
};

module.exports = aboutController;