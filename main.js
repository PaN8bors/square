import input from 'input';

function square(size) {
    const char = "X"
    for (let i = 1; i <= size; i += 1) {
        console.log(char.repeat(size));
    }
}

async function main() {
    const size = await input.text('Enter a size');
    square(size);
}

main();