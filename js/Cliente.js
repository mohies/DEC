class Cliente {
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.citaspendientes = [];
        this.historialcitas = [];
    }

    agregarcita(cita) {
        var fechaactual = new Date();
        var encuentra = this.citaspendientes.some((elemento) => elemento.fechahora.getTime() === cita.fechahora.getTime());
        if (cita.fechahora.getTime() < fechaactual.getTime() || cita.fechahora.getTime() == fechaactual.getTime()) {
            console.log(" no puede ser anterior a la fecha actual. Un cliente no podrá tener más de una cita el mismo día")
        } else if (encuentra) {
            console.log(" no puede ser anterior a la fecha actual. Un cliente no podrá tener más de una cita el mismo día")
        } else {
            this.citaspendientes.push(cita)
        }

    }


    recordatorio() {
            var fechaactual=new Date()
            this.citaspendientes.forEach((elemento)=>{
                if(fechaactual.getDay()+1 ==elemento.fechahora.getDay()){
                    let ventana;
                    ventana=window.open('','','width=800,height=400');
                    ventana.document.write("<p>tienes esta cita programada para mañana en "+ elemento.sala + " a la hora de "+elemento.fechahora.toDateString()+"</p>")
                }
                    
    
    
            })

       



    }
}


var c1 = new Cita("SALA X", new Date(2024, 10, 22));
var c2 = new Cita("CINE YELMO", new Date(2024, 10, 30));
var cl1 = new Cliente("Pepe", "Rodriguez", "4363872832")

cl1.agregarcita(c1);

console.log(cl1)

cl1.agregarcita(c1);
cl1.agregarcita(c2);

let contadorVentanas = 0;

let intervalo = setInterval(() => {
    if (contadorVentanas < 3) {
        // Si hay citas pendientes y no hemos alcanzado el límite de ventanas
        cl1.recordatorio();
        contadorVentanas++;
    } else {
        clearInterval(intervalo); // Detener el intervalo una vez que se han mostrado 3 ventanas
    }
}, 60000); 
