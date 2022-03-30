const assert = require('assert');
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
      assert.strictEqual(typeof {
      circle
    }, 'object');
    assert.strictEqual(Object.entries(circle(2)).length, 3);
    assert.strictEqual(circle(''), undefined);
    assert.strictEqual(circle(2).circumference, 12.56);
    assert.strictEqual(parseFloat((circle(3).area.toPrecision(4))), 28.26);
    assert.strictEqual(circle(3).circumference, 18.84);
    assert.strictEqual(circle(3).radius, 3);
  });
});
