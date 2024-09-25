/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Carrega o conteúdo HTML
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Teste da lista de tarefas', () => {


  beforeEach(() => {
    // Define o documento com o conteúdo HTML
    document.documentElement.innerHTML = html.toString();

    // Carrega o script JS (app.js) no ambiente de teste
    require('./app.js');
  });

  const { textoReverso, soma, quadrado } = require('./app');

  test('Deve inverter o texto corretamente', () => {
    const input = 'olá';
    const textoEsperado = 'álo';
    expect(textoReverso(input)).toBe(textoEsperado);
  });

  test('Deve somar dois números corretamente', () => {
    const num1 = 5;
    const num2 = 3;
    const somaEsperada = 8;
    expect(soma(num1, num2)).toBe(somaEsperada);
  });

  test('Deve elevar o número ao quadrado corretamente', () => {
    const num = 4;
    const resultadoEsperado = 16;
    expect(quadrado(num)).toBe(resultadoEsperado);
  });
});
