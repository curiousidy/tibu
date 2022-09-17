const express = require ( "express" ) ;

const app = express ( ) ;

// parse requests of content - type application / json
app.use ( express.json ( ) ) ;

// parse requests of content - type - application / x - www - form - urlencoded
app.use ( express.urlencoded ( { extended : true } ) ) ;

const db = require("./models");

db.Sequelize.sync({ force: true}).then(() => {
    console.log("Drop and re-sync db.");
})

// simple route
app.get ( "/" , ( req , res ) => {
  res.json ( { message : "Welcome to angrybirds application ." } ) ;
} ) ;

require("./routes/angrybird.routes")(app);

// set port , listen for requests
const PORT = process.env.PORT || 8080 ;
app.listen ( PORT , ( ) => {
  console.log (`Server is running on port ${ PORT } .` ) ;
} ) ;
