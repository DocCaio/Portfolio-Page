function escreverTexto() {
    if (indice < texto.length) {
      elementoMaquinaEscrever.textContent += texto.charAt(indice);
      indice++;
      setTimeout(escreverTexto, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)
    }
  }
  
  // Iniciar a animação quando a página carregar
  window.addEventListener("load", animarFlutuacao);
  // Iniciar a animação quando a página carregar
  window.addEventListener("load", escreverTexto);

