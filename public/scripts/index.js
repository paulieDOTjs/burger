const burgerNameEl = document.getElementById("burgerName");
const buttonEl = document.getElementById("button");
const devouredEl = document.getElementById("devoured");
const notDevouredEl = document.getElementById("notdevoured");

function renderBurgers() {
  axios.get("/api/burgers").then(function(response) {
    burgers = response.data;
    for (let i = 0; i < burgers.length; i++) {
      burger = burgers[i];
      burgerEl = document.createElement("li");
      burgerEl.innerHTML = burger.name;
      if (burger.devoured) {
        devouredEl.append(burgerEl);
      } else {
        notDevouredEl.append(burgerEl);
      }
    }
  });
}
renderBurgers();
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
