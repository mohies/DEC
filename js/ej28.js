//Ejercicio 28

class Alumno {
    constructor(nombre, dni, curso, nota) {
        this.nombre = nombre;
        this.dni = dni;
        this.curso = curso;
        this.nota = new Map();
    }
    muestra() {
        let resultado = this.nombre + " tiene dni " + this.dni + " esta en el curso de " + this.curso;
        for (let [clave, valor] of this.nota) {
            resultado += " tiene en la asignatura de  " + clave + "  una nota de un " + valor;
        }
        return resultado;
    }
    agregarNota(clave, valor) {
        this.nota.set(clave, valor);
    }

    lamedia() {
        var media = 0;
        for (let [clave, valor] of this.nota) {
            media += valor;
        }
        var longitud = (this.nota.size)
        var resultado = media / longitud;
        console.log("La media es " + resultado)
    }

    mejornota() {
        var notaMaxima = 0;
        var mejorAsignatura = "";
        let notas=[];
        let mejorAsignaturas=[];
        for (let [clave, valor] of this.nota) {
            if (valor >= notaMaxima) {
                notaMaxima = valor;
                mejorAsignatura = clave;
                notas.push(notaMaxima)
                mejorAsignaturas.push(mejorAsignatura)

            }
        }
        let max=0;
        if(notas.length>1){
            for(let i=0;i<notas.length;i++){
                if(notas[i]>max){
                    max=notas[i];
                }
            }
            let no=notas.filter((elemento)=>elemento==max)
            return no;
        }else{
            return "La mejor nota es de la asignatura " + mejorAsignatura + " con un " + notaMaxima;
        }
        
    }

}

const al1 = new Alumno("Pepe", "23424234F", "2ºDAW")
al1.agregarNota("DAW", 8);
al1.agregarNota("DIW", 10);
al1.agregarNota("DWES", 7);
al1.agregarNota("DWEC", 6);
al1.agregarNota("EIE", 10);


console.log(al1.muestra());
console.log(al1.lamedia());
console.log(al1.mejornota());