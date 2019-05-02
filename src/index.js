const express = require('express');
const path = require('path');
const app = express();
//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//Middlewares

//routes
/*app.get('/', (req, res) =>{
//res.send('Hello World');
//res.sendFile('./views/index.ejs');
//res.sendFile(path.join(__dirname, './views/index.html'));
res.render('index', {
  title: 'simple Web',
  date: new Date()
});
});*/
app.use(require('./routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));
//Initialization server
app.listen(app.set('port'), () =>{
  console.log('server on port', app.get('port'));
});
