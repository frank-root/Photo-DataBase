const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');


const form = new FormData();
form.append('photo',fs.createReadStream('C:/Users/safew/OneDrive/Pictures/pfpPENCIL.png'))
form.append('Takendate', '6172026');
form.append('Camera', 'Film-35mm');
form.append('PeopleInIt', 'Jam, Mj, OG, RyRy');
form.append('authorID', '4');


axios.post('http://localhost:3000/photos', form, {
    headers: form.getHeaders()
})
.then(response => console.log(response.data))
.catch(err => console.log(err.response.data));


