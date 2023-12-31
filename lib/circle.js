const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(text = "", color = "", backgroundcolor = "") {
        super(text, color, backgroundcolor)
    }
    // circle shape
    render() {
        return (`<circle cx="150" cy="100" r="100" fill="${this.backgroundcolor}" />`)
    }
    // inner text
    renderText() {
        return (`<text x="153" y="123" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`)
    }
}

module.exports = Circle;