const {
  AssertionError
} = require('assert');
const assert = require('assert');
const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    assert.strictEqual(getCharacter(), undefined);
    assert.deepStrictEqual(getCharacter('Arya'), {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    });
    assert.deepStrictEqual(getCharacter('Brienne'), {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
    });
    assert.deepStrictEqual(getCharacter('Melissandre'), {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
    });
    assert.deepStrictEqual(getCharacter('ARYA'), {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    });
    assert.strictEqual(getCharacter('Poseidon'), undefined);
  });
});
