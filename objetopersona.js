class personas{ 
    constructor (nombre, apellido, edad, genero, profesion) {
        //atributos
        this.nombre = nombre; 
        this.apellido = apellido;
        this.edad = edad;

    }
  //metodos  
MostrarNombre(){
    return `${this.nombre}`;
}
MostrarApellido() { 
    return `${this.apellido}`;
}
}
//objetos
let persona1= new personas("juan", "perez",74);
console.log(persona1);
let persona2= new personas("Pablo", "Sub",45);
console.log(persona2);
let persona3= new personas("brandon","cucul",27);
console.log(persona3);