window.addEventListener("load", inicializar, false);

function inicializar() {

  checkACookieExists();

  document.getElementById("btn").addEventListener("click", setCookie);
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie() {
  const nombre = document.getElementById("nombre").value;
  const habitacion = document.getElementById("habitacion").value;
  const cafe = document.querySelector('input[name="cafe"]:checked');

  if (!nombre || !habitacion || !cafe) {
    alert("Por favor, rellena todos los campos y selecciona");
    return;
  }



  const nameCookie = document.cookie.split(";").some(item => item.trim().startsWith("name="));
  const habitacionCookie = document.cookie.split(";").some(item => item.trim().startsWith("hab="));
  const cafeCookie = document.cookie.split(";").some(item => item.trim().startsWith("cafe="));

  if (nameCookie && habitacionCookie && cafeCookie) {
    let contador = getCookie('contador');
    contador = parseInt(contador) + 1;
    document.cookie = `contador=${contador};SameSite=None; Secure`;


    if (contador >= 3) {
      alert(" Tu próximo café es gratis.");
    }
  } else {

    document.cookie = `name=${nombre}; Samesite=None; Secure`;
    document.cookie = `hab=${habitacion}; Samesite=None; Secure`;
    document.cookie = `cafe=${cafe.value}; Samesite=None; Secure`;
    document.cookie = `contador=1; Samesite=None; Secure`;

    alert(`${nombre} enviaremos tu café ${cafe.value} a la habitación ${habitacion}.`);
  }
}




function checkACookieExists() {
  const nameCookie = document.cookie.split(";").some(item => item.trim().startsWith("name="));
  const habitacionCookie = document.cookie.split(";").some(item => item.trim().startsWith("hab="));
  const cafeCookie = document.cookie.split(";").some(item => item.trim().startsWith("cafe="));
  if (nameCookie && habitacionCookie && cafeCookie) {
    const nombre = getCookie('name');
    const habitacion = getCookie('hab');
    const cafe = getCookie('cafe');
    const contador = getCookie('contador')
    if (nombre && habitacion && cafe) {
      alert(`Bienvenido de nuevo ${nombre} el último café que pediste fue ${cafe} en la habitación ${habitacion}`);

      if (contador >= 3) {
        alert("Tu próximo café es gratis");
      }

    }
  }

}