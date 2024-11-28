window.addEventListener("load", inicializar, false);

function inicializar() {
  // Verificar cookies al cargar la página
  checkCookie();
  
  // Asociar el evento al formulario
  document.getElementById("formPedido").addEventListener("submit", enviarPedido);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));  // Establecer fecha de expiración
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";  // Configuramos la cookie
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();  // Usamos .trim() para eliminar posibles espacios al principio
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);  // Devolvemos el valor de la cookie
    }
  }
  return "";  // Si no se encuentra la cookie, devolvemos una cadena vacía
}

function checkCookie() {
    let nombre = getCookie("nombre");
    let habitacion = getCookie("habitacion");
    let cafes = getCookie("cafes");
    let pedidos = getCookie("pedidos");

    if (nombre && habitacion && cafes) {
        // Si ya tenemos cookies, mostrar el café favorito
        alert(`Hola ${nombre}, tu café favorito es: ${cafes}. Enviamos tu café a la habitación ${habitacion}.`);
        
        // Si el número de pedidos es 3 o más, mostrar la tarifa especial
        if (pedidos && parseInt(pedidos) >= 3) {
            alert("¡Felicidades! Tienes una tarifa especial, tu próximo café será gratis.");
        }
    }
}

function enviarPedido(event) {
    event.preventDefault();  // Prevenir que el formulario recargue la página

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const habitacion = document.getElementById("habitacion").value;
    const cafesSeleccionados = document.querySelectorAll("input[name='cafe']:checked");
    
    if (!nombre || !habitacion || cafesSeleccionados.length === 0) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear una lista de cafés seleccionados
    const cafes = Array.from(cafesSeleccionados).map(cafe => cafe.value).join(", ");

    // Obtener el número de pedidos anteriores, si existe
    let pedidos = getCookie("pedidos");
    pedidos = pedidos ? parseInt(pedidos) : 0;
    pedidos++;

    // Guardar la información en las cookies
    setCookie("nombre", nombre, 30);  // La cookie se mantiene por 30 días
    setCookie("habitacion", habitacion, 30);
    setCookie("cafes", cafes, 30);
    setCookie("pedidos", pedidos, 30);

    // Informar al usuario del pedido realizado
    alert(`Pedido realizado con éxito, ${nombre}! Tu café será enviado a la habitación ${habitacion}.`);
    
    // Si el usuario ha pedido 3 cafés o más, mostrar la tarifa especial
    if (pedidos >= 3) {
        alert("¡Felicidades! Tienes una tarifa especial, tu próximo café será gratis.");
    }
}
