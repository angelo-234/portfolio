import React from "react";
import imageOverlay from "../img/earth-2.jpg";
import Slide from "@material-ui/core/Slide";
class Contact extends React.Component {
  render() {
    const { language } = this.props;
    return (
      <Slide in {...{ timeout: 5500 }}>
        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(" + imageOverlay + ")" }}
        >
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left">
                            {language == "EN"
                              ? "Send a Message"
                              : "Enviar Mensagem"}
                          </h5>
                        </div>
                        <div>
                          <form
                            action="https://formspree.io/f/xgedkezw"
                            method="POST"
                            className="contactForm"
                          >
                            <div id="sendmessage">
                              {language == "EN"
                                ? "Your message has been sent. Thank you!"
                                : "A sua mensagem foi enviada. Obrigado!"}
                            </div>
                            <div id="errormessage"></div>
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder={
                                      language == "EN"
                                        ? "Your name"
                                        : "O seu nome"
                                    }
                                    data-rule="minlen:4"
                                    data-msg={
                                      language == "EN"
                                        ? "Please enter at least 4 characters"
                                        : "Por favor, introduza pelo menos 4 caracteres"
                                    }
                                    required
                                  />
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder={
                                      language == "EN"
                                        ? "Your email"
                                        : "O seu email"
                                    }
                                    data-rule="email"
                                    data-msg={
                                      language == "EN"
                                        ? "Please enter a valid email"
                                        : "Por favor, introduza um email válido"
                                    }
                                    required
                                  />
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder={
                                      language == "EN" ? "Subject" : "Assunto"
                                    }
                                    data-rule="minlen:8"
                                    data-msg={
                                      language == "EN"
                                        ? "Please enter at least 8 characters for the subject"
                                        : "Por favor, introduza pelo menos 8 caracteres"
                                    }
                                    required
                                  />
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    data-rule="required"
                                    data-msg={
                                      language == "EN"
                                        ? "Please write something for me!"
                                        : "Escreva-me algo!"
                                    }
                                    placeholder={
                                      language == "EN" ? "Message" : "Mensagem"
                                    }
                                    required
                                  ></textarea>
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <button
                                  type="submit"
                                  className="button button-a button-big button-rouded"
                                >
                                  {language == "EN"
                                    ? "Send Message"
                                    : "Enviar Message"}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">
                            {language == "EN"
                              ? "Get in Touch"
                              : "Entre em contacto"}
                          </h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            {language == "EN"
                              ? "Whether you would like to contact me regarding work opportunities, a project collaboration, or would simply like to say hi, I am looking forward to hearing from you!"
                              : "Caso queira contactar-me, falar sobre uma colaboração num projeto, ou apenas dizer olá, gostaria muito de ouvir aquilo que tem para dizer!"}

                            <br></br>

                            {language == "EN"
                              ? "Simply fill the form and send me an email."
                              : "Preencha o formulário e envie-me um email."}
                          </p>
                          <ul className="list-ico">
                            <li>
                              <span className="ion-email"></span>{" "}
                              angelobennett12@gmail.com
                            </li>
                          </ul>
                        </div>
                        <div className="socials">
                          <ul>
                            <li>
                              <a
                                href="https://github.com/angelo-234"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="ico-circle">
                                  <i className="ion-social-github"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/in/rodrigo-fernandes-52b600156/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="ico-circle">
                                  <i className="ion-social-linkedin"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="copyright-box"></div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </Slide>
    );
  }
}

export default Contact;
