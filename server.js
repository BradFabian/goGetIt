// Express
const express = require("express");
const app = express();
const product = require('./routes/apiRoutes');
const path = require('path');
const PORT = process.env.PORT || 3000;


const db = require("./models");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars
var exphbs = require("express-handlebars");
const hbs = exphbs.create({
	helpers: {
		formatPrice: function(price) {
  			price = price.toFixed(2);
  			return price;
  		}
  	},
  	defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Router
app.use('/', product);

// Handle 404
app.use(function(req, res) {
	res.render('404');
});

db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});

































// require("dotenv").config();
// var express = require("express");
// var bodyParser = require("body-parser");

// var session = require("express-session");
// //Requiring passport 
// var passport = require("./config/passport");
// var db = require("./models/index");

// var app = express();
// var PORT = process.env.PORT || 8080;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static("public"));
// // We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "Gardens", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// //var ejs  = require('ejs')
// /*app.engine('html', ejs.renderFile);
// app.set('view engine', 'html');*/


// // Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = false;
// }

// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync().then(function(){
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

// module.exports = app;
