'use strict';

// Task 1
const arr1 = [1, 3, 5, 4, 5, 7];

console.group(
  `Задача 1. 
  В массиве [${arr1}], содержащем 3 и более чисел, 
  определить подходит ли каждая группа из трех чисел условию (a > b < c) || (a < b > c)`
);
function sortArray (arr) {
  const result = [];
  for (let i = 1; i < arr.length - 1; i++) {
    const a = arr[i - 1],
      b = arr[i],
      c = arr[i + 1];

    const condition = (a > b && b < c) || (a < b && b > c);

    condition ? result.push(1) : result.push(0);
  }
  return result;
}

const resultTask1 = sortArray(arr1);
console.log(
  `Результат: [${resultTask1[0]}, ${resultTask1[1]}, ${resultTask1[2]}, ${resultTask1[3]}] `
);

console.groupEnd();

// Task 2
const matrix = [
  [1, 2, 3, 2, 7, 3],
  [4, 5, 6, 8, 1, 2],
  [7, 8, 9, 4, 5, 9],
];

console.group(
  `Задача 2. 
  Дана матрица размером 3*N
  [${matrix[0]}]
  [${matrix[1]}]
  [${matrix[2]}]
  из целых чисел от 1 до 9, где N может быть больше либо равно 3. 
  Необходимо определить содержит ли каждый участок матрицы 3 * 3 все числа от 1 до 9.`
);

function sortMatrix (arr) {
  const result = [];
  for (let k = 0; k < matrix[0].length - 2; k++) {
    const sort = new Set();
    for (let j = k; j < k + 3; j++) {
      for (let i = 0; i < matrix.length; i++) {
        sort.add(matrix[i][j]);
      }
    }
    result.push(sort.size === 9);
  }
  return result;
}
const resultTask2 = sortMatrix(matrix);
console.log(
  `Результат: [${resultTask2[0]}, ${resultTask2[1]}, ${resultTask2[2]}, ${resultTask2[3]}] `
);
console.groupEnd();

// Task 3
const arrWords = [
  ['Hello', 'world'],
  ['Brad', 'came', 'to', 'dinner', 'with', 'us'],
  ['He', 'loves', 'tacos'],
];

const condition = ['LEFT', 'RIGHT', 'LEFT'];

const chars = Number(16);
const symbStar = '*';

console.group(
  `Задача 3.
  Ecть набор строк
  [ 
    [${arrWords[0]}],
    [${arrWords[1]}], 
    [${arrWords[2]}],
  ]  
  условия форматирования каждой строки(отдельный масив [${condition}]) и лимит символов в строке (chars < ${chars}). 
  Текст должен быть заключен со всех сторон в символ  *  `
);
function sortWords (arr, arr2) {
  const result = [];
  const strStar = symbStar.repeat(chars + 2);

  result.push(strStar);

  arr.forEach((e, i, a) => {
    const item = e.join(' ');
    const indexArr2 = arr2.length - a.length + i;

    sortArr();
    function sortArr () {
      let itemResult;
      if (item.length < chars) {
        itemResult = item;
        result.push(symbStar + conFormat() + symbStar);
      } else {
        let itemAddSpace = item + ' ';
        let regItem;
        for (let j = 0; j < itemAddSpace.length; j++) {
          const regexpItem = RegExp(`(.{0,${chars}})\\s`, 'g');
          regItem = itemAddSpace.match(regexpItem);
        }
        for (let j = 0; j < regItem.length; j++) {
          itemResult = regItem[j].slice(0, -1);
          result.push(symbStar + conFormat() + symbStar);
        }
      }

      function conFormat () {
        return i % 2 === 0 && indexArr2 % 2 === 0
          ? itemResult.padEnd(chars, ' ')
          : itemResult.padStart(chars, ' ');
      }
    }
  });
  result.push(strStar);
  return result;
}
const resultTask3 = sortWords(arrWords, condition);

console.log(`Результат:
 [ 
  ${resultTask3[0]},
  ${resultTask3[1]}, 
  ${resultTask3[2]},
  ${resultTask3[3]},
  ${resultTask3[4]},
  ${resultTask3[5]},
 ]`);
console.groupEnd();
