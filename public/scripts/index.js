const burgerNameEl = document.getElementById("burgerName");
const buttonEl = document.getElementById("button");
const consumedEl = document.getElementById("consumed");
const notConsumedEl = document.getElementById("notConsumed");

axios.get("/api/burgers").then(function(response) {
  console.log(response);
});

buttonEl.addEventListener("click", () => {
  const name = burgerNameEl.value;
  console.log(name);
  axios
    .post("/api/add", {
      name
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
});
