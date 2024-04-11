const artigos=[
    {
        img:'https://www.coca-cola.com.br/images/licensed/shoes-desktop.png',
        titulo:'Chegaram os Licenciados Coca-Cola!',
        subtitulo:'',
        texto:'Leve o estilo Coca-Cola para a sua casa. Mostre que está sempre aberto para o melhor.',
    },
]
const header=document.querySelector('header')
const titulo=document.createElement('h1')
const texto=document.createElement('p')
header.append(titulo)
titulo.innerHTML=artigos[0].titulo
header.style.backgroundImage="url("+artigos[0].img+")"
header.append(texto)
texto.innerHTML=artigos[0].texto