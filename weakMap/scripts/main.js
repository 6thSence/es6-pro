let animals = [
  { animal: 'tiger' },
  { animal: 'elephant' },
  { animal: 'giraffe' },
];

let weakMap = new WeakMap([
    [animals[0], 1],
    [animals[1], 2],
    [animals[2], 3]]);

console.log(weakMap.get(animals[0])); // 1
console.log(weakMap);

animals.splice(0, 1); // tiger больше не находится в массиве

console.log(animals);
console.log(weakMap.has(animals[0])); // в какой-то неизвестный нам момент времени сборщик мусора удалит этот элемент

// weakMap теперь содержит только 2 элемента

animals.splice(0, 1); // elephant больше не находится в массиве

console.log(weakMap.has(animals[1])); // в какой-то неизвестный нам момент времени сборщик мусора удалит этот элемент

// weakMap теперь содержит только 1 элемент

console.log(animals);
console.log(weakMap.has(animals[2])); // в какой-то неизвестный нам момент времени сборщик мусора удалит этот элемент
