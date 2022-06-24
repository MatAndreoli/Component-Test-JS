const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
let Calculator;

let result = 0;
Given('que eu tenha uma calculadora', () => {
  Calculator = require('../../../src/lib/Calculator');
});

When('eu chamo o método {string} com {string} e {string}', (method, n1, n2) => {
  switch (method) {
    case 'soma':
      result = Calculator.soma(parseInt(n1), parseInt(n2));
      break;
    case 'subtracao':
      result = Calculator.subtracao(parseInt(n1), parseInt(n2));
      break;
    case 'multiplicacao':
      result = Calculator.multiplicacao(parseInt(n1), parseInt(n2));
      break;
    case 'divisao':
      result = Calculator.divisao(parseInt(n1), parseInt(n2));
      break;
  }
});

Then('deve retornar {string}', (res) => {
  assert.equal(parseInt(res), result);
});
