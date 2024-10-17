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



//9 PARTE 1
let esMenor=(...numeros) => Math.min(...numeros);

console.log(esMenor(2,3,4,5,6));

//9 PARTE 2
let colocaEnMedio=(a1,a2)=>{
    a1.splice((a1.length/2),0,a2)
    return a1;
}

console.log(colocaEnMedio([2,3,4,5,6],[2,2,3,1]))


//9 parte 3
let uneArrays=(...a)=> a.flat();

console.log(uneArrays([1, 2, 3], [4, 5, 6], [7, 8]));

//9 parte 4 

let sumaArgPares=(...a)=>{
    var suma=0;
    for(let i in a){
        if(a[i]%2===0){
            suma=suma+a[i];
        }
    }
    return suma;
}

console.log(sumaArgPares(1,2,6))
*/
//EJERICCIO 17
var array= [];
var p= prompt("Introduce una palabra ")
while(isNaN(p)){
    array.push(p)
     p= prompt("Introduce una palabra ")
}


let ventana;

document.getElementById("abrir"),addEventListener("click",()=>{
    ventana=window.open()
    ventana.document.write("<h1>la primera palabra "+array[0]+"</h1>")
    ventana.document.write("<h1>la ultima palabra "+array[array.length-1]+"</h1>")
    ventana.document.write("<h1>La cantidad de palabras que hay en el array son "+array.length+"</h1>")
    ventana.document.write("<h1>LArray ordenado alfabeticamente "+array.sort()+"</h1>")

})
