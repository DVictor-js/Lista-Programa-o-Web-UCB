const jogador = prompt('Pedra, papel ou tesoura?').toLowerCase();
const opcoes = ['pedra', 'papel', 'tesoura'];
const computador = opcoes[Math.floor(Math.random() * 3)];

console.log('Você escolheu:', jogador);
console.log('Computador escolheu:', computador);

if (jogador === computador) {
  console.log('Empate!');
} else if (
  (jogador === 'pedra' && computador === 'tesoura') ||
  (jogador === 'papel' && computador === 'pedra') ||
  (jogador === 'tesoura' && computador === 'papel')
) {
  console.log('Você venceu!');
} else {
  console.log('Computador venceu!');
}