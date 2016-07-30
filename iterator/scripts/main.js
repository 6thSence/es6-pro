let animals = [ 'tiger', 'giraffer', 'elephant'];
animals.zooName = 'Central Park Zoo';

for (let i in animals) {
    console.log(i); // возвращает ключи объекта: 0, 1, 2, zooName
};

for (let i of animals) {
    console.log(i); // возвращает значения: 'tiger', 'giraffer', 'elephant'
};

const name = 'Dariya';
console.log(...name); // ['D', 'a', 'r', 'i', 'y', 'a']

let cityName = {
    [Symbol.iterator]: () => {

        const string = 'Alabama';
        let index = 0;

        return {
            next: () =>  ({
                value: string[index],
                done: index++ >= string.length
            })
        }
    }
};

for (let i of cityName) {
    console.log(i);
};

console.log(...cityName);