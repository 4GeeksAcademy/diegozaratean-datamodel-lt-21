console.log('programación orientada a objetos')
// Programación orientada a objetos es un modelo de programación

// 1. Clases
// 2. Objetos

// 3. Herencia
// 4. Encapsulamiento
// 5. Abstracción
// 6. Poliformismo


// Objeto Carro
// Propiedades: marca, color , cilindraje
// Metodos: Arrancar, Acelerar , frenar

// Objeto David
// Hombre , Colombiano, Nutricionista
// Comer , estudiar, trabajar

// Humano, Hombre, Estudiante, Nutricionistra

// Clase Humano
// propiedades: Genero, Nacionalidad, Profesi´øn
// Metodos:  comer, estudiar, trabajar

// Objeto David
// Hombre , Colombiano, Nutricionista
// Comer , estudiar, trabajar

// Objeto Adjani
// Mujer , Colombiana, Maestra
// Comer , estudiar, trabajar

// Objeto Francesca
// Mujer , Grintica, Mama
// Comer , estudiar, trabajar

class Humano {
    constructor(genero, nacionalidad, profesiøn){
        this.genero = genero
        this.nacionalidad = nacionalidad
        this.profesiøn = profesiøn
    }

    // Metodos
    comer(){
        console.log('Estoy comiendo')
    }
    estudiar(){
        console.log('Estoy estudiando')
    }
    trabajar(){
        console.log('Estoy trabajando')
    }  
    ejercitarse(){
        console.log('Estoy trabajando')
    }
    salir(){
        console.log('Estoy trabajando')        
    }
}

const david = new Humano('Hombre', 'Colombiano', 'Nutricionista')
const adjani = new Humano('Mujer', 'Colombiana', 'Maestra')
const francesca = new Humano('Mujer', 'Grintica', 'Mama')

// Objeto David
// Hombre , Colombiano, Nutricionista
// Comer , estudiar, trabajar

// Objeto Adjani
// Mujer , Colombiana, Maestra
// Comer , estudiar, trabajar

// Objeto Francesca
// Mujer , Grintica, Mama
// Comer , estudiar, trabajar

class NombreClase { //  Declara la clas
    constructor(atributos){
        // Inicialización atributos
    }
    // Metodos
}



// Objeto Carro
// Propiedades: marca, color , cilindraje
// Metodos: Arrancar, Acelerar , frenar
class Carro { //  Declara la clas
    constructor(marca, color , cilindraje){
        // Inicialización atributos
        this.marca = marca
        this.color = color
        this.cilindraje = cilindraje
    }
    // Metodos
    arrancar(){
        console.log('Estoy arrancando')
    }  
    acelerar(){
        console.log('Estoy acelerando')
    }  
    frenar(){
        console.log('Estoy frenando')
    }  
}
const dmax = new Carro('Chvrolet', 'plateado', 2400)
const modelx = new Carro('Tesla', 'rojo', 3600)


class Videojuego { //  Declara la clas
    constructor(id,nombre,	genero,	anio_lanzmaineto,id_estudio){
        // Inicialización atributos
        this.id = id
        this.nombre = nombre
        this.genero = genero
        this.anio_lanzmaineto = anio_lanzmaineto
        this.id_estudio = id_estudio
    }
    // Metodos
    
}
console.log('donde estou')

class User(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    username: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String)
 
console.log('donde estou')

const fifa = new Videojuego(1,	"fifa",	"deportes",	2023	,1)
const warcraft = new Videojuego(2,	"warcraft",	"estrategia",	2023	,2)
		


class Videojuego(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    nombre: Mapped[str] = mapped_column(String, nullable=False)
    genero: Mapped[str] = mapped_column(String, nullable=False)
    anio_lanzmaineto: Mapped[str] = mapped_column(String, nullable=False)
    id_estudio: Mapped[str] = mapped_column(Integer)
