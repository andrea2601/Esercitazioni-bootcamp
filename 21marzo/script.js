let addressBook = [
    {
        name: "Massimo",
        surname: "Ranieri",
        phoneNumber: 3896455062
    },
    {
        name: "Marco",
        surname: "Conigliaro",
        phoneNumber: 3896448062
    },
    {
        name: "Giuseppe",
        surname: "Lo Monaco",
        phoneNumber: 3896569064
    },
    {
        name: "Alessandro",
        surname: "Del Sole",
        phoneNumber: 3896125469
    },
    {
        name: "Silvana",
        surname: "Pitarresi",
        phoneNumber: 3569875062
    },
    {
        name: "Maria",
        surname: "Loggia",
        phoneNumber: 3845698721
    },
];

const ulEl = document.querySelector("ul");
const nameEl = document.querySelector("#name");
const surnameEl = document.querySelector("#surname");
const phoneEl = document.querySelector("#phoneNumber");
const btnEl = document.querySelector("button");


localStorage.setItem("people", JSON.stringify(addressBook));
const render = (list) => {
    const renderList = list.map((element, index) =>
        `<li>
    <p class="delete"  ind="${index}">X</p>
    <p>Contatto n: ${index + 1}</p>
    <p>Nome: ${element.name}</p>
    <p>Cognome: ${element.surname}</p>
    <p>Telefono: ${element.phoneNumber}</p>
    </li>`
    )
    ulEl.innerHTML = renderList.join("");




    const delContact = (element, key) => {
        element.addEventListener("click", () => {

            const ind = element.getAttribute("ind");
            console.log("ind: ", ind);
            console.log("key: ", key);

            list.splice(key, 1);
            localStorage.setItem("people", JSON.stringify(list));
            render(list);
            console.log(list);
        });
    };



    const deleteEls = document.querySelectorAll(".delete");
    deleteEls.forEach((item, key) => delContact(item, key));

};

const addContact = () => {
    if (nameEl.value !== "" || surnameEl.value !== "" || phoneEl.value !== "") {
        addressBook.push({
            name: nameEl.value,
            surname: surnameEl.value,
            phoneNumber: phoneEl.value
        });
        render(addressBook);
        localStorage.setItem("people", JSON.stringify(addressBook));
        nameEl.value = "";
        surnameEl.value = "";
        phoneEl.value = "";
    } else { alert("Uno o più campi sono vuoti, riprova!") }
};

try {
    render(addressBook);
    btnEl.addEventListener("click", addContact);
} catch {
    const localPeople = JSON.parse(localStorage.getItem("people"));
    // console.log(localPeople);
    render(localPeople);
}


