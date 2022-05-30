// fetch data from api
const getPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => getData(data));
};
// call the function to show the webpage without any events:

getPost();

// data function manupulations :
const getData = (posts) => {
  // catch the parent elements for append something
  const postContainer = document.getElementById("posts");
  // for..of loop for get all the posts those are objects array
  for (const post of posts) {
    // create a div
    const div = document.createElement("div");
    // add a class to add CSS style
    div.setAttribute("class", "post");
    /* div.classList.add(post) this another sytem to add class*/
    div.innerHTML = `
        <h1 class="color">${post.title}</h1>
        <p>${post.body}</p>
        `;
    // append with parent:
    postContainer.appendChild(p);
  }
};
