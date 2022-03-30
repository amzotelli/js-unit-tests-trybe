const assert = require('assert');
const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    assert.strictEqual(numbers([1, 2, 3, 4, 5]), true);
    assert.strictEqual(numbers([1, 2, '3', 4, 5]), false);
    assert.strictEqual(numbers([1, 'a', 3]), false);
    assert.strictEqual(numbers([' ']), false);
  });
});
