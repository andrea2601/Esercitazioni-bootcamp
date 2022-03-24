import { createCard, filmAPI, formatMinText } from "./utils.js";
const cardsWrapper = document.querySelector(".cardsWrapper");
const title = document.querySelector("#title");
const poster = document.querySelector("#img");
const description = document.querySelector("#description");
const year = document.querySelector("#year");
const submit = document.querySelector("#submit");
const hidden = document.querySelector("#hiddenDiv");
const hiddenDesc = document.querySelector("#hidden");




filmAPI("https://edgemony-backend.herokuapp.com/movies").then(data => {
    data.map(film => {
        createCard(
            film.title,
            film.description,
            film.poster,
            film.year,
            film.genres,
            film.id
        );
    })
    const delFilm = (element, key) => {
        element.addEventListener("click", () => {
            console.log("key: ", key);
            cardsWrapper.children[key].classList.add("remove");
            fetch(`https://edgemony-backend.herokuapp.com/movies/${element.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(() => location.reload());
        });
    };

    const popUp = (item) => {
        item.addEventListener("click", () => {
            const hiddenDesc = document.querySelectorAll(".hiddenDesc");
            const desc = document.querySelectorAll(".description");

            item.classList.add("popUp");
            hidden.classList.add("popUp");

            desc.forEach(item => {
                item.classList.remove("description");
                item.classList.add("hidden");
            })

            hiddenDesc.forEach(item => { 
                item.classList.add("description"); 
                item.classList.remove("hiddenDesc"); 
            })


            const deleteEls = document.querySelectorAll(".delete");
            deleteEls.forEach((item) => item.classList.add("hidden"));

            hidden.addEventListener("click", () => {

                item.classList.remove("popUp");
                hidden.classList.remove("popUp");
                desc.forEach(item => {
                    item.classList.add("description");
                    item.classList.remove("hidden");
                })
    
                hiddenDesc.forEach(item => { 
                    item.classList.remove("description"); 
                    item.classList.add("hiddenDesc"); 
                })
    

                deleteEls.forEach((item) => item.classList.remove("hidden"));
            })
        });
    }

    const cardEls = document.querySelectorAll(".card");
    cardEls.forEach(item => popUp(item));
    const deleteEls = document.querySelectorAll(".delete");
    deleteEls.forEach((item, key) => delFilm(item, key));

});

submit.addEventListener("click", (event => {
    event.preventDefault();

    let checkedGenres = [];
    const genres = document.querySelectorAll(".genres");
    genres.forEach(item => {
        if (item.checked == true) {
            checkedGenres.push(item.value);
            console.log("....." + checkedGenres);
        }
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
            genres: checkedGenres
        })
    }).then((data) => location.reload());
}))