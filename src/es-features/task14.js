﻿﻿﻿/**
 * Написать функция, которая принимает объект, и возвращает массив с внутренними массивами, которые были созданы под каждое из свойств объекта.
 *
 * Пример вызова
 * console.log(task14Old({ a: 10, b: 55, c: 3 })); -> [["a", 10], ["b", 55], ["c", 3]]
 * console.log(task14Old({ a: 1 })); -> [["a", 1]]
 */

export function task14Old(obj) {
  return Object.keys(obj).map(k => [k, obj[k]]);
}

// Напишите реализацию функции task14Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task14New = obj => Object.entries(obj);

console.log(task14New({ a: 10, b: 55, c: 3 }));
console.log(task14New({ a: 1 }));
