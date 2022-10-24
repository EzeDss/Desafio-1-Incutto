class usuario {
    constructor(nombre, apellido, libros, mascota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascota = mascota;
    }
    getFullnombre (){

        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }
    addmascota (nombre_mascota){
        this.mascota.push (nombre_mascota);
    }
    CountMascotas (){
        console.log(`La cantidad de mascotas que tiene es: ${this.mascota.length}`)
    }
    addLibro(){
        this.libros.push({
            Nombre: Nombrelibro,
            Autor:  Autor,
        });
    }
    getNombreslibros(){
        console.log(this.libros.map((libros) => libros.Nombre))
    }
}
const Usuario1 = new usuario('Ezequiel', 'Incutto',[
    {
        Nombre: 'Harry Potter',
        Autor: 'J. K. Rowling',
    },
    {
        Nombre: 'El principito',
        Autor: 'Antoine de Saint-Exupéry',
    }],
    ["Nicky", "Nieves"]);

Usuario1.addmascota("Morita");
Usuario1.addLibro(Nombrelibro = "El Señor de los Anillos", Autor = "J. R. R. Tolkien")
Usuario1.getFullnombre()
Usuario1.CountMascotas()
Usuario1.getNombreslibros()