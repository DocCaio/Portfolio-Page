const flying = document.querySelector("#flying-img");
const texto = "Halo! Saya Gunawan.";
const elementoMaquinaEscrever = document.querySelector(".typewriter");

function imgFlying() {
    let distance = 20;
    let duration = 2000;

    
    imgFlying.style.transition = `transform ${duration}ms ease-in-out`;
    imgFlying.style.transform = `translateY(-${distance}px)`;

  setTimeout(() => {
    imgFlying.style.transition = `transform ${duration}ms ease-in-out`;
    imgFlying.style.transform = `translateY(${distance}px)`;

    setTimeout(() => {
      animarFlutuacao();
    }, duration);
  }, duration);
}

let indice = 0

function escreverTexto() {
  if (indice < texto.length) {
    elementoMaquinaEscrever.textContent += texto.charAt(indice);
    indice++;
    setTimeout(escreverTexto, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)
  }
}


window.addEventListener("load", animarFlutuacao);
window.addEventListener("load", escreverTexto);
