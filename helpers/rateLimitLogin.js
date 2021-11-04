const rateLimit = require('express-rate-limit');
const { HttpCode } = require('../config/constants');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: (req, res, next) => {
    return res.status(HttpCode.TO_MANY_REQVEST).json({
      status: 'error',
      code: HttpCode.TO_MANY_REQVEST,
      message: 'To many reqvest',
    });
  },
});

module.exports = limiter;
