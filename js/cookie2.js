window.addEventListener("load", inicializar, false);

function inicializar() {

document.getElementById("direccion").addEventListener("focus",checkACookieExists)
document.getElementById("btn").addEventListener("click",setcookie)
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

function setcookie() {
  const direccion = document.getElementById("direccion").value;
  if (!direccion) {
    alert("Por favor, rellena todos los campos y selecciona");
    return;
  }
  document.cookie = `dir=${direccion}; Samesite=None; Secure`;

}

function checkACookieExists() {
  const nameCookie = document.cookie.split(";").some(item => item.trim().startsWith("dir="));
  if (nameCookie) {
    const nombre = getCookie('dir');
    
    if (nombre) {
      document.getElementById("direccion").value = `${nombre}`;

    }
  }

}