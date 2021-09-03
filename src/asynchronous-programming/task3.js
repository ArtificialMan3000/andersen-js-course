/* eslint-disable import/prefer-default-export */
export const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve(100), ms);
  });
};
