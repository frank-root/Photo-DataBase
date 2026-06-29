const axios = require('axios');

const photo = {
    ID: 12,
    photoname: 'Lake',
    Takendate: 6172026,
    Camera: 'Film-35mm',
    PeopleInIt: 'Jam, Jubuz, MJ, OG',
    authorID: 6,
};

axios
    // .post('http://localhost:3000/photos', photo)
    // .put('http://localhost:3000/photos/111', photo)
    .delete('http://localhost:3000/photos/11')
    .then(response => console.log(response))
    .catch((err) => console.log(err));