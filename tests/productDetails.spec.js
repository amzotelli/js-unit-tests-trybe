const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    assert.strictEqual(Array.isArray(productDetails('a', 'b')), true);
    assert.strictEqual(productDetails('a', 'b').length, 2);
    productDetails('a', 'b').forEach((param) => {
      assert.strictEqual(typeof param, 'object');
    });
    assert.strictEqual(productDetails('a', 'b')[0] !== productDetails('a', 'b')[1], true);
    productDetails('a', 'b').forEach((param) => {
      assert.strictEqual(param.details.productId.slice(-3), '123');
    });
  });
});
