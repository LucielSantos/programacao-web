$('.bodyHeader').html('HOME')
$('.bodyContent').load('homePage.html')

$('#homeButton').click(function () {
   $('.bodyHeader').html('HOME')
   $('.bodyContent').load('homePage.html')
})

$('#aboutButton').click(function () {
   $('.bodyHeader').html('SOBRE')
   $('.bodyContent').load('aboutPage.html')
})

$('#productsButton').click(function () {
   $('.bodyHeader').html('PRODUTOS E SERVIÇOS')
   $('.bodyContent').load('productsPage.html')
   addClass('#productsButton')
})

$('#formButton').click(function () {
   $('.bodyHeader').html('FORMULARIO DE CONTATO')
   $('.bodyContent').load('formPage.html')
})