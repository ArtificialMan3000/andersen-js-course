/* eslint-disable import/prefer-default-export */
const getUsers = url => fetch(url);

export const foo = async url => {
  try {
    const response = await getUsers(url);
    const [user] = await response.json();
    console.log(user);
  } catch (err) {
    console.log('Error!', err);
  }
};
