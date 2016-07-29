let set = new Set();

const elephant = { animal: 'elephant' };
const giraffe = { animal: 'giraffe' };
const tiger = { animal: 'tiger' };

set.add(elephant)
  .add(giraffe)
  .add(tiger);

console.log(set);

console.log(set.size);

set.add(tiger);

console.log(set.size);

set.delete(tiger);

console.log(set);

set.clear();

console.log(set);

set.add(elephant)
  .add(giraffe)
  .add(tiger);

for (let value of set) {
    console.log(value);
}

set.forEach(( value, secondValue, set) => {
    console.log(value);
})
