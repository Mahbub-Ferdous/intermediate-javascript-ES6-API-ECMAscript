///// if you want to get all country info to call a rest api than go to = "https://restcountries.com/"

// call the rest api inside a function :

const getCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => getData(data));
};

// show data from api in console:

const showCountry = getCountry();

/// functionalities and add elements and getData() function:

const getData = (countries) => {
  // we can use for..of loop to access to all elements of the array but in there we do not use loop we use ES6 shortcut loop with out return forEach() function :
  const divElements = document.getElementById("country");
  countries.forEach((country) => {
    // console.log(country);
    // we create a div in parent din and all elements add in div with loops
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
        <img src="${country.flags.png}" class = "map">
        <p class = "capital">Country Name : ${country.name.common}</p>
        <p class = "capital">Capital Name : ${country.capital}</p>
        <button class = "button" onclick = "loadCountryByName('${country.name.common}')">Details</button>
    `;
    divElements.appendChild(div);
  });
};

// dynamic name wise data call :
const loadCountryByName = (name) => {
  const apiUrl = `https://restcountries.com/v3.1/name/${name}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data));
};

const displayCountryDetails = (country) => {
  // console.log(country);
  const showElement = document.getElementById("country-details");
  showElement.innerHTML = `
    <h3>Population : ${country[0].population}</h3>
    <h3>Region : ${country[0].region}</h3>
  `;
};
