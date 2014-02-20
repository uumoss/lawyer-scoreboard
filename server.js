// var Sequelize = require('sequelize')
//   , sequelize = new Sequelize('lawyer_scoreboard', 'root', null, {
//       dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
//     })

// var app = express();
 
// var Lawyers = sequelize.define("Lawyers",{
// 	name: Sequelize.STRING,
// 	location: Sequelize.STRING,
// 	record: Sequelize.STRING,
// 	hourly_rate: Sequelize.FLOAT
// })

// sequelize.sync();

// app.use(express.bodyParser());
// app.get('/lawyers', function(req, res) {
//     Lawyer.all().success(function(lawyers) {
//         res.send(lawyers);
//     })
// });

// try {
//     sequelize.sync();
// }

// catch (err) {
//     console.log("database problem: "+err);   
// }

// app.listen(8000)

var express = require('express');
var Sequelize = require('sequelize');

var app = express();

var sequelize = new Sequelize('lawyer_scoreboard', 'root', null, {
  host: "localhost"
});

var Lawyer = sequelize.define('lawyers', {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    record: Sequelize.STRING,
    hourly_rate: Sequelize.FLOAT
})


app.use(express.bodyParser());
app.get('/lawyers', function(req, res) {
    Lawyer.all().success(function(lawyers) {
        res.send(lawyers);
    })
});

try {
    sequelize.sync();
}
catch (err) {
    console.log("database problem: "+err);   
}

app.listen(8000);