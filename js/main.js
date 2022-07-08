// URL del API
const API_QUOTE = "https://api.adviceslip.com/advice";

// Capturar los elementos html
const title = document.getElementById("title");
const quote = document.getElementById("quote");
const dice = document.getElementById("dice");

dice.addEventListener("click", RandomQuote);

// Ejecutar el random del Dice
function RandomQuote() {
  fetch(API_QUOTE)
    .then((res) => res.json())
    .then((data) => {
      const adviceTittle = data.slip.id;
      title.innerHTML = `ADVICE #${adviceTittle}`;
      quote.innerHTML = data.slip.advice;
    })
    .catch((e) => {
      alert(e);
    });
}
