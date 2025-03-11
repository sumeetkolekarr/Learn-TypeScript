interface Box<T> {
    content: T;
}

const numberBox: Box<number> = { content: 100 };
const stringBox: Box<string> = { content: "Hello" };

console.log(numberBox.content); // Output: 100
console.log(stringBox.content); // Output: Hello


function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

console.log(pair<string, number>("age", 25)); // Output: ['age', 25]
