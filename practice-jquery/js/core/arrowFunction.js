function createUser(nameValue) {
  return { name: nameValue };
}

let createUserByName = (nameValue) => {
  return { name: nameValue; };
};

createUserByName = (nameValue) => ({ name: nameValue; });



