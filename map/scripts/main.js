let map = new Map([
    ['шестой', 'этаж'],
    [1, 'дом'],
    [true, 'планета']
]);

console.log(map);

const user = { name: 'Dasha' };

map.set(user, 'active');

console.log(map.get(user));
console.log(map.get('шестой'));
console.log(map.get(true));


console.log(map.has(1));

map.delete(1);

console.log(map.has(1));

map.clear();

console.log(map);

map = new Map([
  ['пингвинов', '5 шт'],
  ['жирафов', '3 шт'],
  ['слонов', '1 шт']
]);


for (let animal of map.keys()) {
  console.log(animal); // 'пингвинов', 'жирафов', 'слонов'
}

for (let amount of map.values()) {
  console.log(amount); // 5 шт, 3 шт, 1 шт
}

for (let entry of map) { // то же что и recipeMap.entries()
  console.log(entry); // 'пингвинов',5 шт , и т.д., массивы по 2 значения
}

map.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // 'пингвинов': 5 шт, и т.д.
});
