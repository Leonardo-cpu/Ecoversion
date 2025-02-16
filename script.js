//Array de datos con la info de cada árbol.
const trees = [
  { 
    name: "Encino blanco", 
    scientificName: "Quercus arizonica",
    info: "",
    flor: "",
    distribución: "",
    usos: "",
    image: ""
  },
  { 
    name: "Pino de Durango", 
    scientificName: "Pinus durangensis",
    info: "",
    flor: "",
    distribución: "",
    usos: "",
    image: ""
  },
  { 
    name: "Encino gris", 
    scientificName: "Quercus grisea",
    info: "",
    flor: "",
    distribución: "",
    usos: "",
    image: ""
  },
  { 
    name: "Sabino", 
    scientificName: "Juniperus deppeana",
    info: "",
    flor: "",
    distribución: "",
    usos: "",
    image: ""
  },
  { 
    name: "Pino piñonero", 
    scientificName: "Pinus cembroides",
    info: "",
    flor: "",
    distribución: "",
    usos: "",
    image: ""
  },
  { 
    name: "Mezquite Dulce", 
    scientificName: "Neltuma glandulosa",
    info: `El Mezquite Dulce es un arbol nativo del norte de Mexico y Suroeste de E.U.A. que puede alcanzar los 8 metros de altura en condiciones moderadas.  
    Florece durante la primavera y espontaneamente en verano y otoño y produce vainas que son fuente de alimento para la fauna local.\n
    Se utiliza en reforestación de zonas deserificadas en Mexico Este árbol requiere muy poco riego una vez establecido, 
    ya que tolera sequías extremas, sin embargo, durante su fase de crecimiento, se recomienda un riego moderado para ayudarlo a desarrollar raíces profundas. 
    Prosperan en pleno sol y con suelos bien drenados. Tolera temperaturas de hasta -15 °C (0 °F).\n
    Su madera se utiliza para asar carne, ya que añade sabor, y las vainas se usan para crear una harina libre de gluten.
    `,
    flor: "Primavera y espontaneamene en verano y otoño.",
    distribución: "Sonora, Chihuahua, Durango, Coahuila, Nuevo León,Tamaulipas, San Luis Potosí.",
    usos: "Árbol de sombra, atractor de poliinizadores, se utiliza las vainas para hacer una harina libre de gluten, nitrogernar el suelo, madera usada para asar carne.",
    image: "./imagenes/honeymesquite2.jpg"
  },
  { 
    name: "Mezquite Tornillo", 
    scientificName: "Neltuma pubescens",
    info: `El Mezquite Tornillo recibe su nombre porque sus vainas de semillas pueden asemejarse a la forma de un tornillo.
          Florece en primavera, de abril a junio, y a veces en verano. Este árbol puede alcanzar hasta 7 metros de altura (23 pies) con una extensión similar. 
          Sus hojas son pequeñas.\n
          Generalmente se encuentran cerca de cuerpos de agua como cauces secos, arroyos y ríos. Tolera la sequía y temperaturas de hasta  -15° C (0°F). 
          Crece mejor en suelos bien drenados. Funciona como un árbol de sombra y puede proporcionar un ambiente fresco bajo esta.\n
          Atrae polinizadores cuando está en floración, y sus semillas pueden alimentar a algunas especies de animales.
          Antes de la expansión urbana, estos árboles prosperaban y formaban bosques a los lados de muchos ríos, como el río Colorado y el río Bravo (Río Grande).`,   
    flor: "Primavera y espontaneamene en verano.",
    distribución: "Sonora, Chihuahua, Baja California.",
    usos: "'Arbol de sombra, atractor de polinizadores.",
    image: "./imagenes/mez_tornillo.jpg"
  },
  { 
    name: "Mimbre del desierto", 
    scientificName: "Chilopsis linearis",
    info: `
    Este árbol no es necesariamente un mimbre, pero sus hojas le dan una apariencia similar. Este árbol crece hasta 6 metros de altura en promedio. El mimbre del desierto se encuentra comúnmente a lo largo de cauces secos o lugares con acceso a agua entre los 450 y los 1500 metros de elevación.\n
    Estos árboles prefieren pleno sol, aunque también pueden crecer en semisombra. Una vez establecidos, las lluvias pueden mantener al árbol vivo, pero riego extra puede ayudar a producir más  flores y hojas.\n
    Su aspecto más notable son las flores color rosa en forma de campana, que florecen desde abril hasta noviembre, lo que hace que este árbol sea una excelente opción para atraer polinizadores como colibríes, abejas y mariposas durante la mayor parte del año. También ofrece refugio para hacer nidos.
    `,
    flor: "Abril a Noviembre",
    distribución: "Chihuahua, Sonora, Baja California, Coahuila, Nuevo León y Durango.\n",
    usos: "Rompevientos, atractor de polinizadores.",
    image: "./imagenes/mimbre_desierto.jpg"
  },
  {
    name: "Acacia Uña de Gato",
    scientificName: "Acacia greggii",
    info: `
    En su madurez, la Acacia uña de gato puede alcanzar entre 3 y 6 metros de altura y hasta 4.5 metros de ancho. Su ubicación indica que puede soportar temperaturas frías de hasta -15°C y también tolerar las altas temperaturas del desierto. 
    Este árbol suele encontrarse a lo largo de cauces, laderas rocosas y planicies desérticas por debajo de los 1500 metros de altitud.\n
    La acacia garra de gato florece en primavera, mostrando flores difusas de color amarillo pálido. Durante el verano y el otoño aparecen vainas retorcidas de color café. 
    Parcialmente ocultas entre las hojas, se encuentran las espinas que se asemejan a garras de gato.\n
    Una vez establecida, puede mantenerse por sí sola, pero para un crecimiento máximo, es suficiente un riego profundo una vez al mes. Prefiere el sol pleno y suelos bien drenados.
    En primavera, atrae polinizadores, los pájaros construyen nidos en sus ramas y los codornices comen sus vainas de semillas.
    `,
    flor: "Primavera, flores de aproximadamente 7cm de largo, entre los colores amarillo y blanco",
    distribución: "Tamaulipas, Nuevo León, Coahuila, Chihuahua, Sonora y Baja California.",
    usos: "Atractor de polinizadores en primavera, refugio para aves, árbol de sombra",
    image: "./imagenes/AcaciaGreggii.jpg"
  },
  {
    name: "Huizache",
    scientificName: "Acacia farnesiana",
    info: `El Huizache es un arbol que habita las zonas desérticas y semidéserticas de México. Puede alcanzar alturas de entre 4 a 6 metros. 
    Florece durante la primavera, produciendo unas flores en forma de bolitas amarillas. Contienen espinas, por lo que hay que tener un poco de precaucion.\n
    Tolera la sequía y temperaturas de hasta  -9° C (15°F). Temperatuas más bajas pueden dañar el árbol. Tolerante a la sequia, crece más rápido con riego profundo adicional.\n
    Funciona como un árbol de sombra y puede proporcionar un ambiente fresco bajo esta. Atrae polinizadores cuando está en floración, y sus semillas pueden alimentar a alguans especies de animales.
    
    `,
    flor: "Primavera. Flores amarillas en forma de bolita",
    distribución: "Zonas desértica y semidesérticas de México",
    usos: "Se utiliza como árbol de sombra. Atractor de polinizadores durante la primavera.",
    image: "./imagenes/huizache2.jpg"
  },
  {
    name: "Vara prieta",
    scientificName: "Acacia constricta",
    info: "",
    flor: "",
    distribución: "",
    usos: "",
    image: ""
  },
  {
    name: "Palo blanco",
    scientificName: "Celtis reticulata",
    info: `Un árbol o arbusto grande que crece hasta aproximadamente 15 metros de altura (50 ft). Este árbol se puede encontrar en las orillas de arroyos, barrancos, cañones y colinas secas de piedra caliza.\n
    Es nativo de la zona oeste de los Estados Unidos y del norte de México.\n
    El palo blanco florece en primavera, y una vez que las flores desaparecen, aparece un fruto rojo. Este pequeño fruto rojo es como una esfera pequeña, que mide solo 6.35 mm de diámetro.\n
    El fruto, algo dulce, es consumido por la fauna silvestre y fue una fuente de alimento para los nativos americanos. 
    Este árbol generalmente se encuentra en áreas con un suministro constante de agua. Este árbol puede crecer a pleno sol, pero también prefiere la sombra parcial. 
    Aunque puede tolerar condiciones de sequía una vez establecido, necesita riego al menos una vez a la semana para crecer más grande y tener más hojas. 
    Las aves usan el árbol para construir nidos y proporciona una excelente sombra.`,
    flor: "Primavera",
    distribución: "Sonora, Chihuahua, Coahuila, Baja California Sur, Durango, San Luis Potosí",
    usos: "Árbol de sombra, refugio parar aves, árbol que da frutos.",
    image: "./imagenes/palo_blanco.jpg"
  },
  {
    name: "Jaboncillo",
    scientificName: "Sapindus saponaria",
    info: "",
    flor: "",
    distribución: "",
    usos: "",
    image: ""
  }
];

