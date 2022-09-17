module.exports = app => {
    const birds = require ( "../controllers/angrybird.controller.js" );

   var router = require ( "express" ).Router ();

   // Create a new bird
    router.post( "/" , birds.create );

   // Retrieve all birds
    router.get( "/" , birds.findAll );

   // Retrieve a single bird with id
    router.get( "/:id" , birds.findOne );

   // Update a bird with id
    router.put( "/:id" , birds.update );

   // Delete a bird with id
    router.delete( "/:id" , birds.delete );

    app.use( '/api/birds' , router );

  };
                                          