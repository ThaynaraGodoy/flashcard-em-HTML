function criaCartao(categoria, pergunta, resposta) {
    // Seleciona o container onde os cartões serão adicionados
    const container = document.getElementById('container');

    // Cria o elemento do cartão
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Estrutura interna do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Estado do cartão (virado ou não)
    let respostaEstaVisivel = false;

    // Função para virar o cartão ao clicar
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Evento de clique para virar o cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}
