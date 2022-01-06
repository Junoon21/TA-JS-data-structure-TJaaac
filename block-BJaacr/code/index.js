/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses)
// 2. Log the length of the "houses" key
console.log(got.houses.length)
// 3. Log the name of all houses in got one by one
for(let house of got.houses){
  console.log(house.name)
}
// 4. Log the name of all the people in house Starks (index 0) one by one
for(let name of got.houses[0].people){
  for(let i=0;i<got.houses[0].people.length-1;i++){
    console.log(got.houses[0].people[i].name)
  }
}

// 5. Log the name of all the people in house Lannisters (index 1) one by one
for(let name of got.houses[1].people){
  for(let i=0;i<got.houses[1].people.length-1;i++){
    console.log(got.houses[1].people[i].name)
  }
}
// 6. Log the description of all the people in house Lannisters (index 1) one by one
for(let description of got.houses[1].people){
  for(let i=0;i<got.houses[1].people.length-1;i++){
    console.log(got.houses[1].people[i].description)
  }
}
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
for(let name of got.houses[1].people){
  for(let description of got.houses[1].people){

  for(let i=0;i<got.houses[1].people.length-1;i++){
    console.log(`I am ${got.houses[1].people[i].name} and my bio is ${got.houses[1].people[i].name}`)
  }
}
}
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for(let name of got.houses[0].people){
  for(let description of got.houses[0].people){

  for(let i=0;i<got.houses[0].people.length-1;i++){
    console.log(`I am ${got.houses[0].people[i].name} and my bio is ${got.houses[0].people[0].name}`)
  }
}
}
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for(let k=0; k < got.houses[0].name;k++){
  // for(let name of got.houses[0].people.description){
    if(got.houses[0].people[0].name==="Robb Stark"){
    
      console.log(`I am ${got.houses[0].people[0].name} and my bio is ${got.houses[0].people[0].name}`)
    }
  // }
  
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
for(let j=0;j<got.houses[1].people[got.houses[1].people.length-1];j++){
  if(got.houses[1].people[1].name==="Tywin Lannister"){
    console.log(`I am ${got.houses[1].people[1].name} and my bio is ${got.houses[1].people[1].description}`)
  }
}
// 11. Push the name of the houses in an array named `houseNames` and Log the array

// 12. Log the size of people in Starks house

// 13. Log the size of people in Lannisters house

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object

// 15. Log the name of all the people of all the houses in got one by one

// 16. Push all names into a new array named `allPeople` and log the value array.

// 17. Log the value and length of `allPeople` array created above

// 18. Push all descriptions into an array named `allDescription`

// 19. Log the value and length `allDescription`

// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
