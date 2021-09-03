// eslint-disable-next-line import/prefer-default-export
export const foo = (x, cb) => {
  if (x > 10) {
    console.log('x > 10');
    cb();
  } else {
    console.log('x <= 10');
  }
};

export const createCb = str => {
  return () => {
    console.log(str);
  };
};
