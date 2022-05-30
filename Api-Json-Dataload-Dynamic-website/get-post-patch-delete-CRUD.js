/// there have 4 core method in networking and rest api ::

/* 
1. GET    == READ   ==> GET/READ means we get data and show webpage and we see those data 
2. POST   == CREATE ==> POST/CREATE means data created newly and push those in database 
3. PATCH  == UPDATE ==> PATCH/UPDATE menans we also update our past created data and again push data inside database
4. DELETE == DELETE ==> DELETE means posted or updated data we can delete from the database

#### GET,POST,PATCH,DELETE == CRUD Operation 
*/

// get data from an rest api:

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

// post data inside a rest api :

/// in post we pass another parameter in fetch() function which is object:
/* fetch('rest-api-link', {jsObject}) */
// another object parameter have 3 propety : 1.method, 2.body 3.headers
/* in method properties we pass value as http POST,PATCH,DELETE method with out GET  */
/* in body properties we pass JSON.stringify({jsObject with property and value}) method , cause we pass jsObject but rest api read it json so that we pass it inside stringify() */
/* in headers property also contains a Json object where we write 'Content-type': "application/json; charset = UTF-8" */
// lastly two .then() function are same doing as GET method
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    id: 1,
    title: "this is my post method title ",
    body: "POST   == CREATE ==> POST/CREATE means data created newly and push those in database",
  }),
  headers: {
    "Content-type": "application/json; charset = UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// "UPDATE" past data inside rest api :

// same as POST method but we pass some value in body object:
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "PATCH  == UPDATE ==> PATCH/UPDATE menans we also update our past created data and again push data inside database",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// "DELETE" past object from a rest api link:

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});
