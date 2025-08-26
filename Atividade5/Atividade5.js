const n = parseInt(prompt('Quantidade de numero:'));
let soma = 0;
let numeros = '';

for (let i = 1; i <= n; i++) {
  numeros += '1';
  console.log(numeros);
  soma += parseInt(numeros);
}

console.log(soma);