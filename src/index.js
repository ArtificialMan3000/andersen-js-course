import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';

foo(5, createCb('cb'));
foo(20, createCb('cb'));

console.log('=======');

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{"x"}', successCb, failureCb);

console.log('=======');

delay(1000).then(v => console.log(`Done with ${v}`));
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');
