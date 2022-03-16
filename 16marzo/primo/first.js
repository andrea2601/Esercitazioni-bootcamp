const quotes = [
    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
  ];

  const container = document.querySelector('.citazione');
  const btn = document.querySelector('#randomBtn');

  const render = (number) => {

    const htmlQuote = `<h2>${(number+1) + ". " + quotes[number]}</h2>`;
    container.innerHTML = htmlQuote;
  };
  

  btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    render(random);
    });