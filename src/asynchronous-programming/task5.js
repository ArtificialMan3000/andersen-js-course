/* eslint-disable import/prefer-default-export */
export const getData = (urls, isParallel = true) => {
  if (isParallel) {
    const promises = urls.map(url => fetch(url));
    Promise.all(promises).then(resultArr =>
      resultArr.forEach(result => result.json().then(data => console.log(data)))
    );
  } else {
    const dataArr = [];
    const fetchDataSerial = urlsArr => {
      if (urlsArr[0]) {
        fetch(urlsArr[0])
          .then(result => result.json())
          .then(data => {
            dataArr.push(data);
            urlsArr.shift();
            fetchDataSerial(urlsArr);
          });
      }
    };
    fetchDataSerial(urls);
    console.log(dataArr);
  }
};
