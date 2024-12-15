window.addEventListener("load", inicializar, false);

function inicializar() {

  checkStorageExists();

  document.getElementById("btn").addEventListener("click", setStorage);
}


function setStorage() {
  const nombre = document.getElementById("nombre").value;
  const habitacion = document.getElementById("habitacion").value;
  const cafe = document.querySelector('input[name="cafe"]:checked');

  if (!nombre || !habitacion || !cafe) {
    alert("Por favor, rellena todos los campos y selecciona");
    return;
  }

  const nameCookie = localStorage.getItem("name");
  const habitacionCookie = localStorage.getItem("hab");
  const cafeCookie = localStorage.getItem("cafe");

  if (nameCookie && habitacionCookie && cafeCookie) {
    let contador = localStorage.getItem("contador");
    contador = parseInt(contador) + 1;
    localStorage.setItem("contador", `${contador}`);


    if (contador >= 3) {
      alert(" Tu próximo café es gratis.");
      localStorage.setItem("contador", `1`)
    }
  } else {
    localStorage.setItem("name", `${nombre}`);
    localStorage.setItem("hab", `${habitacion}`);
    localStorage.setItem("cafe", `${cafe.value}`);
    localStorage.setItem("contador", `1`);

    alert(`${nombre} enviaremos tu café ${cafe.value} a la habitación ${habitacion}.`);
  }
}




function checkStorageExists() {
  // Recuperamos los datos de localStorage
  const nameStorage = localStorage.getItem("name");
  const habitacionStorage = localStorage.getItem("hab");
  const cafeStorage = localStorage.getItem("cafe");
  const contadorStorage = localStorage.getItem("contador");

  // Verificamos si todos los datos necesarios existen en localStorage
  if (nameStorage && habitacionStorage && cafeStorage) {
    // Si existen, mostramos un mensaje de bienvenida y detalles sobre el café
    alert(`Bienvenido de nuevo ${nameStorage}, el último café que pediste fue ${cafeStorage} en la habitación ${habitacionStorage}`);

    // Si el contador alcanza 3, mostramos el mensaje de café gratis
    if (contadorStorage && parseInt(contadorStorage) >= 3) {
      alert("Tu próximo café es gratis");
    }
  } else {
    // Si no existen los datos, indicamos que falta información
    alert("No se ha encontrado información previa. Por favor, realiza un pedido primero.");
  }
}