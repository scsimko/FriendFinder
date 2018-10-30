// Dependencies 
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

//Express app to handle data parsing
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.use(bodyparser.text())

//Routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

//listener
app.listen(process.env.PORT || 8080, () => console.log('App listening on PORT: 8080'))