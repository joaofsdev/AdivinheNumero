const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Numero aleatorio entre 1 e 100
// o math serve para fazer operacoes matematicas como arredondar, gerar numeros aleatorios etc

let tentativas = 0;
const maxTentativas = 5;

function Adivinhar() {
  const tentativa = parseInt(document.getElementById("numeroTentativa").value); // Pega o valor do input e converte para inteiro
  const res = document.getElementById("resultado"); // Pega o elemento onde sera exibido o resultado

  if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
    // Verifica se o valor e um numero valido
    res.textContent = "Por favor, digite um numero valido entre 1 e 100.";
    return;
  }

  tentativas++;
  document.getElementById("contadorTentativas").textContent = tentativas;

  if (tentativa === numeroSecreto) {
    res.textContent = `Parabens! Voce adivinhou o numero secreto: ${numeroSecreto}`;
    document.getElementById("btnAdivinhar").hidden = true;
    document.getElementById("btnRecomecar").hidden = false;
  } else if (tentativas >= maxTentativas) {
    res.textContent = `Voce perdeu! O numero secreto era: ${numeroSecreto}`;
    document.getElementById("btnAdivinhar").hidden = true;
    document.getElementById("btnRecomecar").hidden = false;
  } else if (tentativa < numeroSecreto) {
    res.textContent = "Tente um numero maior!";
  } else if (tentativa > numeroSecreto) {
    res.textContent = "Tente um numero menor!";
  }
}

function Recomecar() {
    location.reload(); // Recarrega a pagina para reiniciar o jogo
}
