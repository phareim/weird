const { hipsum } = require('./lorem-hipsum.js');

async function countChars(numberOfSentences = 3) {
    const text = await hipsum(numberOfSentences);
    return text.length;
}

module.exports = { countChars };

async function main() {
    const result = await countChars(5);
    console.log(result);
}

main();