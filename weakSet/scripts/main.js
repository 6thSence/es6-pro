let animals = [
  { animal: 'tiger' },
  { animal: 'elephant' },
  { animal: 'giraffe' },
];

let weakSet = new WeakSet([
    animals[0],
    animals[1],
    animals[2]]);

console.log(weakSet.has(animals[0])); // true
console.log(weakSet);

animals.splice(0, 1); // tiger больше не находится в массиве

console.log(animals);
console.log(weakSet.has(animals[0])); // в какой-то неизвестный нам момент времени сборщик мусора удалит этот элемент

// weakSet теперь содержит только 2 элемента

animals.splice(0, 1); // elephant больше не находится в массиве

console.log(weakSet.has(animals[1])); // в какой-то неизвестный нам момент времени сборщик мусора удалит этот элемент

// weakSet теперь содержит только 1 элемент

console.log(animals);
console.log(weakSet.has(animals[2])); // в какой-то неизвестный нам момент времени сборщик мусора удалит этот элемент
