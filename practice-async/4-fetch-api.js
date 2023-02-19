const ENDPOINT = 'https://randomuser.me/api/';

function fetchUsers(userCount = 10) {
  return fetch(`${ENDPOINT}?results=${userCount}`); // Promise { then, catch, ... }
}

const callAsyncButton = document.querySelector('[data-component="CallAsyncButton"]');
const userList = document.querySelector('[data-component="UserList"]');

// case 1. Promise API
// callAsyncButton.addEventListener('click', () => {
//   fetchUsers()
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       renderUserList(data.results);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// case 2. Async function
callAsyncButton.addEventListener('click', async () => {
  const response = await fetchUsers();
  if (!response.ok) console.error(response.statusText);
  const data = await response.json();
  renderUserList(data.results);
});

function renderUserList(users) {
  // const userNames = users.map((user) => {
  //   return `${user.name.first} ${user.name.last}`;
  // });

  // userNames.forEach((name) => {
  //   userList.insertAdjacentHTML('beforeend', `<li>${name}</li>`);
  // });

  users.forEach(({ name: { first, last } }) => {
    userList.insertAdjacentHTML('beforeend', `<li>${`${first} ${last}`}</li>`);
  });
}
