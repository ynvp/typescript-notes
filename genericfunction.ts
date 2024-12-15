function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concat2 = getItems<string>(["a", "b", "c", "d"]);
console.log(concatResult);
console.log(concat2);
