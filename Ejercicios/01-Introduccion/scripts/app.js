//"use strict";
console.time('Test time');
//const nombre = prompt('¿Cómo te llamas?');
document.querySelector('.contenido').innerHTML = `Buenos días`;//, ${nombre}`;
console.timeEnd('Test time')

const objTest = {nombre: "testtt",valor: 20, ubicacion:{pais:"china"}}

const {nombre: name, valor: value, ubicacion: {pais:country}} = objTest;

Object.freeze(objTest);
objTest.nombre="cambio"
delete objTest.ubicacion;
console.log(objTest)
console.log(Object.isFrozen(objTest));

function objConstructor(nombre,edad,telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
}

const user = new objConstructor("Eros",33,638347420);

console.log(user);

let obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);