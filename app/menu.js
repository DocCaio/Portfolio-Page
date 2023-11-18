const botao = document.querySelector('.menu__button')
botao.addEventListener('click', funcaoCallback)

function funcaoCallback() {
    const menuNav = document.querySelector('.menu__nav')
    menuNav.classList.toggle('nav-active')
  
}

 