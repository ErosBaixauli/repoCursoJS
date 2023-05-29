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

//Using forEach and map
const exampleArray = ["platanos","naranjas","manzanas","peras","fresas"];

exampleArray.forEach((fruta,posicion)=>{
    console.log(posicion+": "+fruta);         //ForEach browse every element and executes the code inside the function
});

const fruits = exampleArray.map((fruta)=>{
    return `I have ${fruta}`;         //map does the same, but creating a new array with the result
});
console.log(fruits);

//Ejercicio Fizz buzz
for (let x=1;x<=100;x++){
    if (x%3===0 && x%5===0){
        console.log(`FIZZBUZZ!! (${x})`);
    }else if(x%3===0){
        console.log(`Fizz (${x})`);
    }else if(x%5===0){
        console.log(`Buzz!! (${x})`);
    }
}

const arr = [1, 2, 3, 4, 5];
for (let [index, value] of arr.entries()) {
  console.log(typeof index, value);
}

const arr2 = [1, 2, 3, 4, 5];
for (let [index, value] of Object.entries(arr2)) {
  console.log(typeof index, value);
}


const array = [1,2,3,4,5];
let resultado = array.reduce((total, values)=> total + values,0);
console.log ("resultado: "+resultado);