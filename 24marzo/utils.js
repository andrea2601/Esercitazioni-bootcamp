const cardsWrapper = document.querySelector(".cardsWrapper");
const createCard = (title, desc, imgUrl, year) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const imgEl = document.createElement("img");
    const parDescEl = document.createElement("p");
    const parYearEl = document.createElement("p");
    const x = document.createElement("p");


    divEl.classList.add("card");
    parYearEl.classList.add("year");
    parDescEl.classList.add("description");
    x.classList.add("delete");

    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "film cover");

    h3El.textContent = title;
    parDescEl.textContent = desc;
    parYearEl.textContent = year;
    x.textContent = "x";

    divEl.append(h3El, x, imgEl, parDescEl, parYearEl);
    cardsWrapper.appendChild(divEl);
};

const filmAPI = async (url) => {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    });
    return await res.json();    
};

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";

export {createCard, filmAPI, formatMinText};