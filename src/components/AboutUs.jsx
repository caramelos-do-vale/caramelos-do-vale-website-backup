import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSuitcaseMedical,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <main id="main">
      <section className="about-us large-margin">
        <img
          className="image1"
          src="about-us1.jpg"
          alt="Foto da nossa voluntária Amanda com um dos cães sob cuidado do projeto"
        />
        <div className="description">
          <h1>Sobre Nós 🐾</h1>
          <p>
            A Caramelos do Vale é uma associação formada por uma rede de alunas
            e servidoras da UFRGS, dedicada ao resgate e ao cuidado de cães
            abandonados no Campus do Vale. Em 2025, formalizou-se como Projeto
            de Extensão, aproximando-se da comunidade universitária por meio do
            voluntariado convertido em horas de extensão. Os cães resgatados,
            muitas vezes, chegam em condições precárias: doentes, infestados de
            pulgas e carrapatos e, em geral, não castrados. A atuação do projeto
            também se estende à comunidade próxima ao campus, o Jardim
            Universitário, onde circulam animais sem tutores e em situação de
            vulnerabilidade. Todo o trabalho é voluntário e mantido
            exclusivamente por doações espontâneas, realização de eventos e
            venda de produtos.
          </p>
        </div>
      </section>
      <section className="large-margin">
        <div className="numbers">
          <div>
            <FontAwesomeIcon icon={faHeart} size="4x" className="icon" />
            <p>
              <b>+160</b>
            </p>
            <p>Adoções</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faSuitcaseMedical}
              size="4x"
              className="icon"
            />
            <p>
              <b>+280</b>
            </p>
            <p>Resgates</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHouse} size="4x" className="icon" />
            <p>
              <b>+30</b>
            </p>
            <p>Animais atualmente em nossos cuidados</p>
          </div>
        </div>
        <p className="detail">
          *alguns dos animais resgatados tiveram os tutores posteriormente
          localizados e não fazem parte do número de adoções
        </p>
      </section>
      <section className="history large-margin">
        <h2 className="title-history">Lobo & Loba: onde tudo começou</h2>
        <div className="description-history">
          <img
            className="image2"
            src="about-us2.jpg"
            alt="Foto dos dois cães caramelos que foram a inspiração para o início do projeto"
          />
          <div className="description">
            <p>
              O Lobo e a Loba foram responsáveis pelo surgimento da Caramelos do
              Vale em 2022. Em um campus praticamente vazio por causa da
              pandemia, essa dupla de prováveis irmãos circulava em busca de
              comida e atenção. O nome Caramelos do Vale é em homenagem a eles,
              que hoje seguem sob cuidados da ONG, mas agora em um lar
              temporário cheio de amor, com todos os cuidados e a segurança que
              eles merecem ter. Por vezes, eles visitam o campus em dias de
              cafés, fazendo a maior festa.
            </p>
          </div>
        </div>
      </section>
      <section className="join-us large-margin">
        <div>
          <h2>Junte-se a Nós</h2>
          <p>
            Você também pode fazer parte dessa corrente de amor! Seja adotando,
            voluntariando ou fazendo uma doação, toda ajuda é fundamental para
            continuarmos nosso trabalho. Juntos, podemos transformar a realidade
            de muitos animais e fazer do mundo um lugar mais justo e seguro para
            todos.
          </p>
          <p>
            Você também pode fazer parte dessa corrente de amor! Seja adotando,
            voluntariando, apadrinhando um cão ou fazendo uma doação, toda ajuda
            é fundamental para continuarmos nosso trabalho. Juntos, podemos
            transformar a realidade de muitos animais e fazer do mundo um lugar
            mais justo e seguro para eles.
          </p>
          <p>
            Nossas chaves pix para doações espontâneas são (em nome de
            Associação Caramelos do Vale - Pagbank):
          </p>
          <p>- e-mail: pix@caramelosdovale.com.br</p>
          <p>- CNPJ: 56.319.404/0001-05</p>

          <picture>
            <img
              className="image3 img-round img-join-us"
              src="join-us1.jpg"
              alt="Imagem de um dos cães ajudado pelo projeto"
            />
          </picture>
          <picture>
            <img
              className="image4 img-round img-join-us"
              src="join-us2.jpg"
              alt="Imagem de um dos cães ajudado pelo projeto"
            />
          </picture>
          <picture>
            <img
              className="image5 img-round img-join-us"
              src="join-us3.jpg"
              alt="Imagem de um dos cães ajudado pelo projeto"
            />
          </picture>
          <picture>
            <img
              className="image6 img-round img-join-us"
              src="join-us4.jpg"
              alt="Imagem de um dos cães ajudado pelo projeto"
            />
          </picture>
        </div>
        <picture>
          <img
            className="image7"
            src="join-us5.jpg"
            alt="Foto do Chocotone, um dos cachorros resgatados pelo projeto"
          />
        </picture>
      </section>
    </main>
  );
};

export default AboutUs;
