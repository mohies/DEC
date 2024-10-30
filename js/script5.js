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
    let suma=0;
     a.filter((valor)=> valor %2 ==0).forEach((valor)=> suma=suma+valor)
     return suma;
}

console.log(sumaArgPares(1,2,6,8))

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

//19
var array2 = [];
var datos = prompt("Introduce lo siguiente [Nombre, Apellido1, Apellido2, DNI, fecha Nacimiento]");

while (datos!=="") {
    var array = datos.split(",");
    array2.push(array);  
    datos = prompt("Introduce otros datos [Nombre, Apellido1, Apellido2, DNI, fecha Nacimiento]");
}

console.log(array2);

var array2=[];
array2.push(["Juan", "Pérez", "Gómez", "12345678A", "01/01/2007"]);
array2.push(["Ana", "Pérez", "Gómez", "87654321B", "02/02/1992"]);
array2.push(["Luis", "García", "Fernández", "23456789C", "03/03/1988"]);
array2.push(["María", "Rodríguez", "Sánchez", "34567890D", "04/04/1995"]);
array2.push(["Carlos", "Martínez", "Torres", "45678901E", "05/05/1985"]);
array2.push(["Elena", "Pérez", "González", "56789012F", "06/06/1993"]);
array2.push(["José", "Hernández", "Morales", "67890123G", "07/07/1980"]);
console.log(array2)
function mayordeEdad(ano){
    let f = new Date()
    let year= f.getFullYear();
    return array2.filter((persona)=>(year-Number(persona[4].split("/")[2]))>=ano)
}
function menorEdad(ano){
    let f = new Date()
    let year= f.getFullYear();
    return array2.filter((persona)=>(year-Number(persona[4].split("/")[2]))<ano)
}
/*function modificaDatos(){
    let dni=prompt("Di el dni de la persona que quieres modificar");
    let dato = prompt("¿Qué dato quieres modificar? (nombre, apellido1, apellido2, dni, fecha)").toLowerCase();
    return array2.forEach((persona)=>{
        if(persona[3]==dni){
            let nuevoDato = prompt(`Introduce el nuevo valor para: ` + dato);
            
            // Modificar el campo adecuado según el dato que elijas
            switch(dato) {
                case 'nombre':
                    persona[0] = nuevoDato;
                    break;
                case 'apellido1':
                    persona[1] = nuevoDato;
                    break;
                case 'apellido2':
                    persona[2] = nuevoDato;
                    break;
                case 'dni':
                    persona[3] = nuevoDato;
                    break;
                case 'fecha':
                    persona[4] = nuevoDato;
                    break;
                default:
                    alert("Dato no válido");
        }
    }
       
    })
}
function buscarPorDNI(dni) {
    return array2.find((persona)=> persona[3]=== dni); //mejor hacerlo con find esta funcion porque te encuentra el priemer elemento 
}
function buscarPorApellidos(apellido1, apellido2) {
    return array2.filter( (persona)=>{
        let edad = menorEdad(18).includes(persona);
        return persona[1] === apellido1 && persona[2] === apellido2 && edad;
    });
}
function buscarPorFecha(fecha) {
    return array2.find((persona)=> persona[4]=== fecha);
}

function eliminarPersona() {
let dni = prompt("Escribe el dni de la persona que quieres eliminar");
    
  
let personaAEliminar = array2.find((persona) => persona[3] === dni);
    
   
    if (personaAEliminar!=null) {
        let confirmacion = confirm("quieres eliminar a" + personaAEliminar[0] + " con DNI " + dni);
        
       
        if (confirmacion) {
            array2 = array2.filter((persona) => persona[3] !== dni);
            console.log(array2); 
        }else{
        alert("Pues nada no la eliminamos");
        }
    } else {
        alert("Persona no encontrada");
    }
}

var dni = buscarPorDNI("67890123G");
var apellidos = buscarPorApellidos("Pérez", "Gómez");
var f=buscarPorFecha("04/04/1995")
var p=mayordeEdad(18)
eliminarPersona()
console.log(array2)
console.log(dni);
console.log(apellidos);
console.log(f);

//11
function extraerNumerosYSumar(cadena) {
  
const numeros = cadena.match(/\d+/g); 
    if (numeros!=null) {
 
        const numerosEnteros = numeros.map(Number);

        const suma = numerosEnteros.reduce((acc, num) => acc + num, 0);

        console.log("Números encontrados:", numerosEnteros);
        console.log("Suma de los números:", suma);
    } else {
        console.log("No se encontraron números en la cadena.");
    }
}

const entrada = prompt("Introduce una cadena con números:");
extraerNumerosYSumar(entrada);
//13


let rellenar=()=>{
var n= prompt("Introduce numero")

while(isNaN(n)){
    var n= prompt("Introduce numero")
    }

var a = [];
for(let i=0;i<n;i++){
    var m=[]
    for(let j=0;j<n;j++){
        m.push(Math.floor(Math.random() * 100)); // Añadimos un número aleatorio
    }
    a.push(m)
}
console.log(a)
}
rellenar()



//14

let matrices=()=>{
var a = [];
for(let i=0;i<2;i++){
    var m=[]
    for(let j=0;j<6;j++){
        m.push(Math.floor(Math.random() * 100));
    }
    a.push(m)
}
console.log(a)
let suma=0;
let resultado=a.map((i)=> suma=suma+a[i]);
console.log(resultado)


}

matrices()
//22
MAP Y SET

const modulos=new Map();
modulos.set("DWECL","Desarrollo Web en Entorno Cliente")
modulos.set("EIEM","Empresa Inciativa e Emprendedora")
modulos.set("DWES","Desarrollo Web en Entorno Servidor")
modulos.set("DIW","Desarrollo Interfaces Web")
modulos.set("DAW","Despliegue Aplicaciones Web")
console.log(modulos.size)
console.log(modulos)

for(let [clave,valor] of modulos){
    console.log(clave)
}

for(let [clave,valor] of modulos){
    console.log(valor)
}



if(modulos.has("DAW")){
    console.log("Esta asi que lo eliminamos :)")
    modulos.delete("DAW")
    console.log("Asi queda el map " ,modulos)
    
}else{
    console.log("No esta")
}

const ordenado = new Map([...modulos.entries()].sort());
console.log(ordenado); //o hacer un let array=[...modulos ] y array.sort()


//23
const modulos = new Map();


function agregarModulo(nombre, duracion, numAlumnos) {
    modulos.set(nombre, { duracion: duracion, numAlumnos: numAlumnos });
}

agregarModulo('DWS', '40 horas', 30);
agregarModulo('DWEC', '60 horas', 25);
agregarModulo('EIEM', '30 horas', 20);

console.log(modulos)


for(let [clave,valor] of modulos){
    if(clave=="DWS"){
        console.log("El numero de alumnos es",valor["numAlumnos"])
    }
}

var suma=0;
for(let [clave,valor] of modulos){
    suma=suma+valor["numAlumnos"]
}
console.log("El numero total de alumnos es",suma)


let array=[1,2,3,4,6,7,8,9,1,1,2,2,3,3]
let repetido = (array) => {
    let con = new Set(array);
    let resultado = [...con];  
    console.log(resultado);     
};
repetido(array);


//Objetos 
//25
class Coordenadas {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    metodo1 = () => {
        if (this.x > 0 && this.y > 0) {
            console.log("Cuadrante 1")
        }
        if (this.x < 0 && this.y < 0) {
            console.log("Cuadrante 3")
        }
        if (this.x > 0 && this.y < 0) {
            console.log("Cuadrante 4")
        }
        if (this.x < 0 && this.y > 0) {
            console.log("Cuadrante 2")
        }

    }
}

const coord1 = new Coordenadas(-10, 20);
coord1.metodo1();

function Coordenada(x, y) {
    this.x = x;
    this.y = y;

    this.metodo1 = () => {
        if (this.x > 0 && this.y > 0) {
            console.log("Cuadrante 1")
        }
        if (this.x < 0 && this.y < 0) {
            console.log("Cuadrante 3")
        }
        if (this.x > 0 && this.y < 0) {
            console.log("Cuadrante 4")
        }
        if (this.x < 0 && this.y > 0) {
            console.log("Cuadrante 2")
        }

    }
}

const coord2 = new Coordenada(-10, 20);
coord2.metodo1();

class Rectangulo extends Coordenadas {
    constructor(punto1, punto2) {
        super(punto1.x, punto1.y);
        this.alto = Math.abs(punto1.y - punto2.y);
        this.ancho = Math.abs(punto1.x - punto2.x);
    }

    perimetro() {
        return 2 * (this.alto + this.ancho);
    }

    area() {
        return this.alto * this.ancho;
    }

}

let coord3 = new Coordenadas(20, 30)

let rectangulo1 = new Rectangulo(coord1, coord3);
console.log(rectangulo1.alto)
console.log(rectangulo1.perimetro())
console.log(rectangulo1.area())


function Rectangulof(punto1, punto2) {
    this.alto = Math.abs(punto1.y - punto2.y);
    this.ancho = Math.abs(punto1.x - punto2.x);


}


//Ejercicio 20 con objetos

class Persona {
    constructor(dni, nombre, edad) {
        this.dni = dni;
        this.nombre=nombre;
        this.edad=edad;
    }
    muestra(){
        return this.nombre + " tiene dni "+this.dni+" y tiene una edad de "+ this.edad+" años"; 
    }

}

const per1=new Persona("34423453L","Pepe",18)
console.log(per1.muestra())*/





