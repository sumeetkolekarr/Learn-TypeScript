// Function Define
const greet = (name: string, id: number) => {
    return `Welcome, ${name} and your id is ${id}`
}

// By inserting '?', optional parameter is initialized
const greetOpt = (name: string, id?: number) => {
    if (id) {
        return `Welcome, ${name} and your id is ${id}`
    } else {
        return `Welcome, ${name}`
    }
}

console.log(greet('Leo', 3))
console.log(greetOpt('Leo'))