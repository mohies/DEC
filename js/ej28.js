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
        // Obtenemos la máxima nota
        const notaMaxima = Math.max(...this.nota.values());
    
        // Filtramos las asignaturas con la mejor nota
        const mejoresAsignaturas = [...this.nota].filter(([asignatura, nota]) => nota === notaMaxima);
    
        // Si hay más de una asignatura con la misma nota máxima
        if (mejoresAsignaturas.length > 1) {
            return mejoresAsignaturas.map(([asignatura,nota]) => asignatura);
        } else {
            // Si solo hay una asignatura con la mejor nota
            return `La mejor nota es en la asignatura "${mejoresAsignaturas[0][0]}" con un ${notaMaxima}`;
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
