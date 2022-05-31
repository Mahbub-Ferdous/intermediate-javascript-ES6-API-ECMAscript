//// if you get the random user rest api than please go to this url: https://randomuser.me/
// here we can learn is data json ,or array or stringify and also take care about nested data means objects inside object
// api call by using fetch and put in on getUser function
const getUser = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => getData(data));
};

// call the function to show output in console

const getLoad = getUser();

// functionality function to add some element by using DOM:

const getData = (users) => {
  const div = document.getElementById("buddy");
  for (let user of users.results) {
    console.log(user);
    const pic = user.picture.medium;
    // create a new elements:
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    // add some class with created new elements:
    img.setAttribute("src", pic);
    img.setAttribute("class", "pic");
    h4.setAttribute("class", "h4-tag");
    p.classList.add("paratag");
    p2.classList.add("para");
    p3.classList.add("para");
    p4.classList.add("para");
    // created new elemets innerText Set:
    // img.innerHTML = `<img src="${user.picture.medium}">`;
    h4.innerText = `Name : ${user.name.title}. ${user.name.first} ${user.name.last}`;
    p.innerText = `Email : ${user.email}`;
    p2.innerText = `Age : ${user.dob.age}, DOB : ${user.dob.date}`;
    p3.innerText = `Gender : ${user.gender}`;
    p4.innerText = `Phone : ${user.phone}`;
    // append elements in div container:
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
  }
};
