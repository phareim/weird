const fs = require('fs');
const path = require('path');

const deleteEditedFiles = (dirPath) => {
	fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		entries.forEach(entry => {
			const fullPath = path.join(dirPath, entry.name);
			if (entry.isDirectory()) {
				// Rekursivt kall for å utforske undermapper
				deleteEditedFiles(fullPath);
			} else {
				// Sjekk om filnavnet inneholder "-redigert"
				if (entry.name.includes("-redigert")) {
					fs.unlink(fullPath, err => {
						if (err) {
							console.error('Error deleting file (-redigert):', err);
						} else {
							console.log(`Deleted: ${fullPath}`);
						}
					});
				}
				if (entry.name.includes("(1).")) {
					fs.unlink(fullPath, err => {
						if (err) {
							console.error('Error deleting file (1):', err);
						} else {
							console.log(`Deleted: ${fullPath}`);
						}
					});
				}
			}
		});
	});
};

// Sjekk om en mappesti er oppgitt som en kommandolinjeparameter
if (process.argv.length <= 2) {
	console.error('Please provide the path to the directory as an argument.');
	process.exit(1);
}

const directoryPath = process.argv[2];
deleteEditedFiles(directoryPath);
