// fetch() and .then() using to get rest api data:
const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json()) // in there .then() means next task and parameter was arrow function
    .then((data) => console.log(data[0]));
};
document.getElementById("btn").addEventListener("click", () => {
  const data = getData();
});

/// fetch user data from https://jsonplaceholder.typicode.com/users:
document.getElementById("user").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showUsers(data));
});

// fetch post data from https://jsonplaceholder.typicode.com/posts:

const getPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
};

// call arrow function inside arrow function : you can pass as a prameter of any javascript functionality arrow function

const displayPost = (data) => {
  console.log(data);
};

//show all user from the data api:
// show the all user name dynamically from the api by using DOM:

const showUsers = (data) => {
  // catch the ul from DOM using getelementbyID:
  const ul = document.getElementById("user-list");
  for (const user of data) {
    // console.log(user.name);
    // create li elements :
    const li = document.createElement("li");
    // set the innerText of li elements innerText from the api data objects.nameProperty
    li.innerText = `
    Name : ${user.name}
    Email: ${user.email}
    `; // using template string for dynamic response
    // append all looping li inside the ul
    ul.appendChild(li);
  }
};
