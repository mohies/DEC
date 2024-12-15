window.addEventListener("load", inicializar, false);

function inicializar() {


  document.getElementById("nombre").addEventListener("focus", checkACookieExists);
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

  document.cookie = `name=${nombre}; Samesite=None; Secure`;
  document.cookie = `hab=${habitacion}; Samesite=None; Secure`;
  document.cookie = `cafe=${cafe.value}; Samesite=None; Secure`;
  
  let contador = getCookie('contador');
  contador = contador ? parseInt(contador) +1   : 1;
  document.cookie = `contador=${contador}; Samesite=None; Secure`;
  
  if (contador >= 3) {
    alert("Tu próximo café es gratis.");
  }
  
  alert(`${nombre} enviaremos tu café ${cafe.value} a la habitación ${habitacion}.`);
  
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
      document.getElementById("nombre").value = `${nombre}`;
      document.getElementById("habitacion").value = `${habitacion}`;
      const cafeOption = document.querySelector(`input[name="cafe"][value="${cafe}"]`);
      if (cafeOption) {
        cafeOption.checked = true;
      }


      if (contador >= 3) {
        alert("Tu próximo café es gratis");
        document.cookie = `contador=; Samesite=None; Secure`;

      }

    }
  }

}