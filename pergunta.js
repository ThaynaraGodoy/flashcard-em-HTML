:
    backface-visibility: hidden;
}

.cartao__conteudo p {
    padding: 2rem;
    margin-top: 4rem;
}

/* ======= PERGUNTA E RESPOSTA ======= */
.cartao__conteudo__pergunta p {
    color: var(--text-color);
    font-weight: 500;
}

.cartao__conteudo__resposta p {
    color: var(--card-back-color);
    font-weight: 700;
}

/* ======= EFEITO FLIP ======= */
.cartao:hover .cartao__conteudo {
    transform: rotateY(180deg);
}

.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    backface-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

.cartao__conteudo__resposta {
    transform: rotateY(180deg);
}

/* ======= RODAPÉ ======= */
footer {
    background-color: black;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
}

footer p {
    text-align: center;
    font-size: 0.6rem;
    margin-top: 0.5rem;
}

/* ======= RESPONSIVIDADE ======= */
@media (max-width: 560px) {
    body {
        background: url(