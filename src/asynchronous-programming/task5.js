/* eslint-disable import/prefer-default-export */
export const getData = (urls, isParallel = true) => {
  if (isParallel) {
    const promises = urls.map(url => fetch(url));
    Promise.all(promises).then(resultArr =>
      resultArr.forEach(result => result.json().then(data => console.log(data)))
    );
  } else if (urls[0]) {
    fetch(urls[0])
      .then(result => result.json())
      .then(data => {
        console.log(data);
        urls.shift();
        getData(urls, false);
      });
  }
};
