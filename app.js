function handleEvent(event) {
  alert(`Evento: ${event.type}`);
}

function handleLoad() {
  alert("Página carregada!");
}

document.getElementById("btnClick").onclick = handleEvent;
document.getElementById("inputChange").onchange = handleEvent;
document.getElementById("btnMouseOver").onmouseover = handleEvent;
document.getElementById("btnMouseOut").onmouseout = handleEvent;
document.getElementById("inputKeyDown").onkeydown = handleEvent;

// Sorteio

const nomes = {
  1: "Harry Potter",
  2: "Hermione Granger",
  3: "Ron Weasley",
  4: "Albus Dumbledore",
  5: "Severus Snape",
  6: "Luna Lovegood",
  7: "Draco Malfoy",
  8: "Sirius Black",
  9: "Ginny Weasley"

};

document.getElementById("sortear").onclick = function() {
  const numeroSorteado = Math.floor(Math.random() * 9) + 1; // Sorteia um número entre 1 e 9
  const nome = nomes[numeroSorteado];
  document.getElementById("resultado").innerHTML = `Número sorteado: ${numeroSorteado}<br>Nome: ${nome}`;
};