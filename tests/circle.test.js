const Circle = require('../lib/circle');

describe('Circle', () => {
    test('should return a circle with no color and text input', () => {
        const circle = new Circle();
        const result1 = `<circle cx="150" cy="100" r="100" fill="" />`;
        const result2 = `<text x="153" y="123" font-size="60" text-anchor="middle" fill=""></text>`
        expect(circle.render()).toEqual(result1);
        expect(circle.renderText()).toEqual(result2);
    });
    test('should return a circle with background color', () => {
        const circle = new Circle();
        circle.setBackgroundColor('blue');
        const result = `<circle cx="150" cy="100" r="100" fill="blue" />`
        expect(circle.render()).toEqual(result);
    });
    test('should return a text with font color', () => {
        const circle = new Circle();
        circle.setText('upv');
        circle.setTextColor('#fff');
        const result = `<text x="153" y="123" font-size="60" text-anchor="middle" fill="#fff">UPV</text>`;
        expect(circle.renderText()).toEqual(result);
    });
})