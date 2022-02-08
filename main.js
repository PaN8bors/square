import input from 'input';

function square(size) {
    for (let i = 1; i <= size; i += 1) {
        console.log('X'.repeat(size));
    }
}

async function main() {
    const size = await input.text('Enter a size');
    square(size);
}

main();