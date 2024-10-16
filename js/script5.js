
//3
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





