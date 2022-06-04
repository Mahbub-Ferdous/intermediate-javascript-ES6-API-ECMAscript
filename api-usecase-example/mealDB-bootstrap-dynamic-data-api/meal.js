// if you want to get some data from mealdb than go tot: 'https://www.themealdb.com/api.php'

// hide error handler :
document.getElementById("error-handler").style.display = "none";

// search button click and catch the value of search input field:

document.getElementById("btn").addEventListener("click", () => {
  const searchField = document.getElementById("input-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  // clear input field data
  searchField.value = "";
  ////// error handler:
  if (searchText == "") {
    const body = document.getElementById("error");
    // clear past div:
    body.textContent = "";
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.innerHTML = `
      <h2>NO RESULT FOUND...!!!</h2>
    `;
    body.appendChild(errorDiv);
  } else {
    // fetch data from mealdb api:
    // this is dynamic api call so we declared a variable with url:
    // load data:
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; // we pass the search keyword for dynamic searching||| and you must be pass a https with url
    fetch(url)
      .then((res) => res.json())
      .then((data) => getMeals(data.meals))
      // try...catch apply in without async..await:
      .catch((error) => displayError(error));
  }
});

// eror function :

const displayError = (error) => {
  document.getElementById("error-handler").style.display = "block";
};

// main functionality, create elements by using loop/forEach,

const getMeals = (meals) => {
  // console.log(meals);
  const parenDiv = document.getElementById("card-group");
  //clear past data show in web page for searching:
  parenDiv.textContent == ""; // do not repeat for another search with pressent search
  // error handling :
  if (meals.length == 0) {
    const body = document.getElementById("error");
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.innerHTML = `
      <h2>404 Not Found...!!!</h2>
    `;
    body.appendChild(errorDiv);
  }
  meals.forEach((meal) => {
    console.log(meal);
    const childDiv = document.createElement("div");
    childDiv.classList.add("col");
    childDiv.innerHTML = `
    <div class="card h-75">
        <img src="${meal.strMealThumb}" class="card-img-top img-class" alt="" />
        <div class="card-body w-100">
            <h5 onclick="dynamicDetailsUrl(${
              meal.idMeal
            })" class="card-title cursor">${meal.strMeal}</h5>
            <p class="card-text">
                ${meal.strInstructions.slice(0, 200)}
            </p>
        </div>
    </div>
    `;
    parenDiv.appendChild(childDiv);
  });
};

// dynamic url based onclick event and display data:
// try this with async... await function:
// async await... try .. and catch :
const dynamicDetailsUrl = async (idMeal) => {
  // console.log(idMeal);
  const restUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // now fetch data and show data with event and dom and reactions
  try {
    const res = await fetch(restUrl);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
  } catch (error) {
    displayError(error);
  }
  /* fetch(restUrl)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0])); // cause we get data first an object than inside object an array than again objects */
};

// display meal details data:
const displayMealDetail = (meal) => {
  // console.log(meal);
  const mainDiv = document.getElementById("meal-details");
  // clear past search :
  mainDiv.textContent = "";
  const createDiv = document.createElement("div");
  createDiv.classList.add("card");
  createDiv.setAttribute("style", "width: 20rem");
  createDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 120)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mainDiv.appendChild(createDiv);
};
