require("babel-core/register");
require("babel-polyfill");

function* generatorCounting(a) {
    const b = yield a + 2;
    const c = yield b + 3;
    return c +  4;
};

let counting = generatorCounting(3);

for (let item of counting) {
    console.log(item) ; // 5, 8, 12
}