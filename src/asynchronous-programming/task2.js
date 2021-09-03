/* eslint-disable import/prefer-default-export */
export const parseJSON = (jsonStr, successCb, failureCb) => {
  let parsedStr;
  try {
    parsedStr = JSON.parse(jsonStr);
    successCb(parsedStr);
  } catch (error) {
    failureCb(error);
  }
};

export const successCb = result => {
  console.log('Success parse!');
  console.log(result);
};

export const failureCb = error => {
  console.log('Failure parse!');
  console.log(error);
};
