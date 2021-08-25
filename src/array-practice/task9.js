/**
 * Реализовать функцию indexOfAll в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй - значение
 *
 * Функция возвращает массив со всеми индексами, которые соответствуют переданному значению
 * ([1, 2, 3, 1, 2, 3], 1) -> 1ца в массиве присутствует на 0ой и 3ей позиции. Вернули [0, 3]
 * ([1, 2, 3], 4) -> 4ка в массиве НЕ присутствует. Вернули пустой массив []
 *
 * console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
 * console.log(indexOfAll([1, 2, 3], 4)); -> []
 */

// export default function indexOfAll(arr, value) {
//   const res = [];
//   for (let index = arr.indexOf(value); index !== -1; index = arr.indexOf(value, index + 1)) {
//     res.push(index);
//   }
//   return res;
// }
export default function indexOfAll(arr, value) {
  return arr.reduce((acc, currVal, index) => (currVal === value ? [...acc, index] : acc), []);
}
