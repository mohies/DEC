/*//3
let aN = [123, 4567, 89, 101112]; 

function numCifras() {
    let contador = 0;
    for (let i in arguments) {
        contador += String(parseInt[i]).length;
    }
    console.log(contador);
}
numCifras(...aN); 

let numCifras2 = (...a) => {
    let contador = 0;
    for (let i in a) {
        contador += String(a[i]).length;
    }
    console.log(contador);
};
numCifras2(...aN);


//6

let aN = [];
let num = parseInt(prompt("Introduce un número"));

while (!isNaN(num)) {
    aN.push(num);  
    num = parseInt(prompt("Introduce otro número (o algo no numérico para salir)"));
}

function suma(){
    var suma=0;
    for(let i in arguments){
        suma=suma+arguments[i];
    }
    console.log("La suma "+ suma)
}

suma(...aN)

let suma2=(...a)=>{
    var suma=0;
    for(let i in a){
        suma=suma+parseInt(a[i]);
    }
    console.log("La suma "+ suma)

}

suma2(...aN)


*/
//9
let esMenor=(...numeros) => Math.min(...numeros);

console.log(esMenor(2,3,4,5,6));

let colocaEnMedio=(a1,a2)=>{
    a1.splice((a1.length/2),0,a2)
    return a1;
}

console.log(colocaEnMedio([2,3,4,5,6],[2,2,3,1]))