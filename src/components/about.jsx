import React from "react";
import Slide from "@material-ui/core/Slide";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Android_skill",
          content: "Android",
          porcentage: "95%",
          value: "95",
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "95%",
          value: "95",
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "Javascript_skill",
          content: "Javascript",
          porcentage: "73%",
          value: "73",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "Sql_skill",
          content: "SQL",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "60%",
          value: "60",
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "60%",
          value: "60",
        },
      ],
      about_meEN: [
        {
          id: "first-p-about",
          content:
            "Since I saw an Android phone for the first time and I really realized what an Android Application was, the bug of wanting to become a Software Developer was born, " + 
            "with more emphasis on Mobile Devices. Nothing fascinates me more than writing a few lines of code and watching everything happen on my mobile phone.",
        },
        {
          id: "second-p-about",
          content:
            "To me, a Software Developer is someone who will never be able to say that he knows everything, it is a profession in which the " + 
            "professional must be in constant learning and must have the humility to accept mistakes and learn from them, whether from someone with more or less experience.",
        },
        {
          id: "third-p-about",
          content:
            "I am very demanding with results and very perfectionist. This also translates into my professional life.",
        },
        {
          id: "fourth-p-about",
          content:
            "In the development of any software there is something very important: the team. As a team member, whether you are the leader or not, it is important to help other " + 
            "team members and ask for help when we feel trapped. We are all rowing to the same side, no one is left behind because it would make a part of the application more fragile.",
        },
        {
          id: "five-p-about",
          content:
            "I really like challenges. I have a very objective attitude, which leads me to solve problems quickly and effectively, focusing on what's the most important.",
        },
      ],
      about_mePT:[
        {
          id: "first-p-about",
          content:
            "Desde que vi pela primeira vez um telemóvel Android e que me apercebi realmente o que era uma Aplicação Android," +
            " nasceu o bichinho de me querer tornar um Software Developer, com mais ênfase em Dispositivos Móveis. "+
            "Nada me fascina mais do que escrever umas linhas de código e ver tudo a acontecer no telemóvel.",
        },
        {
          id: "second-p-about",
          content:
            "Para mim um Software Developer é alguém que nunca poderá dizer que sabe tudo, é uma profissão em que o profissional " + 
            "tem de estar em constante aprendizagem e tem de ter a humildade de aceitar os erros e aprender com eles, seja de alguém com mais ou menos experiência.",
        },
        {
          id: "third-p-about",
          content:
            "Sou bastante exigente com resultados e bastante perfeccionista. Isso também se traduz na minha vida profissional.",
        },
        {
          id: "fourth-p-about",
          content:
          "No desenvolvimento de qualquer software existe algo bastante importante: a equipa.  Enquanto membro da equipa, seja o líder ou não, " + 
          "é importante ajudar os restantes membros e pedir ajuda quando nos sentimos encurralados. Estamos todos a remar para o mesmo lado, ninguém fica " + 
          "para trás porque tornaria uma parte da aplicação mais frágil."
        },
        {
          id: "five-p-about",
          content:
            "Gosto bastante de desafios, tenho uma atitude bastante objetiva, o que me leva a resolver problemas de forma rápida e eficaz, focando-me no mais importante.",
        },
      ]
    };
  }

  render() {
    const {language} = this.props
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <Slide in {...{ timeout: 2000 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">
                            {language == "EN" ? "Hello, I'm " : "Olá, sou o "}
                            <span className="about_span">Rodrigo</span>.
                          </h5>
                        </div>
                        {language == "EN"
                          ? this.state.about_meEN.map((content) => {
                              return (
                                <p className="lead" key={content.id}>
                                  {content.content}
                                </p>
                              );
                            })
                          : this.state.about_mePT.map((content) => {
                              return (
                                <p className="lead" key={content.id}>
                                  {content.content}
                                </p>
                              );
                            })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default About;
