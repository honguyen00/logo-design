const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(text = "", color = "", backgroundcolor = "") {
        super(text, color, backgroundcolor)
    }

    render() {
        return (`<polygon points="150, 0 300, 200 0, 200" fill="${this.backgroundcolor}" />`)
    }

    renderText() {
        return (`<text x="153" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`)
    }
}

module.exports = Triangle;