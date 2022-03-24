import { createCard, filmAPI, formatMinText } from "./utils.js";
const cardsWrapper = document.querySelector(".cardsWrapper");
const title = document.querySelector("#title");
const poster = document.querySelector("#img");
const description = document.querySelector("#description");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");



filmAPI("https://edgemony-backend.herokuapp.com/movies").then(data => {
    data.map(film => {
        createCard(
            film.title,
            formatMinText(film.description),
            film.poster,
            film.year
        );
    })
    const delFilm = (element, key) => {
        element.addEventListener("click", () => {
            console.log("key: ", key);
            cardsWrapper.children[key].classList.add("remove");
            fetch(`https://edgemony-backend.herokuapp.com/movies/${key + 1}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        });
    };

    const popUp = (item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("popUp");
        });
    }

    const cardEls = document.querySelectorAll(".card");
    cardEls.forEach(item => popUp(item));
    const deleteEls = document.querySelectorAll(".delete");
    deleteEls.forEach((item, key) => delFilm(item, key));

});

submit.addEventListener("click", (event => {
    event.preventDefault();

    const checkedGeneres = [];
    const generes = document.querySelectorAll(".generes");
    generes.forEach(item => {
        if (item.checked) checkedGeneres.push(item.value)
    });

    fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title.value,
            description: description.value,
            poster: poster.value,
            year: year.value,
            generes: checkedGeneres
        })
    }).then((data) => location.reload());
}))