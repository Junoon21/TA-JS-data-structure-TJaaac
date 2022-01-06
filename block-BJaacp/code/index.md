1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`
- What is the value of obj? // answer true because the value is same
- `obj == newObj`// false because both contain different addressed
- `obj === newObj`//false because both contain different addresses
- `user === newObj`//false because both contain different address
- `user == newObj`//false because both contain different addressed
- `user == obj`//true because they have same address
- `arr == arr2`//true because they have same address
- `arr === arr2`//true because they have same address

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```
//The value of person 1 and 2 will be the same as they are pointing to the same adress , hence the object reffred is same.So name:'john', age='50'.

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. output true becausethey point o the same address and hence they are same and the output will be 'bran', 'john' and 'robb'.
console.log(user.brothers.length === brothers.length); //2. output this condition is also true as they both have the same adress and the length will be 3.
```
