//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let searchVal = document.querySelector("input").value;
  searchVal = searchVal.split(" ").join("%20");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchVal}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let random = Math.floor(Math.random() * data.drinks.length) + 1;
      console.log(data);
      document.querySelector(".drinkResults").innerHTML = "";

      html = "";

      for (let i = 0; i < data.drinks.length; i++) {
        html += `<div class="card"><h2>${data.drinks[i].strDrink}</h2>
      <img src = "${data.drinks[i].strDrinkThumb}" alt="${data.drinks[0].strDrink}"
      <h3> Instructions: ${data.drinks[i].strInstructions}</h3>
      </div>
      `;
      }

      document
        .querySelector(".drinkResults")
        .insertAdjacentHTML("beforeend", html);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//homework: handle drink names w/ multiple words (spaces), mispellings, and rotating carousel of drinks that automatically runs.
//need a condition if the search returns less than 6 results
