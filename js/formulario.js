window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("formulario").addEventListener("submit",mostrardatos) /* no hay que poner parentesis ya que no queiro que se ejcute en el momento*/
}

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

    document.body.innerHTML += contenido;


    let ventana= window.open('', 'Ventana nueva',"");
    ventana.document.write(contenido)

}