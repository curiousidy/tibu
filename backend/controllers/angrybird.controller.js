const db = require("../models");
const Bird = db.angrybird;
const Op = db.Sequelize.Op;

// Create and Save a new bird
exports.create = (req, res) => {
    // Validate request
    if (!req.body.power && !req.body.genre) {
        res.status(400).send({
            message : "I need a bird!"
        });
    return;
    }

    // Create a bird
    const bird = {
        ...req.body,
    };

    // Save bird in the database
    Bird.create(bird).then(data => {
            res.send(data) ;
        })
        .catch(err => {
            res.status(500).send({
                message:  err.message || " Some error occurred while creating the bird."
            });
        });
};

// Retrieve all Birds from the database
exports.findAll = (req, res) => {
    Bird.findAll().then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a bird."
        });
    });
};

// Find a single Bird with an id
exports.findOne = (req, res) => {
    id = {...req.params};
    Bird.findOne(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a bird."
        });
    });
};

// Update a Bird by the id
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const data  = await Bird.update({...req.body}, {
            where: {
                id
            }
        })

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a bird."
        });    
    }
    
};

// Delete a Bird with the specific id :
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const data  = await Bird.destroy({
            where: {
              id
            }
          });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a bird."
        });    
    }
};
