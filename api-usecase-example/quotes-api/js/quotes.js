// get data from rest api using fetch
const getQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => getData(data));
};

// show all data in wweb page and add some css:

const getData = (quotes) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = `${quotes.quote}`;
  quoteElement.classList.add("quotes-style");
};

///////////////////////////////////////////////////////////////////////////////////////////

// if you want to get any person quotes rest api than : Kanye West Quotes Rest API: https://api.kanye.rest/

///////////////////////////////////////////////////////////////////////////////////////////
