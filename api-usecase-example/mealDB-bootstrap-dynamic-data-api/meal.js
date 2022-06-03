// if you want to get some data from mealdb than go tot: 'https://www.themealdb.com/api.php'

// search button click and catch the value of search input field:

document.getElementById("btn").addEventListener("click", () => {
  const searchField = document.getElementById("input-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  searchField.value = "";
  // fetch data from mealdb api:
  // this is dynamic api call so we declared a variable with url:
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; // we pass the search keyword for dynamic searching||| and you must be pass a https with url
  fetch(url)
    .then((res) => res.json())
    .then((data) => getMeals(data.meals));
});

// main functionality, create elements by using loop/forEach,

const getMeals = (meals) => {
  //   console.log(meals);
  const parenDiv = document.getElementById("card-group");
  meals.forEach((meal) => {
    console.log(meal);
    const childDiv = document.createElement("div");
    childDiv.classList.add("col");
    childDiv.innerHTML = `
    <div class="card h-75">
        <img src="${
          meal.strMealThumb
        }" class="card-img-top img-class" alt="" />
        <div class="card-body w-100">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
                ${meal.strInstructions.slice(0, 200)}
            </p>
        </div>
    </div>
    `;
    parenDiv.appendChild(childDiv);
  });
};
