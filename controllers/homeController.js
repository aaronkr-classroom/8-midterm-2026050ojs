const httpStatus = require('http-status-codes');

module.exports = { 
  getIndex: (req, res) => {
    res.render('index');
  },
  getTransportation: (req, res) => {
    res.render('transportation');
  },
  getContact: (req, res) => {
    res.render('contact');
  },
  postContact: (req, res) => {
    res.redirect('/thanks');
  }
};
