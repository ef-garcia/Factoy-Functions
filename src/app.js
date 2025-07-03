const { getAge, getUUID } = require('./plugins');
const { buildMakePerson } = require('./FactoryFuction/factory.js');
const { log } = require('console');


const makePerson = buildMakePerson({ getUUID, getAge });


const obj = {
    name: 'John',
    birthdate: '1985-10-21'
};

const john = makePerson(obj);
console.log({ john });
