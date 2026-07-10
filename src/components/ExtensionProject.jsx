import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ExtensionProject = () => {
  return (
    <main>
      <section>
        <h2>Projeto de Extensão</h2>
        <section className="small-margin medium-width-p">
          <img
            className="image1"
            src="extension-project.jpeg"
            alt="Voluntária segurando um cachorro em evento da Caramelos do Vale"
          />
          <p className="xsmall-margin">
            Você é aluno da UFRGS, ama os animais e ainda precisa de horas de
            extensão? Desde 2025 somos um Projeto de Extensão dentro da UFRGS,
            com atuação voluntária em diversas áreas, como eventos, mídias ou
            mutirões no Recanto.
          </p>
          <p className="xsmall-margin">
            O edital do Projeto de Extensão Caramelos do Vale está aberto e
            pode ser acessado no link abaixo! Aqui, você transforma horas de
            extensão em impacto real na vida de cãezinhos resgatados.
          </p>
          <a
            className="button-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1uekoDDHTqebnNS1XcK10FWSyfmLX_raTOX4brUfPzGY/edit?tab=t.0"
          >
            Acesse o edital
            <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
          </a>
        </section>
      </section>
    </main>
  );
};

export default ExtensionProject;
