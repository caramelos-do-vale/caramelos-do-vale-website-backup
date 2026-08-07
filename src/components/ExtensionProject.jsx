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
            extensão?
          </p>
          <p className="xsmall-margin">
            Desde 2025 somos um Projeto de Extensão dentro da UFRGS, com atuação
            voluntária em diversas áreas, como eventos, mídias ou apoio geral.
          </p>

          <section>
            <h3>Demandas de eventos:</h3>

            <p>
              - Ajudar na organização dos cafés mensais e outros eventos dentro
              do Campus do Vale.
            </p>
            <p>
              - Ajudar na organização de eventos fora do Campus do Vale ou fora
              da UFRGS.
            </p>
            <p>
              - Preparar ou doar comidas para os cafés mensais, como bolo,
              docinhos, salgados, entre outros.
            </p>
          </section>

          <section>
            <h3>Demandas de mídias:</h3>
            <p>
              - Criação de posts para redes sociais conforme demanda e
              orientação da coordenação do projeto.
            </p>
            <p>- Criação de mídia impressa.</p>
            <p>- Criação de vídeos.</p>
            <p>
              - Mutirões para captação de conteúdo (foto/vídeo) dos cães em lar
              temporário.
            </p>
          </section>

          <p>
            Além disso, você pode ajudar na organização do{" "}
            <a href="/sebo">Sebo dos Caramelos.</a>
          </p>

          <p>
            O edital do Projeto de Extensão Caramelos do Vale está aberto e pode
            ser acessado no link abaixo! Aqui, você transforma horas de extensão
            em impacto real na vida de cãezinhos resgatados.
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
