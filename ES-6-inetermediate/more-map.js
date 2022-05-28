// map with string functionality :

// find how much alphabet have an indivisual friend names and return them an array  
const friends = ['mohammad salah', 'kingslay coman', 'benjamin pavard', 'sadio mane', 'thomas muller'];

const numberOfAlphabet = friends.map(friend => friend.length);
console.log(numberOfAlphabet);    // ans is [ 14, 14, 15, 10, 13 ]

// older system or map described system:
// lenth saving arrays declaration:
const nameOfLength = [];
// length function 
const nameLength = x => x.length;
for(const friend of friends){
    const length = nameLength(friend);
    nameOfLength.push(length);
}
console.log(nameOfLength);              /// ans is same [ 14, 14, 15, 10, 13 ]


////// but if we apply map function and pass a parameter which is a arrow function functionality that it will done with only two line codes.

