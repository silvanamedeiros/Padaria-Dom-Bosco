  //hamburgue//hamburgerButton
 //aki add em evento de sescutar o click do mouse sobre o ícone de hamburguer
hamburgerButton.addEventListener("click", function() {
   mobileMenu.classList.add("flex");
   //criamos uma função q ao ouvir o click do mouse, ele add uma class (flex), q está fazendo nossa caixa (div) visível, ou seja, ficará visível para tds.
});
//criamos uma função q ao ouvir o click do mouse, ele REMOVE uma class, q está fazendo nossa caixa (div) desaparecer, ou seja, ficará invisível.
closeButton.addEventListener("click", function(){
mobileMenu.classList.remove("flex");
})