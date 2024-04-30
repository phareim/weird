const fs = require('fs');
const path = require('path');

const deleteJsonFiles = (dirPath) => {
	fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		entries.forEach(entry => {
			const fullPath = path.join(dirPath, entry.name);
			if (entry.isDirectory()) {
				// Rekursivt kall hvis det er en mappe
				deleteJsonFiles(fullPath);
			} else {
				// Sjekk om filen er en JSON-fil
				if (path.extname(fullPath) === '.json') {
					fs.unlink(fullPath, err => {
						if (err) {
							console.error('Error deleting file:', err);
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
deleteJsonFiles(directoryPath);
