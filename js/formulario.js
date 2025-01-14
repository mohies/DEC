window.addEventListener("load", inicializar, false);

function inicializar() {
    //1 document.getElementById("formulario").addEventListener("submit",mostrardatos) /* no hay que poner parentesis ya que no queiro que se ejcute en el momento*/
    //document.getElementById("submit").addEventListener("click",mostrar)
    //9 document.getElementById("boton").addEventListener("click",confirma)
    //[...document.getElementsByTagName("input")].forEach((a) => a.addEventListener("input", teclado2));
    //[...document.getElementsByTagName("input")].forEach((a) => a.addEventListener("blur", teclado));
    document.getElementById("pass1").addEventListener("input", teclado2)
    document.getElementById("pass1").addEventListener("blur", teclado)
    document.getElementById("pass2").addEventListener("input", teclado2)
    document.getElementById("pass2").addEventListener("blur", teclado)
    document.getElementById("formulario").addEventListener("blur", teclado)
    document.getElementById("formulario").addEventListener("submit", validar)
   
}

/* //1
function mostrardatos(event) {
    event.preventDefault();


    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellido = document.getElementById('apellido').value.toUpperCase();
    const usuario = document.getElementById('usuario').value.toUpperCase();
    const pass = document.getElementById('pass').value.toUpperCase();
    const dia = document.getElementById('dia').value.toUpperCase();
    const mes = document.getElementById('mes').value.toUpperCase();
    const anio = document.getElementById('anio').value.toUpperCase();
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const phone = document.getElementById('phone').value.toUpperCase();
    const email = document.getElementById('email').value.toUpperCase();

    const contenido = `
        <h2>Formulario Enviado</h2>
        <p><strong>Nombre:</strong> ` + nombre + `</p>
        <p><strong>Apellido:</strong> ` + apellido + `</p>
        <p><strong>Usuario:</strong> ` + usuario + `</p>
        <p><strong>Contraseña:</strong> ` + pass + `</p>
        <p><strong>Día:</strong> ` + dia + `</p>
        <p><strong>Mes:</strong> ` + mes + `</p>
        <p><strong>Año:</strong> ` + anio + `</p>
        <p><strong>Sexo:</strong> ` + sexo + `</p>
        <p><strong>Teléfono:</strong> ` + phone + `</p>
        <p><strong>Email:</strong> ` + email + `</p>
    `;

    document.body.innerHTML += contenido; //es necesario para que escriba por debajo del html y no remplace entero


    let ventana = window.open('', 'Ventana nueva', "");
    ventana.document.write(contenido)

}*/

//Añadir un campo de texto en el ejercicio anterior,  al lado de la fecha de nacimiento en el que el usuario no pueda escribir y aparezca la edad del usuario.

/*2
function mostrar() {
    const anio = document.getElementById('anio').value;
    const fecha = new Date();

    let edad = fecha.getFullYear() - Number(anio);

    document.getElementById("edad").textContent = `Edad: ${edad} años`;


}*/

function validar(event) {
    const anio = document.getElementById('anio').value;
    const fecha = new Date();
    let edad = fecha.getFullYear() - Number(anio);


    if (edad < 18) {
        let campo = document.getElementById('anio')

        let valor = document.getElementById("error");
        valor.textContent = "ERROR INTRODUCE UNA FECHA QUE SEAS MAYOR DE EDAD";
        valor.style.color = "red";
        campo.focus()
        event.preventDefault()
        
    }

    let contraseña1 = document.getElementById("pass1").value;
    let contraseña2 = document.getElementById("pass2").value;

    if (contraseña1 !== contraseña2 || (contraseña1.trim() === "" || contraseña2.trim() === "")) {
        let campo = document.getElementById("pass1");
        campo.focus()
         document.getElementById("errorpass").textContent = "Las contraseñas deben ser identicas y no pueden quedar vacias";
        document.getElementById("errorpass").style.color = "red"
        event.preventDefault()
    }

    

    let formato = /^[A-Za-z0-9Ññ]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/; /* o si no .+@\w+\.com*/
    let email = document.getElementById("email").value;
    if (!formato.test(email)) {
        let campo = document.getElementById('email')
        document.getElementById("erroremail").textContent = "Introduce un email correcto";
        document.getElementById("erroremail").style.color = "red"
        campo.focus()
        event.preventDefault()

    }
    let formatodia = /^\d{1,2}$/;
    let dia = document.getElementById("dia").value;
    if (!formatodia.test(dia)) {
        document.getElementById("errordia").textContent = "Introduce un dia";
        document.getElementById("errordia").style.color = "red"
        event.preventDefault()
    } else {
        document.getElementById("errordia").textContent = "";
    }


    let formatomes = /\s/;
    let mes = document.getElementById("mes").value;

    if (mes=="") {
        document.getElementById("errormes").textContent="Introduce un mes";
        document.getElementById("errormes").style.color="red";
        event.preventDefault()

    }else{
        document.getElementById("errormes").textContent="";
    }

    let formatonombre=/\w{3,16}/;
    let formatoespacio=/\s/;
    let nombre=document.getElementById("nombre").value;
    if(nombre.trim()===""){
        document.getElementById("errort").textContent="No puede quedar vacio";
        document.getElementById("errort").style.color="red";
        event.preventDefault()

    }else if(formatoespacio.test(nombre)){
        document.getElementById("errort").textContent="No puede haber espacios";
        document.getElementById("errort").style.color="red";

    }else if(!formatonombre.test(nombre)){
        document.getElementById("errort").textContent="Introduce formato correcto";
        document.getElementById("errort").style.color="red";
    }
    else{
        document.getElementById("errort").textContent="";
    }


}

function confirma() {
    confirm("quieres resetear los campos?")
    if (confirm) {
        document.getElementById("formulario").reset();
    }
}

function teclado(event) {
    const input = event.target;   
    const value = input.value;    

   
    const errorElement = input.nextElementSibling; //para coger el siguiente elemento

  
    if (value.trim() === "") {
        errorElement.textContent = "No puede estar vacío";
    } else {
        
        errorElement.textContent = "";
    }
}

function teclado2(event) {
    const input = event.target;   
    const value = input.value;    

   
    const errorElement = input.nextElementSibling;


    // Comprobar si el campo está vacío
    if (value.trim().length<6) {
        errorElement.textContent = "tiene que tener 6 caracteres ";
    } else {
        // Si el campo tiene  6 caracteres que no salga error
        errorElement.textContent = "";
    }
}






