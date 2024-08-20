const figlet = require('figlet');

// Function to generate a random word
function getRandomWord() {
    const words = ["BUILD", "STUFF", "CODE", "CREATE", "INNOVATE", "DEVELOP"];
    return words[Math.floor(Math.random() * words.length)];
}

// Function to print a random word in ASCII art font
function printRandomWord() {
    const word = getRandomWord();
    figlet(word, (err, data) => {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log('\x1b[34m%s\x1b[0m', data);
    });
}

// Function to continuously print random words
function startMotor(interval = 2000) {
    setInterval(printRandomWord, interval);
}

// Start the motor with a 2-second interval
startMotor();

// console.log('\x1b[34m%s\x1b[0m', `
//     ██████╗ ██╗   ██╗██╗██╗     ██████╗     ███████╗████████╗██╗   ██╗███████╗███████╗
//     ██╔══██╗██║   ██║██║██║     ██╔══██╗    ██╔════╝╚══██╔══╝██║   ██║██╔════╝██╔════╝
//     ██████╔╝██║   ██║██║██║     ██████╔╝    ███████╗   ██║   ██║   ██║█████╗  ███████╗
//     ██╔═══╝ ██║   ██║██║██║     ██╔═══╝     ╚════██║   ██║   ██║   ██║██╔══╝  ╚════██║
//     ██║     ╚██████╔╝██║███████╗██║         ███████║   ██║   ╚██████╔╝███████╗███████║
//     ╚═╝      ╚═════╝ ╚═╝╚══════╝╚═╝         ╚══════╝   ╚═╝    ╚═════╝ ╚══════╝╚══════╝
//     `);

// console.log('\x1b[33m%s\x1b[0m', `
// ██╗    ██╗███████╗██╗██████╗ ██████╗ 
// ██║    ██║██╔════╝██║██╔══██╗██╔══██╗
// ██║ █╗ ██║█████╗  ██║██████╔╝██║  ██║
// ██║███╗██║██╔══╝  ██║██╔══██╗██║  ██║
// ╚███╔███╔╝███████╗██║██║  ██║██████╔╝     
//  ╚══╝╚══╝ ╚══════╝╚═╝╚═╝  ╚═╝╚═════╝      
// `);