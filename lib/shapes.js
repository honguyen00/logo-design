class Shapes {
    constructor(text, color, backgroundcolor) {
        this.text = text;
        this.color = color;
        this.backgroundcolor = backgroundcolor;
    }
    
    setText(text) {
        this.text = text.toUpperCase();
    }

    setTextColor(color) {
        this.color = color;
    }

    setBackgroundColor(backgroundcolor) {
        this.backgroundcolor = backgroundcolor;
    }

    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;