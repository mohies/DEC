class Alumno {
    constructor(nombre, apellido, dni, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nota = nota;
    }
}

class Aula {
    constructor() {
        this.alumnos = [];
    }
    agregarAlumno(alumno) {
        this.alumnos.push(alumno)
        console.log(this.alumnos)
    }

    buscarDni(dni) {
        let busca = this.alumnos.find((elemento) => elemento.dni === dni);
        if (busca) {
            console.log("Sí está");
        } else {
            console.log("No está");
        }
    }

    ordenarNota(dni) {
        let busca = this.alumnos.find((elemento) => elemento.dni === dni);
        if (busca) {
            busca.nota.sort((a, b) => b - a);
            console.log("Notas ordenadas de", busca.nota);
        } else {
            console.log("No se encontró al alumno con ese DNI");
        }

    }

    ordenarApellidos(){
        let buscaap=this.alumnos.sort((a, b) => a.apellido.localeCompare(b.apellido));
        console.log("Alumnos ordenados por apellido",buscaap)

        

    
    }

    imprimirAlAula(){
        this.alumnos.forEach((alumno)=>{
            console.log( "El nombre " + alumno.nombre + " el apellido " + alumno.apellido + " el dni "+ alumno.dni +" y sus notas "+ alumno.nota);
        })
    }
}

const aula1 = new Aula();

aula1.agregarAlumno(new Alumno('Juan', 'Pérez', '12345678A', [8, 6, 7, 8, 10, 2]));
aula1.agregarAlumno(new Alumno('María', 'Gómez', '23456789B', [9, 7, 8, 6]));
aula1.agregarAlumno(new Alumno('Luis', 'Martínez', '34567890C', [7, 5, 6, 8]));
aula1.agregarAlumno(new Alumno('Ana', 'Fernández', '45678901D', [10, 9, 10, 8]));
aula1.agregarAlumno(new Alumno('Pedro', 'Sánchez', '56789012E', [6, 5, 7, 8]));
aula1.agregarAlumno(new Alumno('Laura', 'Torres', '67890123F', [8, 9, 6, 7]));
aula1.agregarAlumno(new Alumno('Carlos', 'Ramírez', '78901234G', [7, 8, 6, 5]));

const aula2 = new Aula();
aula2.agregarAlumno(new Alumno('Sofía', 'Martín', '89012345H', [9, 8, 7, 9]));
aula2.agregarAlumno(new Alumno('David', 'Lopez', '90123456I', [6, 6, 7, 5]));
aula2.agregarAlumno(new Alumno('Isabel', 'Jiménez', '01234567J', [10, 10, 9, 9]));
aula2.agregarAlumno(new Alumno('Fernando', 'Cruz', '12345678K', [7, 5, 6, 9]));
aula2.agregarAlumno(new Alumno('Clara', 'Salas', '23456789L', [8, 9, 10, 10]));


aula1.buscarDni("12345678A")

aula1.ordenarNota("12345678A")

aula1.ordenarApellidos()

aula1.imprimirAlAula()