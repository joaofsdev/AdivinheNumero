const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Numero aleatorio entre 1 e 100
// o math serve para fazer operacoes matematicas como arredondar, gerar numeros aleatorios etc

function Adivinhar() {
  const tentativa = parseInt(document.getElementById("numeroTentativa").value); // Pega o valor do input e converte para inteiro
  const res = document.getElementById("resultado"); // Pega o elemento onde sera exibido o resultado

  if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
    // Verifica se o valor e um numero valido
    res.textContent = "Por favor, digite um numero valido entre 1 e 100.";
    return;
  } else {
    if (tentativa === numeroSecreto) {
      res.textContent = `Parabens! Voce adivinhou o numero secreto: ${numeroSecreto}`;
    } else if (tentativa < numeroSecreto) {
      res.textContent = "Tente um numero maior!";
    } else if (tentativa > numeroSecreto) {
      res.textContent = "Tente um numero menor!";
    }
  }
}
