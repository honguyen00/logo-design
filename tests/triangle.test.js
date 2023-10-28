const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    test('should return a triangle with no color and text input', () => {
        const triangle = new Triangle();
        const result1 = `<polygon points="150, 0 300, 200 0, 200" fill="" />`;
        const result2 = `<text x="153" y="150" font-size="60" text-anchor="middle" fill=""></text>`
        expect(triangle.render()).toEqual(result1);
        expect(triangle.renderText()).toEqual(result2);
    });
    test('should return a triangle with background color', () => {
        const triangle = new Triangle();
        triangle.setBackgroundColor('green');
        const result = `<polygon points="150, 0 300, 200 0, 200" fill="green" />`
        expect(triangle.render()).toEqual(result);
    });
    test('should return a text with font color', () => {
        const triangle = new Triangle();
        triangle.setText('abc');
        triangle.setTextColor('red');
        const result = (`<text x="153" y="150" font-size="60" text-anchor="middle" fill="red">ABC</text>`);
        expect(triangle.renderText()).toEqual(result);
    });
})