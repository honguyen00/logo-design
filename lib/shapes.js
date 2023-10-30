class Shapes {
    constructor(text, color, backgroundcolor) {
        this.text = text;
        this.color = color;
        this.backgroundcolor = backgroundcolor;
    }
    // set text
    setText(text) {
        this.text = text.toUpperCase();
    }
    // set text color 
    setTextColor(color) {
        this.color = color;
    }
    // set background color
    setBackgroundColor(backgroundcolor) {
        this.backgroundcolor = backgroundcolor;
    }
    // throw error when child doesn't have render method
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;