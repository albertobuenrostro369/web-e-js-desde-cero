// Definición de la biblioteca con los libros (cada libro es un objeto)
const biblioteca = {
    libros: [
      {
        titulo: "El hombre en busca de sentido",
        autor: "Viktor Frankl",
        anio: 1946,
        estado: "disponible",
        capitulos: ["Introducción", "Experiencias en el campo", "El sentido de la vida"],
        describirLibro: function() {
          return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
        },
        agregarCapitulo: function(capitulo) {
          this.capitulos.push(capitulo);
        },
        eliminarCapitulo: function() {
          return this.capitulos.pop();
        }
      },
      {
        titulo: "Los 4 Acuerdos",
        autor: "Don Miguel Ruiz",
        anio: 1997,
        estado: "prestado",
        capitulos: ["Primer Acuerdo", "Segundo Acuerdo", "Tercer Acuerdo"],
        describirLibro: function() {
          return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
        },
        agregarCapitulo: function(capitulo) {
          this.capitulos.push(capitulo);
        },
        eliminarCapitulo: function() {
          return this.capitulos.pop();
        }
      },
      {
        titulo: "El Club de las 5 AM",
        autor: "Robin Sharma",
        anio: 2018,
        estado: "disponible",
        capitulos: ["El despertar", "Rutina matutina"],
        describirLibro: function() {
          return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
        },
        agregarCapitulo: function(capitulo) {
          this.capitulos.push(capitulo);
        },
        eliminarCapitulo: function() {
          return this.capitulos.pop();
        }
      },
      {
        titulo: "Deja de ser tú",
        autor: "Joe Dispenza",
        anio: 2012,
        estado: "prestado",
        capitulos: ["Transformación mental", "Reprograma tu ser"],
        describirLibro: function() {
          return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
        },
        agregarCapitulo: function(capitulo) {
          this.capitulos.push(capitulo);
        },
        eliminarCapitulo: function() {
          return this.capitulos.pop();
        }
      }
    ]
  };
  
  // Capturar elementos del DOM
  const bookList = document.getElementById("bookList");
  const bookInfo = document.getElementById("bookInfo");
  const chapterSection = document.getElementById("chapterSection");
  const chapterList = document.getElementById("chapterList");
  const newChapterInput = document.getElementById("newChapter");
  const addChapterBtn = document.getElementById("addChapterBtn");
  const removeChapterBtn = document.getElementById("removeChapterBtn");
  
  let libroSeleccionado = null;
  
  // Capturar el elemento tooltip
  const tooltip = document.getElementById("tooltip");
  
  // Funciones para manejar el tooltip con JS
  function handleMouseOver(e) {
    tooltip.style.display = "block";
    tooltip.innerText = "Ver información";
    e.target.style.color = "#f7c900"; // Cambia el color al pasar el cursor
  }
  
  function handleMouseOut(e) {
    tooltip.style.display = "none";
    e.target.style.color = ""; // Restaura el color original
  }
  
  function handleMouseMove(e) {
    tooltip.style.top = (e.pageY + 10) + "px";
    tooltip.style.left = (e.pageX + 10) + "px";
  }
  
  // Función para mostrar la lista de libros
  function mostrarLibros() {
    bookList.innerHTML = "";
    biblioteca.libros.forEach((libro, index) => {
      const li = document.createElement("li");
      li.innerText = libro.titulo;
      
      // Eventos para el tooltip
      li.addEventListener("mouseover", handleMouseOver);
      li.addEventListener("mouseout", handleMouseOut);
      li.addEventListener("mousemove", handleMouseMove);
  
      // Al hacer clic, se muestra la información del libro y se actualiza la sección de capítulos
      li.addEventListener("click", () => {
        libroSeleccionado = libro;
        bookInfo.innerText = libro.describirLibro();
        mostrarCapitulos(libro);
        chapterSection.style.display = "block";
      });
      bookList.appendChild(li);
    });
  }
  
  // Función para mostrar los capítulos del libro seleccionado
  function mostrarCapitulos(libro) {
    chapterList.innerHTML = "";
    libro.capitulos.forEach((capitulo) => {
      const li = document.createElement("li");
      li.innerText = capitulo;
      chapterList.appendChild(li);
    });
  }
  
  // Evento para agregar un capítulo
  addChapterBtn.addEventListener("click", () => {
    const nuevoCap = newChapterInput.value.trim();
    if (libroSeleccionado && nuevoCap !== "") {
      libroSeleccionado.agregarCapitulo(nuevoCap);
      newChapterInput.value = "";
      mostrarCapitulos(libroSeleccionado);
    }
  });
  
  // Evento para eliminar el último capítulo
  removeChapterBtn.addEventListener("click", () => {
    if (libroSeleccionado) {
      libroSeleccionado.eliminarCapitulo();
      mostrarCapitulos(libroSeleccionado);
    }
  });
  
  // Inicializar la lista de libros
  mostrarLibros();
  