// Lógica compartida para la lista y los detalles de los árboles
// Esta función se ejecuta cuando el DOM está completamente cargado.
// Lógica compartida para la lista y los detalles de los árboles
// Esta función se ejecuta cuando el DOM está completamente cargado.
document.addEventListener("DOMContentLoaded", () => {
  const treeList = document.getElementById('tree-list'); // Contenedor de la lista de árboles.
  const treeDetail = document.getElementById('tree-detail'); // Contenedor de los detalles del árbol.

  // Si la página contiene el contenedor de lista, genera los botones de los árboles.
  if (treeList) {
    displayTrees(treeList); // Llama a la función para mostrar la lista de árboles.
  }

  // Si la página contiene el contenedor de detalles, muestra la información del árbol.
  if (treeDetail) {
    showTreeDetails(treeDetail); // Llama a la función para mostrar los detalles del árbol seleccionado.
  }
});

// Función para mostrar la lista de árboles como botones
function displayTrees(treeList) {
  treeList.innerHTML = ''; // Limpia el contenido previo del contenedor.

  // Ordena los árboles por nombre científico (alfabéticamente).
  trees.sort((a, b) => a.scientificName.localeCompare(b.scientificName));

  // Recorre la lista de árboles y crea un botón para cada uno.
  trees.forEach((tree) => {
    const button = document.createElement('button');
    
    // Set the button text to be the name and scientific name of the tree
    // Generar botones con el nombre y nombre científico de cada árbol
    button.textContent = tree.name + " (Nombre científico: " + tree.scientificName + ")";

    
    button.classList.add('tree-button'); // Añade una clase CSS para estilizar el botón.

    // Agrega un evento que redirige a la página de detalles al hacer clic.
    button.addEventListener('click', () => {
      // Redirige a `detalle_arbol.html` con el nombre del árbol como parámetro en la URL.
      window.location.href = `detalle_arbol.html?tree=${encodeURIComponent(tree.name)}`;
    });

    // Añade el botón al contenedor de la lista.
    treeList.appendChild(button);
  });
}

