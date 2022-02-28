import React from "react";
import Slide from "@material-ui/core/Slide";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "C_skill",
          content: "C++",
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
          id: "HTML5_skill", 
          content: "HTML5", 
          porcentage: "65%", 
          value: "65"
        },
        {
          id: "Javascript_skill",
          content: "Javascript",
          porcentage: "65%",
          value: "65",
        },
      ],
      about_meEN: [
        {
          id: "first-p-about",
          content:
            "To be able to think something up and then build it yourself, with your own hands, knowing that you came up with it, is a great feeling. " + 
            "As a child, I used to love Lego for this very reason. When I first discovered programming, it was a similar feeling. I could have an idea for a program," +
            "or a script, and then create it myself and watch it execute exactly as intended. Ever since then it has become something I truly enjoy and am passionate about.",
        },
        {
          id: "second-p-about",
          content:
            "To me, a Software Engineer is someone who will never be able to say that he knows everything. It is an area in which you must be constantly learning and adapting" + 
            ", and you must have the humility to accept mistakes and be able to learn from them, no matter the situation.",
        },
        {
          id: "third-p-about",
          content:
            "I consider myself someone who is very goal-oriented, hardworking and a quick learner. I enjoy challenges, and when I have an objective I am working towards, I focus on it completely"
            +", solving problems quickly and efficiently until it has been achieved.",
        },
        {
          id: "fourth-p-about",
          content:
            "In the development of any software, one fundamental aspect is always the team. As a team member, whether you are the leader or not, it is important to help your fellow " + 
            "team members and not be afraid to ask for help when necessary. We all share a common goal when working on a project, so nobody should be left behind or left alone with a problem.",
        },
        {
          id: "five-p-about",
          content:
            "",
        },
      ],
      about_mePT:[
        {
          id: "first-p-about",
          content:
            "Ter uma ideia de algo, e depois poder tornar essa ideia uma realidade é uma sensação incrível. Quando era uma criança, eu adorava brincar com LEGO por exatamente" + 
            " essa razao. Quando descobri programação pela primeira vez, descobri essa sensação de novo. Posso ter uma ideia para um programa, script ou projeto e depois criá-lo " +
            "e ver funcionar exatamente como pretendido. A partir daí, programação tornou-se algo que eu aprecio muito e que me intressa verdadeiramente.",
        },
        {
          id: "second-p-about",
          content:
            "Para mim, um Software Engineer é alguem que nunca vai conseguir dizer que sabe tudo. É uma area na qual uma pessoa tem que estar sempre disposto a aprender, adaptar" + 
            " e ter a humildade de aceitar os seus erros e estar sempre disposto a apdrender deles, qualquer que seja a situação.",
        },
        {
          id: "third-p-about",
          content:
            "Sou uma pessoa muito orientada pelos objetivos, trabalhador e aprendo rapidamente. Gosto de desafios, e quando tenho uma meta que quero atingir, foco-me completamente"+
            ", resolvendo problemas de uma forma rapida e eficiente, até estar completamente resolvido e satisfeito com o resultado.",
        },
        {
          id: "fourth-p-about",
          content:
          "No desenvolvimento de qualquer software, a equipa é sempre um aspeto fundamental. Enquanto membro da equipa, seja o líder ou não, " + 
          "é importante ajudar os restantes membros e não hesitar para pedir ajuda quando nos sentimos encurralados. Estamos todos a trabalhar para um objetivo comum,"+
          " então ninguém deve ficar sozinho com um problema ou ficar para trás sem necessidade.",
        },
        {
          id: "five-p-about",
          content:
            "",
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
                            <span className="about_span">Angelo</span>.
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
