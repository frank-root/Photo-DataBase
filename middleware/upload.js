const multer = require('multer');
const path = require('path');
const allowed = ['image/jpeg', 'image/png', 'image/webp']

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }


});

const filefitter = (req, file, cb) => {
    if (allowed.includes(file.mimetype)){
        cb(null, true);
    } else {
        cb(new Error('Only JPEG, PNG, and WebP allowed'), false);
    }
};


const upload = multer({
    storage: storage,
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter: filefitter
});

module.exports = upload;
