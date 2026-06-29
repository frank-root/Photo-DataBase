const mysql = require('mysql2');
const dbconfig = require('./dbconfig');

const connectionPool = {
    pool: null,

    init: function(){
        this.pool = mysql.createPool(dbconfig);
    },

    getPool: function(){
        return this.pool;

    },
};

module.exports = connectionPool;