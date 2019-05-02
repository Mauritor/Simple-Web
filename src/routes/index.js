const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
res.render('index.html', {
  title: 'simple Web',
  date: new Date()
});
});
router.get('/contact', (req, res) => {
  res.render('contact.html', {title: 'simple Web'});
});
module.exports = router;
