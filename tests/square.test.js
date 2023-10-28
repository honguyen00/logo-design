const Square = require('../lib/square');

describe('Square', () => {
    test('should return a square with no color and text input', () => {
        const square = new Square();
        const result1 = `<polygon points="50, 0 250,0 250, 200 50, 200" fill="" />`;
        const result2 = `<text x="153" y="123" font-size="60" text-anchor="middle" fill=""></text>`
        expect(square.render()).toEqual(result1);
        expect(square.renderText()).toEqual(result2);
    });
    test('should return a square with background color', () => {
        const square = new Square();
        square.setBackgroundColor('#545320');
        const result = `<polygon points="50, 0 250,0 250, 200 50, 200" fill="#545320" />`
        expect(square.render()).toEqual(result);
    });
    test('should return a text with font color', () => {
        const square = new Square();
        square.setText('abc');
        square.setTextColor('#200fff');
        const result = (`<text x="153" y="123" font-size="60" text-anchor="middle" fill="#200fff">ABC</text>`);
        expect(square.renderText()).toEqual(result);
    });
})