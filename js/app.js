
// Obtener todos los elementos con la clase 'buttonsHover'
const buttons = Array.from(document.getElementsByClassName('buttonsHover'));

// Agregar el evento 'mouseover' y 'mouseout' a cada botón utilizando forEach
buttons.forEach(function(button) {
const img = button.getElementsByTagName('img')[0];
const src = img.getAttribute('src');
const hoverSrc = src.replace('_verde.png', '_amarillo.png');

button.addEventListener('mouseover', function() {
img.setAttribute('src', hoverSrc);
button.classList.add("buttonTabActive"); // agrega clase para el botón en estado activo
});

button.addEventListener('mouseout', function() {
img.setAttribute('src', src);
button.classList.remove("buttonTabActive"); // quita clase para el botón en estado activo
});
});




let tabsButtons = document.querySelectorAll("#nav-tab > div");
// console.log(tabsButtons);
let tabsButtonsImage = document.querySelectorAll("#nav-tab > div > div > img");
document
 .getElementById("nav-tab")
 .addEventListener("click", function changeTabButtonImage(e) {
   let activeTabButton = document.querySelector("#nav-tab > div.active");
   let activeImage = activeTabButton.dataset.image;
   tabsButtonsImage.forEach(function (image) {
     image.src = image.parentNode.parentNode.dataset.image.replace(
       "_amarillo",
       "_verde"
     );
   });
   activeTabButton.querySelector("img").src = activeImage;

   // Cambiar el color de fondo y color de texto solo en el div activo
   tabsButtons.forEach(function (button) {
     if (button === activeTabButton) {
       button.querySelector("div").classList.add("buttonTabActive"); // agrega clase para el botón en estado activo
     } else {
       button.querySelector("div").classList.remove("buttonTabActive"); // elimina clase para el botón en estado activo
     }
   });
 });

