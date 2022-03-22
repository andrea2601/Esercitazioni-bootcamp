const sum = () => {
    const first = parseInt(prompt("Inserisci il primo numero"));
    const second = parseInt(prompt("Inserisci il secondo numero"));
    return first + second;
}
const somma = sum();

setTimeout(() => alert("Somma: " + somma), 10000);