// Función para mostrar los detalles de un árbol en `detalle_arbol.html`
function showTreeDetails(treeDetail) {
  // Obtiene el parámetro 'tree' de la URL para identificar el árbol seleccionado.
  const urlParams = new URLSearchParams(window.location.search);
  const treeName = urlParams.get('tree'); // Nombre del árbol seleccionado.

  // Busca en la lista de árboles el objeto que coincide con el nombre seleccionado.
  const tree = trees.find(t => t.name === treeName);

  if (tree) {
    // Si el árbol es encontrado, actualiza el contenido del contenedor con su información.

    const formattedInfo = tree.info.replace(/\n/g, '<br>');
    
    treeDetail.innerHTML = `
      <h2>${tree.name}</h2> <!-- Nombre común del árbol -->
      <p><strong>Nombre científico:</strong> ${tree.scientificName}</p> <!-- Nombre científico -->
      <p class = "text-justify"><strong>Descripción: </strong>${formattedInfo}</p> <!-- Descripción -->
      <p class = "text-justify"><strong>Floración: </strong>${tree.flor}<?p> <!--Floracion-->
      <p class = "text-justify"><strong>Distribución: </strong>${tree.distribución}<?p> <!--Distribucion-->
      <img src="${tree.image}" alt="${tree.name}" style="max-width:85%; height:auto;" class="center"> <!-- Imagen -->
      
    `;
  } else {
    // Si no se encuentra el árbol, muestra un mensaje de error.
    treeDetail.innerHTML = '<h1>Árbol no encontrado</h1>';
  }
}
