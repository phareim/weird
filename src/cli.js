#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');

program.version('0.0.1');

// Dynamically load commands from the commands directory
const commandsDir = path.join(__dirname, 'commands');
fs.readdirSync(commandsDir)
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const commandModule = require(path.join(commandsDir, file));
    if (typeof commandModule.registerCommand === 'function') {
      commandModule.registerCommand(program);
    }
  });

// Add some default commands
program
  .command('list')
  .description('List all available weird commands')
  .action(() => {
    console.log('Available weird commands:');
    fs.readdirSync(commandsDir)
      .filter(file => file.endsWith('.js'))
      .forEach(file => {
        const name = file.replace('.js', '');
        console.log(`- ${name}`);
      });
  });

program.parse(process.argv); 