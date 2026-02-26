const readline = require('readline');
const { checkMinimStep } = require('./logic');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function getValidNumber(variableName) {
    while (true) {
        const input = await question(`Введите значение для ${variableName}: `);
        
        const n = Number(input);
        
        if (input.trim() !== "" && Number.isInteger(n) && n >= 0) {
            return n;
        } else {
            console.log(`Упс, '${input}' не является целым числом.`);
        }
    }
}

async function main() {

    // Use await, or we can use callback hell... 
    const a = await getValidNumber("a");
    const b = await getValidNumber("b");
    const c = await getValidNumber("c");

    const result = checkMinimStep(a, b, c);
    console.log(`> Ответ: ${result}`);

    //Now we here again... 
    setImmediate(main);
}

main();
