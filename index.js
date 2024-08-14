let random = document.querySelector("main figure");
let adiveID = document.querySelector("#advice");
let quote = document.querySelector(".quote");

random.addEventListener("click", () => {
  let data = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adiveID.innerHTML = data.slip.id;
      quote.innerHTML = data.slip.advice;
    });
});
