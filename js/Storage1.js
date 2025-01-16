window.addEventListener("load", inicializar, false);

function inicializar() {

  mensaje()

  document.getElementById("btn").addEventListener("click", setStorage);
  document.getElementById("nombre").addEventListener("focus", checkStorageExists);
}


function setStorage() {
  const nombre = document.getElementById("nombre").value;
  const habitacion = document.getElementById("habitacion").value;
  const cafe = document.querySelector('input[name="cafe"]:checked');

  if (!nombre || !habitacion || !cafe) {
    alert("Por favor, rellena todos los campos y selecciona");
    return; // Esto detendrá la ejecución de la función
  }


  localStorage.setItem("name", `${nombre}`);
  localStorage.setItem("hab", `${habitacion}`);
  localStorage.setItem("cafe", `${cafe.value}`);

  const nameCookie = localStorage.getItem("name");
  const habitacionCookie = localStorage.getItem("hab");


  if (nameCookie==nombre && habitacionCookie==habitacion) {
    let contador = localStorage.getItem("contador");
    contador = parseInt(contador) + 1;
    localStorage.setItem("contador", `${contador}`);
    localStorage.setItem("cafe", `${cafe.value}`);

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
    
    document.getElementById("nombre").value = `${nameStorage}`;
    document.getElementById("habitacion").value = `${habitacionStorage}`;
    const cafeOption = document.querySelector(`input[name="cafe"][value="${cafeStorage}"]`);
    if (cafeOption) {
      cafeOption.checked =true ;
    }
    

    // Si el contador alcanza 3, mostramos el mensaje de café gratis
    if (contadorStorage && parseInt(contadorStorage) >= 3) {
      alert("Tu próximo café es gratis");
    }
  } else {
    // Si no existen los datos, indicamos que falta información
    alert("No se ha encontrado información previa. Por favor, realiza un pedido primero.");
  }
}


function mensaje(){
  const nameStorage = localStorage.getItem("name");
  const habitacionStorage = localStorage.getItem("hab");
  const cafeStorage = localStorage.getItem("cafe");
  alert(`Bienvenido de nuevo ${nameStorage}, el último café que pediste fue ${cafeStorage} en la habitación ${habitacionStorage}`);
}

