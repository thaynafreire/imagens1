"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')

const imagens = [
    'url("./img/ceu-dia.jpg")',
    'url("./img/ceu-noite.webp")',
    'url("./img/ceu-tarde.jpg")'
]

let indiceAtual = 0

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length
    document.documentElement.style.setProperty('--imagem-fundo', imagens[indiceAtual])
}

botaoTrocarImagem.addEventListener('click', trocarImagem)