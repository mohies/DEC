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
        } else if(encuentra) {
            console.log(" no puede ser anterior a la fecha actual. Un cliente no podrá tener más de una cita el mismo día")
        }else{
            this.citaspendientes.push(cita)
        }

    }
}


var c1 = new Cita("SALA X", new Date(2024, 11, 30));

var cl1 = new Cliente("Pepe", "Rodriguez", "4363872832")

cl1.agregarcita(c1);

console.log(cl1)

cl1.agregarcita(c1);