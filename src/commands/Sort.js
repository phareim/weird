const { execSync } = require('child_process'); const path = require('path'); function registerCommand(program) { program.command('Sort').description('Run the Sort script').option('-l, --length <number>', 'Length of array', '5').option('-m, --max <number>', 'Max size of elements', '10').action((options) => { try { const result = execSync(`node ${path.join(__dirname, '../Sort.js')} ${options.length} ${options.max}`, { encoding: 'utf-8' }); console.log(result); } catch (error) { console.error('Error running Sort:', error.message); } }); } module.exports = { registerCommand };
