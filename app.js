function textoReverso(text) {
  return text.split('').reverse().join('');
}

function soma(a, b) {
  return a + b;
}

function quadrado(num) {
  return num * num;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button#reverter-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const textoRevertido = textoReverso(inputText);
    document.getElementById('revertido-text').textContent = textoRevertido;
  });

  document.getElementById('soma-btn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const somado = soma(num1, num2);
    document.getElementById('soma-result').textContent = somado;
  });

  document.getElementById('quadrado-btn').addEventListener('click', () => {
    const numero = parseFloat(document.getElementById('quadrado-input').value);
    const aoQuadrado = quadrado(numero);
    document.getElementById('quadrado-result').textContent = aoQuadrado;
  });
});

module.exports = { textoReverso, soma, quadrado };
