const linhas = parseInt(prompt('Número de linhas:'));
let linha = '';

for (let i = 1; i <= linhas; i++) {
  linha += '*';
  console.log(linha);
}