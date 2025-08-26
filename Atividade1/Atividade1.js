const numeroSecreto = Math.floor(Math.random() * 20) + 1;

let acertou = false;

while (acertou == false) {
  // Pede o palpite do usuário
  let palpite = prompt("Adivinhe o número secreto (entre 1 e 20):");
  palpite = Number(palpite);

  if (palpite === numeroSecreto) {
    alert("Parabéns! Você acertou!");
    acertou = true;
  } else if (palpite > numeroSecreto) {
    alert("Tente um número menor.");
  } else if (palpite < numeroSecreto) {
    alert("Tente um número maior.");
  } else {
    alert("Por favor, digite um número válido.");
  }
}