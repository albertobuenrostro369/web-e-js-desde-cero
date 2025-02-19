

// Array donde se guardarán los libros
let librosLeidos = [];

// Función para agregar libros al array
function agregarLibro() {
    let libro = prompt("📖 Escribe el título del libro que leíste (o escribe 'salir' para terminar):");

    while (libro.toLowerCase() !== "salir") {
        librosLeidos.push(libro);
        console.log(`✅ Se agregó: "${libro}"`);
        libro = prompt("📖 Escribe otro título (o 'salir' para terminar):");
    }
}

// Función para mostrar los libros en la página
function mostrarLibrosLeidos(array) {
    if (array.length === 0) {
        document.write("<h2>📚 Aún no has leído ningún libro.</h2>");
    } else {
        document.write("<h2>📚 Lista de libros leídos:</h2>");
        for (let i = 0; i < array.length; i++) {
            document.write(`<h3>${i + 1}.- ${array[i]}</h3>`);
        }
    }
}

// Llamar las funciones
agregarLibro();
mostrarLibrosLeidos(librosLeidos);