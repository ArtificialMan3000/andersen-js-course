import './styles/main.css';
// import { foo, createCb } from './asynchronous-programming/task1';
// import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
// import { delay } from './asynchronous-programming/task3';
// import { getUserData } from './asynchronous-programming/task4';
import { getData } from './asynchronous-programming/task5';

// foo(5, createCb('cb'));
// foo(20, createCb('cb'));

// parseJSON('{"x": 10}', successCb, failureCb);
// parseJSON('{"x"}', successCb, failureCb);

// delay(1000).then(v => console.log(`Done with ${v}`));

// getUserData();

getData([
  'https://random-data-api.com/api/address/random_address',
  'https://random-data-api.com/api/appliance/random_appliance',
  'https://random-data-api.com/api/app/random_app',
  'https://random-data-api.com/api/bank/random_bank',
  'https://random-data-api.com/api/beer/random_beer',
]);

getData(
  [
    'https://random-data-api.com/api/address/random_address',
    'https://random-data-api.com/api/appliance/random_appliance',
    'https://random-data-api.com/api/app/random_app',
    'https://random-data-api.com/api/bank/random_bank',
    'https://random-data-api.com/api/beer/random_beer',
  ],
  false
);
