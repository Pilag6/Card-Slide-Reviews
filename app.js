// local reviews data
const reviews = [
    {
        id: 1,
        name: "franco armani",
        job: "goalkeeper",
        img: "https://www.cronica.com.ar/export/sites/cronica/img/2020/10/29/armani_crop1603998398964.jpg_673822677.jpg",
        text: "Es un arquero argentino. Su equipo actual es River Plate de la Primera División de Argentina. Es internacional con la selección Argentina desde 2018. Es el arquero argentino más ganador de la historia, con 22 títulos.​",
    },
    {
        id: 2,
        name: "javier pinola",
        job: "defender",
        img: "https://i.goalzz.com/?i=ghanem%2Fpinola.jpg",
        text: "Actualmente es asistente técnico de Martin Demichelis en el Club Atlético River Plate. Su último club fue River Plate de la Primera División de Argentina, donde se desempeñaba como defensor.",
    },
    {
        id: 3,
        name: "gonzalo martinez",
        job: "midfielder",
        img: "https://futebolatino.lance.com.br/wp-content/uploads/2018/07/Pity-Mart%C3%ADnez.jpg",
        text: "Más conocido como el Pity Martínez que loco que está. Es un futbolista argentino que juega de extremo en el Al-Nassr de Liga Profesional Saudí. Ganador de la Final Eterna con River Plate",
    },
    {
        id: 4,
        name: "lucas pratto",
        job: "forward",
        img: "https://media.tycsports.com/files/2021/07/17/307920/pratto-river_1440x810_wmk.jpg?v=1",
        text: "Futbolista argentino. Juega como delantero y su actual equipo es Vélez Sarsfield de la Liga Profesional. Será recordado por su famoso gol sacando del medio en la Final más importante de la historia mundial",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name; //innerHTML is also valid
    job.textContent = item.job; //innerHTML is also valid
    info.textContent = item.text; //innerHTML is also valid
}

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});
