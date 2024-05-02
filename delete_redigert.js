const fs = require('fs');
const path = require('path');

// Hjelpefunksjon for å slette filer basert på en tilstand
const deleteFileIf = (fullPath, condition) => {
    if (condition) {
        fs.unlink(fullPath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log(`Deleted: ${fullPath}`);
            }
        });
    }
};

const deleteEditedFiles = (dirPath) => {
    fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        entries.forEach(entry => {
            const fullPath = path.join(dirPath, entry.name);
            if (entry.isDirectory()) {
                deleteEditedFiles(fullPath); // Rekursivt kall for undermapper
            } else {
                // Sletter filer basert på forskjellige kriterier
                deleteFileIf(fullPath, entry.name.includes("-redigert"));
                deleteFileIf(fullPath, entry.name.includes(".HEIC"));
                deleteFileIf(fullPath, entry.name.includes(".MP4"));
                deleteFileIf(fullPath, entry.name.includes("-COLLAGE."));
                deleteFileIf(fullPath, entry.name.includes("-ANIMATION."));
            }
        });
    });
};

// Sjekker om mappesti er oppgitt som kommandolinjeparameter
if (process.argv.length <= 2) {
    console.error('Please provide the path to the directory as an argument.');
    process.exit(1);
}

const directoryPath = process.argv[2];
deleteEditedFiles(directoryPath);