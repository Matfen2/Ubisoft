import { useRef } from 'react';
import ubisoftLogo from "../assets/picts/ubisoftLogo.png";

const Footer = () => {
  const emailInputRef = useRef(null);
  const emailMessageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailInputRef.current.value.trim() === '') {
      emailMessageRef.current.textContent = 'Adresse email requise';
      emailMessageRef.current.style.color = 'red';
    } else {
      emailMessageRef.current.textContent = 'Adresse email envoyée avec succès';
      emailMessageRef.current.style.color = 'green';
    }
  };

  return (
    <div className="footer">
      <ul className="listSocial">
        <li><a href="https://www.facebook.com/ubisoft.france/?locale=fr_FR"><i className="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="https://x.com/Ubisoft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa-brands fa-x-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/ubisoftfr/?hl=fr"><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="https://www.youtube.com/ubisoft"><i className="fa-brands fa-youtube"></i></a></li>
      </ul>
      <img src={ubisoftLogo} className="img-fluid w-100" />
      <form id="formNewsLetter" noValidate onSubmit={handleSubmit}>
        <label>Inscrivez-vous à notre newsletter pour rester au courant de tout ce qui concerne Ubisoft</label>
        <div className="sendEmail">
          <input
            type="email"
            id="emailInput"
            ref={emailInputRef}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder="Adresse email"
          />
          <button type="submit" id="btnSend">ENVOYER</button>
          <div id="emailMessage" ref={emailMessageRef}></div>
        </div>
      </form>
    </div>
  );
};

export default Footer;

