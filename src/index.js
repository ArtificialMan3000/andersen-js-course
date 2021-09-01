import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';

foo(5, createCb('cb'));
foo(20, createCb('cb'));

console.log('=======');

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{"x"}', successCb, failureCb);

console.log('=======');
console.log('=======');
console.log('=======');
console.log('=======');
console.log('=======');
console.log('=======');
console.log('=======');
console.log('=======');
console.log('=======');
