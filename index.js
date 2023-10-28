const inquirer = require("inquirer");
var validateColor = require("validate-color").default;
const { join } = require('path');
const { writeFile } = require('fs/promises');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require('./lib/square');

const logoString = (input) => {
    if (isEmpty(input) && input.trim().length <= 3) {
        return true;
    } 
    else {
        return 'Invalid input. Please try again!'
    }
}

function isColor(input) {
    let test1 = validateColor(input.toLowerCase());
    let Reg_Exp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    let test2 = Reg_Exp.test(input.toUpperCase());
    if (test1 || test2 == true) {
        return true;
    } else return false;
}

const colorString = (input) => {
    if (isEmpty(input) && isColor(input)) {
        return true;
    } else {
        return 'Invalid input. Must be a color keyword or a hexadecimal number. Please try again!'
    }
}


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter maximum 3 characters for you logo design: ',
            name: 'logo',
            validate: logoString
        }, 
        {
            type: 'input',
            message: 'Please enter text color for your characters (color keyword or hexadecimal number): ',
            name: 'textcolor',
            validate: colorString
        },
        {
            type: 'list',
            message: 'In what shape do you want your logo to be: ',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'Please enter background color for your logo (color keyword or hexadecimal number): ',
            name: 'backgroundcolor',
            validate: colorString
        }
    ])
    .then(({ logo, textcolor, shape, backgroundcolor }) => {
        let newLogo;
        switch(shape) {
            case 'Circle': newLogo = new Circle(); break;
            case 'Triangle': newLogo = new Triangle(); break;
            case 'Square': newLogo = new Square(); break;
            default: break;
        }
        newLogo.setText(logo.toUpperCase());
        newLogo.setBackgroundColor(backgroundcolor.toLowerCase());
        newLogo.setTextColor(textcolor.toLowerCase());
        return writeFile(
            join(__dirname, '.', 'output', 'Logo.svg'),
            createSvg(newLogo.render(), newLogo.renderText())
          );
    })

function createSvg(shape, text) {
    let svg = (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${text}
</svg>`)
    return svg;
}
const isEmpty = (input) => {
    if (input == '' || !input) {
        return false;
    }
    return true;
}
