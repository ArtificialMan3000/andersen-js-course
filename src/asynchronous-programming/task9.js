/* eslint-disable import/prefer-default-export */
const asyncBar = async () => 'Some string!';

export const foo = async () => {
  console.log(await asyncBar());
};
