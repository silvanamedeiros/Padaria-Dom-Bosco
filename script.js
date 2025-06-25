window.revelar = ScrollReveal({reset:true});
 
 revelar.reveal('.efeito-img-topo', {  //estou chamando a classe a qual eu quero atribuir o efeito de scrollReveal
   duration: 2000,
   distance: '70px',
    origin: 'botom'
 });

 revelar.reveal('.clientes-efeito', {
   duration: 2000,
   deistance: '120px',
    origin: 'right'
 });

 revelar.reveal('.principais-produtos', {
   duration: 2000,
   deistance: '120px',
   origin: 'left'
 });
 
 revelar.reveal('.sobre-nos', {
   duration: 2000,
   deistance: '120px',
   origin: 'top'
 });


 
 revelar.reveal('.contatos', {
   duration: 2000,
   deistance: '120px',
   origin: 'botom'
 });

 
 
 //aki add em evento de sescutar o click do mouse sobre o ícone de hamburguer
hamburgerButton.addEventListener("click", function() {
   mobileMenu.classList.add("flex");
   //criamos uma função q ao ouvir o click do mouse, ele add uma class (flex), q está fazendo nossa caixa (div) visível, ou seja, ficará visível para tds.
});
//criamos uma função q ao ouvir o click do mouse, ele REMOVE uma class, q está fazendo nossa caixa (div) desaparecer, ou seja, ficará invisível.
closeButton.addEventListener("click", function(){
mobileMenu.classList.remove("flex");
});

