const cardsWrapper = document.querySelector(".cardsWrapper");

const createCard = (title, desc, imgUrl, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const imgEl = document.createElement("img");
    const parDescEl = document.createElement("p");
    const parPriceEl = document.createElement("p");
    const x = document.createElement("p");


    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
    x.classList.add("delete");

    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img product");

    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
    x.textContent = "x";

    divEl.append(h3El, x, imgEl, parDescEl, parPriceEl);
    cardsWrapper.appendChild(divEl);
};

const productAPI = async (url) => {
    const res = await fetch(url);
    return await res.json();    
};

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";

productAPI("https://fakestoreapi.com/products").then(data => {
    data.map(product => {
        createCard(
            formatMinText(product.title),
            formatMinText(product.description),
            product.image,
            product.price + " $"
        );
    })
    const delContact = (element, key) => {
        element.addEventListener("click", () => {
            console.log("key: ", key);
            cardsWrapper.children[key].classList.add("remove");
        });
    };


    const deleteEls = document.querySelectorAll(".delete");
    deleteEls.forEach((item, key) => delContact(item, key));
    
})