const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
];

const nome = document.querySelector("#nome");
const universo = document.querySelector("#universo");
const inserisci = document.querySelector("#inserisci");
const cerca = document.querySelector("#cerca");
const filtra = document.querySelector("#filtra");
const ul = document.querySelector("ul");

const render = (list) => {
    const renderList = list.map((element) =>
        `<li>
        <p>${element.character}</p>
        <p>${element.universe}</p>
    </li>`
    )
    ul.innerHTML = renderList.join("");
};

const dashRemove = (list) => {
    let position = 0;
    let character = "";
    let universe = "";
    let objList = [];

    for (let i = 0; i < list.length; i++) {
        position = list[i].search("-");
        console.log(position);

        character = list[i].slice(0, position - 1);
        console.log("character: ", character);

        universe = list[i].slice(position + 2);
        console.log("universe: ", universe);

        objList.push({
            character: character,
            universe: universe
        });
    }
    return objList;
}

const addItem = () => {
    if(nome.value !== "" || universo.value !== "" ){
    objList.push({
        character: nome.value,
        universe: universo.value
    });
    render(objList);

    nome.value = "";
    universo.value = "";
}else{alert("I campi Personaggio e Universo non possono essere vuoti")}
};

const searchItem = () => {
    const selected = objList.filter((element) =>
        element.character.toLowerCase().includes(cerca.value.toLowerCase()) ||
        element.universe.toLowerCase().includes(cerca.value.toLowerCase())
    );


    console.log(selected);
    render(selected);

    cerca.value = "";
}

let objList = dashRemove(people);

console.log("objList: ", objList);

inserisci.addEventListener("click", addItem);

filtra.addEventListener("click", searchItem);


render(objList);