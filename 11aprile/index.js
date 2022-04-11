const fs = require("fs").promises;
const arguments = process.argv.slice(2)

console.log("argomenti: ", arguments);

async function ReadFile(file) {
    const data = await fs.readFile(file);
    const dataTostring = data.toString();
    console.log(dataTostring);
    return dataTostring;
}

async function WriteFile(content, flag) {
    await fs.writeFile('spesa.html', content, { flag: flag })
}

const content = `<li>Prodotto: ${arguments[0]}, Quantita': ${arguments[1]}</li>\n`
const ulOpen = `<ul>`;
const ulClose = `</ul>`;

async function WriteAndRead() {

    const text = await ReadFile('spesa.html');
    const ulOpenPosition = text.search("<ul>");
    const ulClosePosition = text.search("</ul>");
    const vorherigerText = text.substring(ulOpenPosition + 4, ulClosePosition);

    console.log("testo precenedte: ", vorherigerText);
    console.log("ul open pos: ", ulOpenPosition);
    console.log("ul close pos: ", ulClosePosition);


    await WriteFile("", "");
    await WriteFile(ulOpen, "a+");
    await WriteFile(vorherigerText, "a+");
    await WriteFile(content, "a+");
    await WriteFile(ulClose, "a+");

    await ReadFile('spesa.html');
}

WriteAndRead()