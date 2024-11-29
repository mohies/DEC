window.addEventListener("load", inicializar, false);

function inicializar() {


 document.getElementById("button").addEventListener("click",setCookie)


function setCookie(){
  const nombre = document.getElementById("nombre").value;
  const habitacion = document.getElementById("habitacion").value;
  const cafe = document.querySelector('input[name="cafe"]:checked');
  document.cookie = `name=${nombre}; Samesite=None; Secure`;
  document.cookie = `hab=${habitacion}; Samesite=None; Secure`;
  document.cookie = `cafe=${cafe.value}; Samesite=None Secure`;

}


  function checkACookieExists() {
    const nameCookie = document.cookie.split(";").some(item => item.trim().startsWith("name="));
    const habitacionCookie = document.cookie.split(";").some(item => item.trim().startsWith("habitacion="));
    const cafeCookie = document.cookie.split(";").some(item => item.trim().startsWith("cafe="));
    if (nameCookie && habitacionCookie && cafeCookie) {
      const nombre = getCookie('name');
      const habitacion = getCookie('habitacion');
      const cafe = getCookie('cafe');

    }
  }

}