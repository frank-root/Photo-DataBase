var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* GET /photos */
router.get('/', function(req, res) {
    const dbconfig = require('../dbconfig');
    console.log('dbconfig:', dbconfig);

    const db = mysql.createConnection(dbconfig);

    db.connect((err) => {
        if (err) throw err;
        
        const photo = {
            ID: 6,
            photoname: 'Beach',
            Takendate: 6172026,
            Camera: 'Film-35mm',
            PeopleInIt: 'Jam, Jubuz, MJ, OG',
            authorID: 1,
        }

        db.query('INSERT INTO photos SET ?', photo, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
        
    });


  res.send('photos list');
});

module.exports = router;
