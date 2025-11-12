function criaCartao(categoria, pergunta, resposta)
    let container=document.getElementByld('container')
    let cartao=document.createElement('Article')
    cartao.classname='cartao'
    cartao.innerHTML=`
    <div class="cartao_conteudo">
    <h3>${categoria}</h3>
<div class="cartao_conteudo_pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
<p>${resposta}</p>
</div>
</div>
let respostaEstaVisivel=false

function viracartao(){
respostaEstaVisivel=!respostaEstaVisivel
cartao.classlist.toggle('active',respostaEstaVisivel)
}
cartao.addEventListener('click',viraCartao)
container.appendChild(cartao)
}