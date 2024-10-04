
/*//1

function contar(){
        var nombre=prompt("Introduce un nombre")
        var contador=0;
        var contador2=0;
        var contado3=0;
        while(nombre!="ULTIMO" &&  isNaN(nombre)){

            if(nombre.charAt(0)=="C"){
                contador2++;
            }

            if(nombre.search("ñ")){
                contado3++;
            }


            contador++;
            var nombre=prompt("Introduce otro nombre")

        }

        alert("Comienzan por C "+contador2+" y comienza por ñ "+contado3)
}

contar()

function empiezan(){
        var frase=prompt("Introduce una palabra que analizar ");

        var contador=1;
        var contador2=0;

        if(frase.charAt(i+1)=="A"){
            contador2++;
        }

        for(var i=0;i<frase.length;i++){
            if(frase.charAt(i)==" "){
                contador++;

                if(frase.charAt(i+1)=="A"){
                    contador2++;
                }
            }

           
        }
        alert("Tiene tantas palabras "+contador)
        
        alert(contador2)

function parentesis(){
    var cadena=prompt("Introduce una cadena de texto que podria contener parentesis ")
    var vacia=" ";

    for(var i=0; i<cadena.length; i++){
        if(cadena.charAt(i)=="("){
            for(var j=i+1;j<cadena.length;j++){
                if(cadena.charAt(j)!=")"){  
                    vacia=vacia+cadena.charAt(j);
                }else{
                    break;
                }    


            }
        }
    }

    alert(vacia);
}
parentesis()
           
        

    

    
           
           
      

}
empiezan()


/*function parentesis(){
    var cadena=prompt("Introduce una cadena de texto que podria contener parentesis ")
    var vacia=" ";

    for(var i=0; i<cadena.length; i++){
        if(cadena.charAt(i)=="("){
            for(var j=i+1;j<cadena.length;j++){
                if(cadena.charAt(j)!=")"){  
                    vacia=vacia+cadena.charAt(j);
                }else{
                    break;
                }    


            }
        }
    }

    alert(vacia);
}
parentesis()

function alreves(){
    var frase=prompt("Introduce una frase que quieras poner al reves ")
    var vacia=" ";
    for(var i=0;i<frase.length;i++){
        vacia = frase.charAt(i)+vacia;

    }
    alert(vacia)
}
alreves()

function correo(){
    var email = prompt("Introduce un email ");

    while(email.charAt()!='@' && !email.match(".com")){
        email=prompt("Introduce un email correcto ")
    }

    return email;
}

function edad(){

    var nombre=prompt("Introdue tu nombre");
    var profesion=prompt("Introduce profesion ");
    var edad=prompt("Introduce tu edad ");
    var email=correo();
    var cadena =(nombre+" "+profesion+" "+edad+""+email)
    
    var muestra="";
    for(var i=0;i<cadena.length;i++){
        if(!isNaN(cadena.charAt(i))){

            muestra=muestra+cadena.charAt(i);
        }
    }
    alert(muestra);
    email=email.split('@')
    alert("Usuario: "+email[0]);
    alert("Servidor: "+email[1])
    
}

edad()


function contar() {
    // Solicitar al usuario una cadena de texto
    var cadena = prompt("Introduce una cadena con nombres");

    
    var er = new RegExp("\\bC\\w*", "g");
    var coincidencias = cadena.match(er);

    // Si coincidencias es null, significa que no se encontraron palabras
    if (coincidencias === null) {
        console.log("Número de palabras que comienzan con C: 0");
    } else {
        // Mostrar el número de coincidencias
        console.log("Número de palabras que comienzan con C: " + coincidencias.length);
    }
}

contar();



function contar() {
    // Solicitar al usuario una cadena de texto
    var cadena = prompt("Introduce una cadena con nombres");

    // Dividimos la cadena en palabras usando espacios como separadores
    var palabras = cadena.split(" ");
    var contador = 0;

    // Expresión regular para palabras que comienzan con "C"
    var er = new RegExp("^C");

    // Recorrer cada palabra y comprobar si empieza con "C"
    for (var i = 0; i < palabras.length; i++) {
        if (er.test(palabras[i])) {
            contador++;
        }
    }

    // Mostrar el número de palabras que comienzan con "C"
    console.log("Número de palabras que comienzan con C: " + contador);
}

contar();


function esPalindromo() {
   
    palabra = prompt("Inntroduce palabra").toUpperCase();
    
  
    let palabraFiltrada = '';

   
    for (let i = 0; i < palabra.length; i++) {
        if (/[A-Z0-9]/.test(palabra[i])) { 
            palabraFiltrada += palabra[i];
        }
    }

  
    let palabraInvertida = '';
    for (var i = palabraFiltrada.length - 1; i >= 0; i--) {
        palabraInvertida += palabraFiltrada[i];
    }

 
    alert(palabraFiltrada === palabraInvertida)
}
esPalindromo()



function eliminarEspacio() {
    var frase = prompt("Introduce una frase");
    
   
    var fraseSinEspacios = frase.replace(/\s/g, ''); 

    console.log(fraseSinEspacios);
}

eliminarEspacio();



function supertrim(){

    var frase=prompt("Introduce una frase ");

    var supertrim=frase.replace(/\s{2,}/g," ");
    alert(supertrim)
}
supertrim()

//11
^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)[A-Za-z0-9\W]{8,20}$

//12
let texto = "Este es un día malo. Todo ha sido malo hoy.";

let resultado = texto.replace(/\bmalo\b/g, "bueno");

console.log(resultado);


//Segunda parte 12
let texto = prompt("Introduce el texto:");

let palabraARemplazar = prompt("Introduce la palabra a reemplazar:");


let nuevaPalabra = prompt("Introduce la nueva palabra:");


let regex = new RegExp("\\b" + palabraARemplazar + "\\b", 'g');


let resultado = texto.replace(regex, nuevaPalabra);

alert("Texto modificado: " + resultado);


//13

const text = "https://www.example.com and https://www.google.com";
const regex = /https?:\/\/[^\s]+\.com/g;

const matches = text.match(regex);

console.log(matches);  


//14
var f = prompt("Introduce una cadena");
var regExp = new RegExp("[A-Za-z]", 'g');

var p = f.match(regExp);
var contador = 0;
var max = 0;
var charMax = '';

    for (var i = 0; i < p.length; i++) {
        contador = 1; 

        for (var j = i + 1; j < p.length; j++) {
            if (p[i] === p[j]) { 
                contador++;
            }
        }

        if (contador > max) {
            max = contador;
            charMax = p[i]; 
        }
    }

    console.log("La que aparece más es '" + charMax + "' con " + max + " ocurrencias.");


//16
var matricula=prompt("Introduce una matricula ");
var m= new RegExp("^[A-Z]{3}\-[0-9]{4}$",'g');

if(matricula.match(m)){
    alert("La matriucla ESTA BIEN");
}else{
    alert("No es correcta");
}
*/
//17
var correo= prompt("Introduce correo postal ")
var c= new RegExp("^[0-5][0-2][0-9]{3}$|[0-4][0-9]{4}$",'g');



if(correo.match(c)){
    alert("El correo ESTA BIEN");
}else{
    alert("No es correcta");
}

//18





