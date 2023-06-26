

window.addEventListener("DOMContentLoaded", (event) => {
    const cabecera = document.querySelector('.contenido-hero h1');
    console.log(cabecera);
    console.log(cabecera.innerText); //Muestra el texto si no esta hidden
    console.log(cabecera.textContent); //Muestra el text siempre
    console.log(cabecera.innerHTML); // muestra el HTML
    document.querySelector('.contenido-hero h1').textContent = 'He cambiado el texto mediante script';
  });