const Shapes = require('../lib/shapes.js');

describe('Shapes', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shapes();
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render).toThrow(err);
  });
});
