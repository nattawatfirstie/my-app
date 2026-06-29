const auth = (req, res, next) => {
    const isLoggedIn = false; // สมมติว่า login อยู่

    if (isLoggedIn) {
        next(); // ผ่านไปได้เลย
    } else {
        res.redirect('/login'); // ไม่ผ่าน → กลับไปหน้า login
    }
};

module.exports = auth;