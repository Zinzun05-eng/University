// Funcionalidad para mostrar la sección seleccionada en el menú
document.querySelectorAll('a[data-pagina]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const pagina = link.dataset.pagina;

    // Ocultar todas las secciones
    document.querySelectorAll('.pagina').forEach(sec => {
      sec.classList.remove('activa');
    });

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(pagina);
    if (seccionActiva) {
      seccionActiva.classList.add('activa');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Datos con la info para cada carrera
const infoCarreras = {
  computacion: {
    nombre: "Ingeniería en Computación",
    descripcion: "Formación en desarrollo de software, sistemas y tecnología.",
    duracion: "9 semestres",
    costo: "$15,000 MXN por semestre",
    beca: "30% de beca para estudiantes destacados",
    planEstudios: [
      "Programación Básica",
      "Estructuras de Datos",
      "Bases de Datos",
      "Redes de Computadoras",
      "Desarrollo Web"
    ]
  },
  empresas: {
    nombre: "Administración de Empresas",
    descripcion: "Carrera enfocada en gestión, finanzas y recursos humanos.",
    duracion: "8 semestres",
    costo: "$12,000 MXN por semestre",
    beca: "25% de beca para estudiantes con buen promedio",
    planEstudios: [
      "Introducción a la Administración",
      "Contabilidad",
      "Marketing",
      "Finanzas",
      "Recursos Humanos"
    ]
  },
  contaduria: {
    nombre: "Contaduría Pública",
    descripcion: "Especialización en contabilidad, auditoría y fiscalización.",
    duracion: "8 semestres",
    costo: "$13,000 MXN por semestre",
    beca: "20% de beca para estudiantes con alto rendimiento",
    planEstudios: [
      "Contabilidad Básica",
      "Auditoría",
      "Fiscalización",
      "Costos y Presupuestos",
      "Impuestos"
    ]
  },
  medicina: {
    nombre: "Medicina",
    descripcion: "Formación médica integral para el cuidado de la salud.",
    duracion: "12 semestres",
    costo: "$20,000 MXN por semestre",
    beca: "15% de beca para estudiantes destacados",
    planEstudios: [
      "Anatomía",
      "Fisiología",
      "Farmacología",
      "Medicina Interna",
      "Cirugía"
    ]
  },
  psicologia: {
    nombre: "Psicología",
    descripcion: "Estudio del comportamiento humano y salud mental.",
    duracion: "8 semestres",
    costo: "$13,000 MXN por semestre",
    beca: "20% de beca para estudiantes con buen promedio",
    planEstudios: [
      "Psicología General",
      "Desarrollo Humano",
      "Psicopatología",
      "Terapias Psicológicas",
      "Psicología Social"
    ]
  },
  arquitectura: {
    nombre: "Arquitectura",
    descripcion: "Diseño de espacios habitables y estructuras arquitectónicas.",
    duracion: "10 semestres",
    costo: "$16,000 MXN por semestre",
    beca: "25% de beca en los primeros semestres",
    planEstudios: [
      "Diseño Arquitectónico",
      "Construcción",
      "Historia de la Arquitectura",
      "Urbanismo",
      "Sustentabilidad"
    ]
  },
  derecho: {
    nombre: "Derecho",
    descripcion: "Formación en leyes, justicia y procesos jurídicos.",
    duracion: "9 semestres",
    costo: "$14,000 MXN por semestre",
    beca: "20% de beca para alumnos de excelencia",
    planEstudios: [
      "Derecho Civil",
      "Derecho Penal",
      "Derecho Constitucional",
      "Litigación",
      "Derechos Humanos"
    ]
  },
  civil: {
    nombre: "Ingeniería Civil",
    descripcion: "Diseño y construcción de obras civiles e infraestructura.",
    duracion: "9 semestres",
    costo: "$15,000 MXN por semestre",
    beca: "30% de beca técnica",
    planEstudios: [
      "Mecánica de Materiales",
      "Estructuras",
      "Hidráulica",
      "Construcción",
      "Geotecnia"
    ]
  },
  sistemas: {
    nombre: "Ingeniería en Sistemas",
    descripcion: "Desarrollo y gestión de sistemas computacionales complejos.",
    duracion: "9 semestres",
    costo: "$15,500 MXN por semestre",
    beca: "35% para alumnos con promedio mayor a 9",
    planEstudios: [
      "Programación Orientada a Objetos",
      "Redes",
      "Arquitectura de Computadoras",
      "Desarrollo de Aplicaciones",
      "Seguridad Informática"
    ]
  },
  biotecnologia: {
    nombre: "Biotecnología",
    descripcion: "Aplicación de tecnología a procesos biológicos y químicos.",
    duracion: "10 semestres",
    costo: "$17,000 MXN por semestre",
    beca: "20% por méritos académicos",
    planEstudios: [
      "Biología Molecular",
      "Genética",
      "Microbiología",
      "Procesos Biotecnológicos",
      "Bioética"
    ]
  },
  gastronomia: {
    nombre: "Gastronomía",
    descripcion: "Arte culinario, cocina internacional y gestión de alimentos.",
    duracion: "6 semestres",
    costo: "$12,000 MXN por semestre",
    beca: "15% en los primeros dos semestres",
    planEstudios: [
      "Cocina Nacional",
      "Cocina Internacional",
      "Panadería y Repostería",
      "Enología",
      "Gestión de Cocina"
    ]
  },
  turismo: {
    nombre: "Turismo",
    descripcion: "Gestión de servicios turísticos, hotelería y viajes.",
    duracion: "8 semestres",
    costo: "$11,000 MXN por semestre",
    beca: "10% para alumnos nuevos",
    planEstudios: [
      "Geografía Turística",
      "Hotelería",
      "Administración de Agencias",
      "Turismo Sustentable",
      "Organización de Eventos"
    ]
  }
};

// Evento para mostrar información al seleccionar una carrera
document.getElementById('seleccion-carrera').addEventListener('change', e => {
  const carreraSeleccionada = e.target.value;
  const contenedorInfo = document.getElementById('info-carrera');

  if (!carreraSeleccionada || !infoCarreras[carreraSeleccionada]) {
    contenedorInfo.innerHTML = '';
    return;
  }

  const info = infoCarreras[carreraSeleccionada];

  contenedorInfo.innerHTML = `
    <h3>${info.nombre}</h3>
    <img src="${info.imagen}" alt="Imagen de ${info.nombre}" />
    <p><strong>Descripción:</strong> ${info.descripcion}</p>
    <p><strong>Duración:</strong> ${info.duracion}</p>
    <p><strong>Costo:</strong> ${info.costo}</p>
    <p><strong>Beca:</strong> ${info.beca}</p>
    <h4>Plan de Estudios:</h4>
    <ul>
      ${info.planEstudios.map(materia => `<li>${materia}</li>`).join('')}
    </ul>
  `;
});

// Mostrar la página activa al cargar según el hash
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    document.querySelectorAll('.pagina').forEach(sec => {
      sec.classList.remove('activa');
    });
    const seccionActiva = document.getElementById(hash);
    if (seccionActiva) {
      seccionActiva.classList.add('activa');
    }
  } else {
    document.getElementById('inicio').classList.add('activa');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const blogNoticias = document.getElementById('blog-noticias');

  // Array con noticias de ejemplo
  const noticias = [
    {
      titulo: "Inicio de clases semestre 2025",
      fecha: "18 de mayo de 2025",
      resumen: "El próximo lunes 20 de mayo comienzan las clases para el semestre 2025, asegúrate de revisar los horarios y salones asignados.",
      contenidoCompleto: "El próximo lunes 20 de mayo comienzan las clases para el semestre 2025. Los estudiantes deberán presentarse en sus aulas puntualmente y seguir las medidas sanitarias vigentes. Se recomienda revisar el calendario académico disponible en la página oficial para evitar inconvenientes."
    },
    {
      titulo: "Examen final de Matemáticas",
      fecha: "15 de mayo de 2025",
      resumen: "El examen final de Matemáticas se realizará el 30 de mayo en el auditorio principal.",
      contenidoCompleto: "El examen final de Matemáticas se realizará el 30 de mayo en el auditorio principal. Los alumnos deberán llevar calculadora científica y material necesario. El horario es de 9:00 a 12:00 hrs."
    },
    {
      titulo: "Nuevas actividades extracurriculares",
      fecha: "10 de mayo de 2025",
      resumen: "Se abren inscripciones para talleres de teatro, robótica y pintura, inicia el 1 de junio.",
      contenidoCompleto: "Se abren inscripciones para talleres de teatro, robótica y pintura, iniciando el 1 de junio. Estos talleres están abiertos para todos los estudiantes y son gratuitos. Consulta en coordinación estudiantil para más detalles."
    }
  ];

  // Función para crear cada noticia en HTML
  function crearNoticia(noticia) {
    const div = document.createElement('div');
    div.classList.add('noticia');

    div.innerHTML = `
      <h3>${noticia.titulo}</h3>
      <div class="fecha">${noticia.fecha}</div>
      <p class="resumen">${noticia.resumen}</p>
      <p class="contenido-completo" style="display:none;">${noticia.contenidoCompleto}</p>
      <button class="btn-leer-mas">Leer más</button>
    `;

    const btnLeerMas = div.querySelector('.btn-leer-mas');
    const contenidoCompleto = div.querySelector('.contenido-completo');
    const resumen = div.querySelector('.resumen');

    btnLeerMas.addEventListener('click', () => {
      if (contenidoCompleto.style.display === 'none') {
        contenidoCompleto.style.display = 'block';
        resumen.style.display = 'none';
        btnLeerMas.textContent = 'Leer menos';
      } else {
        contenidoCompleto.style.display = 'none';
        resumen.style.display = 'block';
        btnLeerMas.textContent = 'Leer más';
      }
    });

    return div;
  }

  // Agregar todas las noticias al contenedor
  noticias.forEach(noticia => {
    const noticiaElem = crearNoticia(noticia);
    blogNoticias.appendChild(noticiaElem);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Usuarios simulados: usuario:password
  const usuarios = {
    "admin": "admin123",
    "estudiante1": "est1234",
    "profesor": "prof2025"
  };

  const formLogin = document.getElementById('form-login');
  const inputUsuario = document.getElementById('usuario');
  const inputPassword = document.getElementById('password');
  const mensajeLogin = document.getElementById('mensaje-login');

  formLogin.addEventListener('submit', () => {
    const usuario = inputUsuario.value.trim();
    const password = inputPassword.value.trim();

    if (usuarios[usuario] && usuarios[usuario] === password) {
      mensajeLogin.style.color = 'green';
      mensajeLogin.textContent = `¡Bienvenido, ${usuario}! Has iniciado sesión correctamente.`;

      // Aquí puedes agregar código para mostrar contenido privado, redirigir o cambiar vista
      // Por ejemplo, cambiar a la página de inicio o mostrar un mensaje especial

    } else {
      mensajeLogin.style.color = 'red';
      mensajeLogin.textContent = 'Usuario o contraseña incorrectos.';
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav.nav ul li a');
  const secciones = document.querySelectorAll('section.pagina');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Obtener id de la sección del href (sin el #)
      const idSeccion = link.getAttribute('href').substring(1);

      // Quitar clase 'activa' de todas las secciones
      secciones.forEach(sec => sec.classList.remove('activa'));

      // Agregar clase 'activa' a la sección correspondiente
      const seccionMostrar = document.getElementById(idSeccion);
      if (seccionMostrar) {
        seccionMostrar.classList.add('activa');

        // Scroll suave a la sección visible
        seccionMostrar.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const genero = document.getElementById("genero").value;
  const mensaje = document.getElementById("mensaje").value.trim();
  const ciudad = document.getElementById("ciudad").value.trim();
  const estado = document.getElementById("estado").value.trim();
  const interes = document.getElementById("interes").value;
  const terminos = document.getElementById("terminos").checked;

  if (nombre.length < 3) {
    alert("Nombre muy corto.");
    return false;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Correo electrónico inválido.");
    return false;
  }

  if (!/^\d{10}$/.test(telefono)) {
    alert("Número de teléfono inválido. Debe tener 10 dígitos.");
    return false;
  }

  if (edad < 15 || edad > 100) {
    alert("Edad no válida.");
    return false;
  }

  if (genero === "") {
    alert("Selecciona un género.");
    return false;
  }

  if (mensaje.length < 10) {
    alert("El mensaje debe tener al menos 10 caracteres.");
    return false;
  }

  if (ciudad.length < 2 || estado.length < 2) {
    alert("Ciudad y estado requeridos.");
    return false;
  }

  if (interes === "") {
    alert("Selecciona un área de interés.");
    return false;
  }

  if (!terminos) {
    alert("Debes aceptar los términos y condiciones.");
    return false;
  }

  alert("Formulario enviado correctamente ✅");
  return true;
}

// Obtenemos todas las imágenes de la galería en un array
const images = Array.from(document.querySelectorAll('.imagen-galeria'));
let currentIndex = 0;

const modal = document.getElementById("modal-img");
const imgAmpliada = document.getElementById("img-ampliada");
const textoModal = document.getElementById("texto-modal");
const cerrar = document.querySelector(".cerrar");
const prevBtn = document.querySelector('.modal-nav.prev');
const nextBtn = document.querySelector('.modal-nav.next');

/* Función para actualizar la imagen y el texto del modal según el índice */
function updateModal(index) {
  // Reiniciamos la animación para la imagen
  imgAmpliada.classList.remove("fade-zoom", "fade-zoom-out");
  void imgAmpliada.offsetWidth; // reinicia la animación
  imgAmpliada.src = images[index].src;
  textoModal.textContent = images[index].alt;
  imgAmpliada.classList.add("fade-zoom");
}

/* Abre el modal al hacer clic en una imagen */
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modal.style.display = "block";
    updateModal(currentIndex);
  });
});

/* Función para cerrar el modal con animación de salida */
function closeModal() {
  imgAmpliada.classList.remove("fade-zoom");
  imgAmpliada.classList.add("fade-zoom-out");
  setTimeout(() => {
    modal.style.display = "none";
    imgAmpliada.classList.remove("fade-zoom-out");
  }, 600); // Duración de la animación (0.6s)
}

cerrar.onclick = closeModal;
window.onclick = (event) => {
  if (event.target === modal) { 
    closeModal(); 
  }
};

/* Navegación: Imagen anterior */
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModal(currentIndex);
});

/* Navegación: Imagen siguiente */
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateModal(currentIndex);
});
function ordenarTabla(columna) {
  const tabla = document.getElementById("tabla-costos");
  const tbody = tabla.tBodies[0];
  const filas = Array.from(tbody.rows);
  const ordenActual = tabla.getAttribute("data-orden") || "asc";

  let nuevoOrden = ordenActual === "asc" ? "desc" : "asc";
  tabla.setAttribute("data-orden", nuevoOrden);

  filas.sort((a, b) => {
    let aTexto = a.cells[columna].textContent.trim();
    let bTexto = b.cells[columna].textContent.trim();

    // Intentar comparar números si es posible
    let aNum = parseFloat(aTexto.replace(/[^0-9.-]+/g,""));
    let bNum = parseFloat(bTexto.replace(/[^0-9.-]+/g,""));

    if (!isNaN(aNum) && !isNaN(bNum)) {
      return nuevoOrden === "asc" ? aNum - bNum : bNum - aNum;
    } else {
      return nuevoOrden === "asc"
        ? aTexto.localeCompare(bTexto)
        : bTexto.localeCompare(aTexto);
    }
  });

  // Reinsertar filas ordenadas
  filas.forEach(fila => tbody.appendChild(fila));
}

