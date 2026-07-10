import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sebo = () => {
  return (
    <main>
      <section>
        <h2>Sebo da Caramelos</h2>
        <section className="small-margin medium-width-p">
          <img
            className="image1"
            src="sebo.jpeg"
            alt="Cachorro com óculos ao lado de uma pilha de livros"
          />
          <p className="xsmall-margin">
            O Sebo da Caramelos é uma iniciativa da Caramelos do Vale para
            arrecadar dinheiro para os cães resgatados, afinal, ler e ajudar os
            animais nunca é demais. 100% dos valores arrecadados com as vendas
            são destinados aos cães que estão sob cuidados da associação.
          </p>
          <p className="xsmall-margin">
            Pelo Instagram do Sebo (@sebodacaramelos) você fica por dentro de
            todos os livros disponíveis, pode comprar e retirar no Campus do
            Vale da UFRGS (ou combinar entrega em Porto Alegre).
          </p>
          <p className="xsmall-margin">
            Também recebemos doações! Quer desapegar de livros e ainda ajudar
            os animais? No Sebo da Caramelos, todos os tipos, tamanhos e idiomas
            de livros são muito bem-vindos. É como DNA de vira-lata: quanto mais
            variedade, melhor! Entre em contato com a página do Instagram que
            nossas voluntárias irão passar as instruções para doação.
          </p>
          <p className="xsmall-margin">
            Além disso, todo mês fazemos uma feira do livro presencial no Campus
            do Vale da UFRGS. Fique ligado nas nossas redes para saber as datas
            das próximas feiras!
          </p>
          <a
            className="button-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sebodacaramelos"
          >
            Visite o Instagram do Sebo
            <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
          </a>
        </section>
      </section>
    </main>
  );
};

export default Sebo;
