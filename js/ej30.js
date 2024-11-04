class Piloto {

    constructor(nombre, escuderia) {
        this.nombre = nombre;
        this.escuderia = escuderia;

    }


}

class SesionCalificacion {
    constructor(Piloto, tiempo) {
        this.Piloto = Piloto;
        this.tiempo = tiempo;
    }
}

let sesionesCalificacion = []
sesionesCalificacion.push(new SesionCalificacion(new Piloto("Lewis Hamilton", "Mercedes"), 960000));
sesionesCalificacion.push(new SesionCalificacion(new Piloto("Max Verstappen", "Red Bull"), 950000));
sesionesCalificacion.push(new SesionCalificacion(new Piloto("Charles Leclerc", "Ferrari"), 940000));
sesionesCalificacion.push(new SesionCalificacion(new Piloto("Sergio Pérez", "Red Bull"), 955000));
sesionesCalificacion.push(new SesionCalificacion(new Piloto("Lando Norris", "McLaren"), 970000));


//A ordenado por tiempos

let ordenadocalificacion = sesionesCalificacion.sort((a, b) => a.tiempo - b.tiempo);
console.log(ordenadocalificacion)

//B
let ordenanPiloto = sesionesCalificacion.sort((a, b) => a.Piloto.nombre.localeCompare(b.Piloto.nombre))

console.log(ordenanPiloto)


//añadesesion
function añadeSesion(nuevoPiloto, nuevoTiempo) {
    let existe = sesionesCalificacion.filter((elemento) => elemento.Piloto.nombre === nuevoPiloto.nombre);

    if (existe.length > 0) {
        sesionesCalificacion.map((elemento) => {
            if (elemento.Piloto.nombre === nuevoPiloto.nombre) {
                if (nuevoTiempo < elemento.tiempo) {
                    elemento.tiempo = nuevoTiempo;
                    console.log("Tiempo actualizado para " + nuevoPiloto.nombre);
                } else {
                    console.log("No se actualiza el tiempo actual es mejor o igual que el nuevo ");
                }
            }
        });
    } else {

        sesionesCalificacion.push(new SesionCalificacion(nuevoPiloto, nuevoTiempo));
        console.log("Nueva sesión añadida para " + nuevoPiloto.nombre );
    }

    console.log(sesionesCalificacion)
}


añadeSesion(new Piloto("Fernando Alonso", "Aston Martin"), 990000);
añadeSesion(new Piloto("Lewis Hamilton", "Mercedes"), 900000);

function eliminarSesion(eliminarPiloto){
    let existe = sesionesCalificacion.filter((elemento) => elemento.Piloto.nombre === eliminarPiloto.nombre);
    let indice = sesionesCalificacion.findIndex((elemento) => elemento.Piloto.nombre === eliminarPiloto.nombre);
    if(existe.length>0){
        sesionesCalificacion.splice(indice,1)
        console.log(sesionesCalificacion)
    }else{
        console.log("Ese piloto no existe")
    }
    
}

eliminarSesion(new Piloto("Lewis Hamilton", "Aston Martin"))

