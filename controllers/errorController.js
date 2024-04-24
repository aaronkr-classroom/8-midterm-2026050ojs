const httpStatus = require('http-status-codes');

module.exports = {
  logErrors: (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  },
  respondNoResourceFound: (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render('error', { errorCode });
  },
  respondInternalError: (err, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.error(`Error occurred: ${err.stack}`);
    res.status(errorCode);
    res.render('error', { errorCode });
  }
};
