const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(text = "", color = "", backgroundcolor = "") {
        super(text, color, backgroundcolor)
    }
    render() {
        return (`<polygon points="50, 0 250,0 250, 200 50, 200" fill="${this.backgroundcolor}" />`)
    }

    renderText() {
        return (`<text x="153" y="123" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`)
    }
}

module.exports = Square;