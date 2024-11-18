import fs from 'fs';
import 'dotenv/config';

const fileName = process.env.FILENAME;

fs.writeFile(fileName, 'Some text', (err) => {
    if (err) {
        console.error("Error creating file:", err);
        return;
    }
    console.log(`The file "${fileName}" has been created successfully.`);

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log(data);
    });
});