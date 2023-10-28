class Shapes {
    setText(text) {
        this.text = text;
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