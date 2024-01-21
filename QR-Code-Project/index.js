import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'node:fs';

const questions = [
  {
    type: 'input',
    name: 'url',
    message: "Type in your URL:",
  }
];

inquirer.prompt(questions).then((answers) => {
    var qr_svg = qr.image(answers.url, { type: 'png' });;
    qr_svg.pipe(fs.createWriteStream('qr-code.png'));
    writeFile('URL.txt', answers.url, (err) => {
        if (err) throw err;
        console.log('Your QR code has been successfully generated!');
    }); 
});