let people = [
];

const nome = document.querySelector("#nome");
const anno = document.querySelector("#anno");
const occhi = document.querySelector("#occhi");
const altezza = document.querySelector("#altezza");
const genere = document.querySelector("#genere");

const inserisci = document.querySelector("#inserisci");
const cerca = document.querySelector("#cerca");
const filtra = document.querySelector("#filtra");
const ul = document.querySelector("ul");

const render = (list) => {
    const renderList = list.map((element) =>
        `<li>
        <p>${element.name}</p>
        <p>Birth date: ${element.birth_year}</p>
        <p>Eyes color: ${element.eye_color}</p>
        <p>Height: ${element.height}</p>
        <p>Gender: ${element.gender}</p>
    </li>`
    )
    ul.innerHTML = renderList.join("");
};

const addItem = () => {
    if (nome.value !== "" || anno.value !== "" || occhi.value !== ""  || altezza.value !== "") {
        people.push({
            name: nome.value,
            birth_year: anno.value,
            eye_color: occhi.value,
            height: altezza.value,
            gender: genere.value,
        });
        render(people);

        nome.value = "";
        anno.value = "";
        occhi.value = "";
        genere.value = "";
        altezza.value = "";
    } else { alert("I campi Personaggio e Universo non possono essere vuoti") }
};

const searchItem = () => {
    const selected = people.filter((element) =>
        element.name.toLowerCase().includes(cerca.value.toLowerCase()) ||
        element.birth_year.toLowerCase().includes(cerca.value.toLowerCase()) ||
        element.eye_color.toLowerCase().includes(cerca.value.toLowerCase()) ||
        element.height.toLowerCase().includes(cerca.value.toLowerCase()) ||
        element.gender.toLowerCase().includes(cerca.value.toLowerCase())
    );


    console.log(selected);
    render(selected);

    cerca.value = "";
};


fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        for (item of data.results) {
            people.push(item);
        }
        render(people);
        console.log(people);

    });


inserisci.addEventListener("click", addItem);

filtra.addEventListener("click", searchItem);