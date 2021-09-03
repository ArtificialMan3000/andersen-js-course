/* eslint-disable import/prefer-default-export */
const getPromise1 = async () => 2;
const getPromise2 = async () => 3;
const getPromise3 = async () => 7;

export const foo = async () => {
  const value1 = await getPromise1();
  const value2 = await getPromise2();
  const value3 = await getPromise3();

  console.log(value1 * (value2 + value3));
};
