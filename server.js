const express = require('express');
const bodyParser = require('body-parser');
const middleWare = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js')
const app = express();
app.use(bodyParser.json());
app.use(middleWare.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:id', mainCtrl.getHobbiesById);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:id', mainCtrl.getFamilyByGender);
// app.get('/restaurants', mainCtrl.getRestaurants);
// app.get('/restaurants/:id', mainCtrl.getRestaurantsByName);



app.listen(3002, function () {
    console.log("listening on port 3002");
});