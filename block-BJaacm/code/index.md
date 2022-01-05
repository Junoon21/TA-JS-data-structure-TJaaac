```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`
<img src="../">

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // yes true because both are storing the same address which is hence pointing the same object.
- `user === newUser;`//yes true they are also strictly equal to as the have the exact same values.
- `user.name === newUser.name;`//yes true they have the same address and hence are pointing to the same value.
- `user.name == newUser.name;`//yes true they have the same address and hence are pointing to the same value.
- `user.sibling == newUser.sibling;`//yes true they have the same address and hence are pointing to the same value.
- `user.sibling === newUser.sibling;`//yes true they have the same address and hence are pointing to the same value.
- `user.sibling == allBrothers;`//false because both have different addresses.
- `user.sibling === allBrothers;`//false because both have different addresses.though they are pointing the same values but through different addresses.
- `brothersCopy === allBrothers;`//false , they are not strictly equal to because though they are pointing the same values but through different addresses.
- `brothersCopy == allBrothers;`//false because both have different addresses.
- `brothersCopy == user.sibling;`/true because the values are same.
- `brothersCopy === user.sibling;`//true
- `brothersCopy[0] === user.sibling[0];`//true
- `brothersCopy[1] === user.sibling[1];`//true
- `user.sibling[1] === newUser.sibling[1];`//true because the values are same.
