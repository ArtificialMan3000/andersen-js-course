/* eslint-disable import/prefer-default-export */
export const getUserData = () => {
  fetch('https://random-data-api.com/api/users/random_user')
    .then(result => {
      return result.json();
    })
    .then(data => {
      if (data.address.country === 'United States') {
        return fetch('https://random-data-api.com/api/hipster/random_hipster_stuff');
      }
      return console.log(data.address.country);
    })
    .then(result => result.text())
    .then(data => console.log(data));
};
