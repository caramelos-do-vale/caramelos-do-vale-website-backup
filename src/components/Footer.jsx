import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const navLinks = [
    { path: "/", label: "Página Inicial", bold: true },
    { path: "/about-us", label: "Sobre Nós" },
    { path: "/for-adoption", label: "Adoção e Apadrinhamento" },
    { path: "/donations", label: "Como Ajudar" },
    { path: "/extension-project", label: "Projeto de Extensão" },
    { path: "/sebo", label: "Sebo da Caramelos" },
    { path: "/shop", label: "Loja" },
    { path: "/contact", label: "Contato" },
  ];

  return (
    <footer>
      <div className="footer-left">
        <img
          className="logo img-footer"
          src="logo-caramelos-do-vale.png"
          alt="Imagem do logo da Associação Caramelos do Vale"
        />
        <div className="footer-link-container">
          <a href="https://www.instagram.com/caramelosdovale/">
            <FontAwesomeIcon icon={faInstagram} className="icon footer-icon" />
          </a>
          <a
            href="https://apoia.se/caramelosdovale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apoia-se da Caramelos do Vale"
          >
            <img
              src="Logos-APOIA.se.png"
              className="icon footer-icon img-icon"
            />
          </a>
        </div>
      </div>
      <div className="footer-right">
        {[navLinks.slice(0, 5), navLinks.slice(5)].map((links, i) => (
          <nav key={i} className="nav-footer">
            {links.map(({ path, label, bold }) => (
              <Link key={path} to={path} className="link nav-footer-link">
                {bold ? <b>{label}</b> : label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
