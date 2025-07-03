const getAgePlugin = require('get-age');


const getAge = (birthdate) => {
    if (!birthdate) return new Error('Birthdate es requerido');
    return getAgePlugin(birthdate);
}


module.exports = {
    getAge,
}