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
  const div = document.getElementById("country");
  countries.forEach((country) => {
    console.log(country);
    const pic = country.flags.png;
    const img = document.createElement("img");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    img.setAttribute("src", pic);
    img.classList.add("map");
    p.classList.add("capital");
    p2.classList.add("capital");
    // set innertext
    p.innerText = `Country Name : ${country.altSpellings[0]}`;
    p2.innerText = `Capital Name : ${country.capital}`;
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p2);
  });
};
