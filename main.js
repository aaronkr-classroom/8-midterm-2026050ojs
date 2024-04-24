const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const homeController = require('./controllers/homeController');
const errorController = require('./controllers/errorController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', homeController.getIndex);
app.get('/transportation', homeController.getTransportation);
app.get('/contact', homeController.getContact);
app.post('/contact', homeController.postContact);

app.use(errorController.handle404);
app.use(errorController.handle500);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
