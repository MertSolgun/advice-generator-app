const buttonDiv = document.querySelector(".buttonDiv");
const cardTitle = document.querySelector(".card-title p");
const cardH1 = document.querySelector(".card-title h1");

async function response() {
  const apiResponse = await fetch("https://api.adviceslip.com/advice");
  const data = await apiResponse.json();
  cardTitle.innerHTML = `Advice #${data.slip.id}`;
  cardH1.innerHTML = data.slip.advice;
}

window.addEventListener("load", response);
buttonDiv.addEventListener("click", response);
