const logger = (req, res, next) => {
    const now = new Date().toLocaleString('th-TH');
    console.log(`[${now}] ${req.method} ${req.url}`);
    next();
};

module.exports = logger;