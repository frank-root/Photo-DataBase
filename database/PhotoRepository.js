class PhotoRepository {
    constructor(connectionPool) {
        this.connectionPool = connectionPool;
    }

    save(photo, callback) {
        this.pool.query('INSERT INTO photos SET ?', photo, callback);
    }

    get pool() {
        return this.connectionPool.getPool();
    }

    get(id, callback) {
        this.pool.query('select * from photos where id = ?', [id], callback);

    }

    getALL(callback) {
        this.pool.query('SELECT * FROM photos', callback);
    }

    update(id, photo, callback) {
        this.pool.query('UPDATE photos SET ? WHERE ID = ?', [photo, id], callback);
    }

    delete(id, callback) {
        this.pool.query('DELETE FROM photos WHERE id = ?', [id], callback);
    }
}

module.exports = PhotoRepository;