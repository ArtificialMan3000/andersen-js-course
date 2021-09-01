import './styles/main.css';
// import { foo, createCb } from './asynchronous-programming/task1';
// import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
// import { delay } from './asynchronous-programming/task3';
// import { getUserData } from './asynchronous-programming/task4';
// import { getData } from './asynchronous-programming/task5';
// import { getResolvedPromise } from './asynchronous-programming/task6';
// import { foo } from './asynchronous-programming/task7';
// import { foo } from './asynchronous-programming/task8';
// import { foo } from './asynchronous-programming/task9';
import { Musician } from './asynchronous-programming/task10';

// foo(5, createCb('cb'));
// foo(20, createCb('cb'));

// parseJSON('{"x": 10}', successCb, failureCb);
// parseJSON('{"x"}', successCb, failureCb);

// delay(1000).then(v => console.log(`Done with ${v}`));

// getUserData();

// getData([
//   'https://random-data-api.com/api/address/random_address',
//   'https://random-data-api.com/api/appliance/random_appliance',
//   'https://random-data-api.com/api/app/random_app',
//   'https://random-data-api.com/api/bank/random_bank',
//   'https://random-data-api.com/api/beer/random_beer',
// ]);

// getData(
//   [
//     'https://random-data-api.com/api/address/random_address',
//     'https://random-data-api.com/api/appliance/random_appliance',
//     'https://random-data-api.com/api/app/random_app',
//     'https://random-data-api.com/api/bank/random_bank',
//     'https://random-data-api.com/api/beer/random_beer',
//   ],
//   false
// );

// getResolvedPromise(500)
//   .then(value => {
//     try {
//       if (value > 300) {
//         throw Error('Ошибка');
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   })
//   .finally(() => {
//     console.log('This is Finally!');
//   });

// foo();

// foo('https://jsonplaceholder.typicode.com/users');

// foo();

const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
musician.getAlbums().then(albums => console.log(albums));
