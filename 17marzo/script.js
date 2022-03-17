// Sezione commenti

const cerca = document.querySelector("#cerca");
const submit = document.querySelector("#submit");
const filmList = document.querySelector("#films");

const film = [
  "Deadpool",
  "Dune",
  "Grosso guaio a Chinatown",
  "V per vendetta",
  "Pulp Fiction",
  "Signore degli anelli",
  "Scarface",
  "Sharknado (1,2,3,4,5 e 6)",
  "Blade Runner",
];

const renderFilm = (list) => {
  const filmItems = list.map(
    (title) =>
      `<li class="cardItem">
            <p>${title}</p>
      </li>`
  );
  console.log(filmItems.join(""));
  filmList.innerHTML = filmItems.join("");
};

submit.addEventListener("click", () => {

  const selected = film.filter((element) => element.toLowerCase().includes(cerca.value.toLowerCase()));
  console.log(selected);
  renderFilm(selected);
});

renderFilm(film);


