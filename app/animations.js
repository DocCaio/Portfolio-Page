const flying = document.querySelector("#flying-img");

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


window.addEventListener("load", animarFlutuacao);
