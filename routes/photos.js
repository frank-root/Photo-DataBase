var express = require('express');
var router = express.Router();
const connectionPool = require('../database/connectionPool');
const PhotoRepository = require('../database/PhotoRepository');

const repository = new PhotoRepository(connectionPool);


/* GET /photos */
router.get('/', function(req, res) {
    repository.getALL((err, result) => {
        err 
            ? res.status(500).json({ error: err.toString() })
            : res.json(result);
    });

})

// GET /photos/:id
router.get('/:id', function(req, res) {
    repository.get(req.params.id, (err, result) => {
        err 
            ? res.status(500).json({ error: err.toString() })
            : res.json(result);
    });
})  

// PUT /customer/:id
router.put('/:id', function(req, res) {
   repository.update(req.params.id, req.body, (err, result) => {
        err ? res.status(500).json({error: err.toString()})
        : res.sendStatus(200);
    });
});

// DELETE /customer/:id
router.delete('/:id', function(req, res) {
    repository.delete(req.params.id, (err) => {
        err 
            ? res.status(500).json({error: err.toString()})
            : res.sendStatus(200);
    });
});
    


// POST /photos
router.post('/', function(req, res) {
    repository.save(req.body, (err, result) => {
        err ? res.status(500).json({error: err.toString()})
        : res.sendStatus(200);
    });
    
});

module.exports = router;
