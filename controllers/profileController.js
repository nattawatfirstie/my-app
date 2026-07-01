const profileController = {
    index: (req, res) => {
        const data = {
            title: 'Profile',
            description: 'My Profile'
        };
        res.render('pages/users/profile', data);
    }
};

module.exports = profileController;