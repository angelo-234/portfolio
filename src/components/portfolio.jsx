import React from "react";
import PortfolioItem from "./portfolio_item.jsx";
import Slide from "@material-ui/core/Slide";
const descriptionsEN = {
  NaturalPTrails: (
    <div>
      <p>
        I developed this application while I was in my first internship. It was
        an application made for ICNF - Instituto da Conservação da Natureza e da
        Floresta from Portugal. It took me about 4 months to develop.
      </p>
      <p>
        This application allows users to do some trails from Portugal and see
        Points Of Interest from those trails. You can do those trails by car,
        horse, walk or bicycle.
      </p>
      <p>
        When you start a trail, the application will record how much time you
        take to make that trail, warn you when you go off the trail, and in some
        cases will only let you finish the trail when you are near the end. When
        you end the trail, you will be placed in a rank table that you can visit
        in your profile.
      </p>
      <p>
        You can also comment about the trail and the Points Of Interest. There
        is also a virtual tour for each trail. You can check the weather for
        each trail.
      </p>
      <p>This application is already in PlayStore and AppStore.</p>
    </div>
  ),
  Myticket: (
    <div>
      <p>
        This application was my first big project. It is currently being
        developed by me, but I didn't start it. This project has almost 1 year.
      </p>
      <p>
        The client is the company MyTicket, that presents some services to other
        companies, such as educational vouchers, health vouchers, food cards,
        etc, and those vouchers and cards can only be used within their partners
        network.
      </p>
      <p>
        The main goal of the application is to manage vouchers and food cards
        given to employees by their company. You can also transfer money from
        some cards to anothers.
      </p>
      <p>
        There is also a new feature, that I'm working on, that allows employees
        with an active Mobile Restaurant to order food from some restaurant
        partners of the MyTicket network.
      </p>
      <p>
        The first version of this application is almost in PlayStore and
        AppStore.
      </p>
    </div>
  ),
  PescApanha: (
    <div>
      <p>
        PescApanha was fully developed by me for IPMA - Instituto Português do
        Mar e da Atmosfera.
      </p>
      <p>It's ment to be used for a research that IPMA wants to do.</p>
      <p>
        This application wil be given to fishermen in order to make a research
        on which fish are more caughed by the fishermen and where they are
        caught.
      </p>
      <p>
        It will also track where the boat were and then send a full report by
        email to IPMA.
      </p>
      <p>
        Since it is a private project, for a research, it will never reach the
        public stores.
      </p>
    </div>
  ),
  Covid2Day: (
    <div>
      <p>This project was created by me.</p>
      <p>
        It was ment to keep track of the evolution of the Covid19 pandemic. I
        used an open source API.
      </p>
      <p>The design was fully made by me.</p>
      <p>
        I tried to release it to the stores, but Google Play blocked it since
        they thought it violates their Policies.
      </p>
    </div>
  ),
  FullStack: (
    <div>
      <p>
        It's a challenge ment to test my skills as a Full Stack Developer using
        the MERN stack. MERN stands for:
        <ul>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>
      </p>
    </div>
  ),
  PoketDex: (
    <div>
      <p>
        The PoketDex application was developed in order to test my skills as an
        Android developer, requested by a company.
      </p>
      <p>
        It was developed using the MVVM architecture and the API <a href="https://pokeapi.co/">PokéAPI</a>.
      </p>
      <p>
        The purpose of the application is to function as a Pokédex from the famous series
        Pokémon, where you have the list of Pokémon, their attacks, their
        characteristics, etc.
      </p>
      <p>
        It was part of the test to develop the application so that it was
        possible to use in both portrait and landscape mode.
      </p>
      <p>
        As requested in the documentation of <a href="https://pokeapi.co/">PokéAPI</a>, I implemented a cache mechanism using Room in order to save some unnecessary API calls.
      </p>
    </div>
  ),
  EcoEscolas: (
    <div>
      <p>
        Academic project carried out within the scope of the Integrated Project subject, in order to learn more about game development using Unity3D.
      </p>
      <p>
        Developed in C #, with 3D modeling performed within the Unity3D platform itself and with a SQLite database.
      </p>
    </div>
  ),
  LoopChallenge: (
    <div>
      <p>
        Project developed for a company's technical challenge. The goal was to test my ability to create custom inputs, animations and layouts.
      </p>
      <p>
        All the data is moked. Animations were made using MotionLayout and Material Design was used.
      </p>
      <p>
        I ended up receiving an offer but it didn't cover my expenses of going to work overseas.
      </p>
      <p>
        Developed using Kotlin. First project I've ever developed using Kotlin.
      </p>
    </div>
  )
};

const descriptionsPT = {
  NaturalPTrails: (
    <div>
      <p>
        Desenvolvi esta aplicação enquanto estava no meu primeiro estágio. Foi
        uma aplicação desenvolvida para o ICNF - Instituto da Conservação da
        Natureza e da Floresta de Portugal. Levei cerca de 4 meses para
        desenvolver.
      </p>
      <p>
        Esta aplicação permite aos utilizadores fazer alguns percursos a partir
        de Portugal e ver Pontos de interesse desses percursos. Você pode fazer
        essas trilhas de carro, cavalo, caminhada ou bicicleta.
      </p>
      <p>
        Quando você inicia um percurso, o aplicativo regista quanto tempo você
        leva para fazer aquele percurso, avisa quando você sair do percurso, e
        em alguns casos só vão deixar você terminar o percurso quando você
        estiver perto do fim. Quando terminar o percurso, você será colocado
        numa tabela de classificação que poderá visitar no seu perfil.
      </p>
      <p>
        Você pode, também, comentar sobre o percurso e os seus Pontos de
        Interesse. também há um passeio virtual para cada percurso. Você pode
        verificar o tempo médio para cada percurso.
      </p>
      <p>Esta aplicação já se encontra na PlayStore e na AppStore</p>
    </div>
  ),
  Myticket: (
    <div>
      <p>
        Esta aplicação foi o meu primeiro grande projeto. Atualmente está a ser
        desenvolvido por mim, mas não fui eu que o comecei. Este projeto tem
        quase 1 ano.
      </p>
      <p>
        O cliente é a empresa MyTicket, que apresenta alguns serviços a outras
        empresas, como vales-educação, vales-saúde, vales-alimentação, etc, e
        esses vales e cartões só podem ser usados nos seus parceiros aderentes.
      </p>
      <p>
        O principal objetivo da aplicação é gerir vales e cartões de alimentação
        dados aos funcionários pela sua empresa. Você também pode transferir
        dinheiro de alguns cartões para outros.
      </p>
      <p>
        Há também um novo recurso, no qual estou a trabalhar, que permite aos
        funcionários ,com um ticket restaurante móvel ativo, pedir comida de
        algum restaurante parceiro da rede MyTicket.
      </p>
      <p>
        A primeira versão desta aplicação está quase na PlayStore e Loja de
        aplicativos.
      </p>
    </div>
  ),
  PescApanha: (
    <div>
      <p>
        A PescApanha foi totalmente desenvolvido por mim para o IPMA - Instituto
        Português do Mar e da Atmosfera.
      </p>
      <p>A aplicação é para ser utilizada num estuado realizado pelo IPMA.</p>
      <p>
        Esta aplicação será dada a pescadores a fim de fazerem uma pesquisa de
        forma a verificar quais peixes são mais capturados pelos pescadores e a
        zona onde eles são mais capturados.
      </p>
      <p>
        Também irá rastrear onde o barco andou e irá enviar um relatório
        completo por e-mail para IPMA.
      </p>
      <p>
        Por se tratar de um projeto privado, para uma pesquisa, nunca chegará às
        lojas públicas.
      </p>
    </div>
  ),
  Covid2Day: (
    <div>
      <p>Este projeto foi criado por mim.</p>
      <p>
        O objetivo era acompanhar a evolução da pandemia Covid19. Utilizei uma
        API de código aberto.
      </p>
      <p>O design da aplicação foi feito por mim também.</p>
      <p>
        Tentei publicar para as lojas, mas o Google Play bloqueou a aplicação
        uma vez que eles pensaram que isso viola as suas políticas.
      </p>
    </div>
  ),
  FullStack: (
    <div>
      <p>
        É um desafio para testar as minhas habilidades como desenvolvedor Full
        Stack usando a stack MERN. MERN significa:
        <ul>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>
      </p>
    </div>
  ),
  PoketDex: (
    <div>
      <p>
        A aplicação PoketDex foi desenvolvida no âmbito de testar as minhas
        capacidades enquanto desenvolvedor Android, a pedido de uma empresa.
      </p>
      <p>
        Foi desenvolvida utilizando a arquitectura MVVM e a API <a href="https://pokeapi.co/">PokéAPI</a>.
      </p>
      <p>
        O objetivo da aplicação é funcionar como um Pokédex da famosa série
        Pokémon, onde tem a lista de Pokémons, os seus ataques, as suas
        características, etc.
      </p>
      <p>
        Fazia parte do teste desenvolver a aplicação de forma a que fosse
        possível utilizar tanto em modo retrato como em modo paisagem.
      </p>
      <p>
        Tal como solicitado na documentação da <a href="https://pokeapi.co/">PokéAPI</a>, foi implementado um mecanismo
        de cache utilizando o Room, de forma a prevenir chamadas desnecessárias.
      </p>
    </div>
  ),
  EcoEscolas: (
    <div>
      <p>
        Projeto académico realizado no âmbito da cadeira de Projeto Integrado, de forma a aprender mais sobre desenvolvimento de jogos utilizando o Unity3D.
      </p>
      <p>
        Desenvolvido em C#, com modelação 3D realizada dentro da própria plataforma do Unity3D e com uma base de dados em SQLite.
      </p>
    </div>
  ),
  LoopChallenge: (
    <div>
      <p>
        Projecto desenvolvido para um desafio técnico de um processo de recrutamento. O objetivo era testar a minha capacidade de criar inputs, animações e layouts custom.
      </p>
      <p>
        Todos os dados são locais. As animações fois feitas utilizando MotionLayout e foi utilizado o Material Design.
      </p>
      <p>
        Obtive uma proposta mas não cobria as despesas de ir trabalhar para o estrangeiro.
      </p>
      <p>
        Desenvolvido em Kotlin. Primeiro projeto que alguma vez realizei utilizando Kotlin.
      </p>
    </div>
  )
};

class Portfolio extends React.Component {
  render() {
    const { language } = this.props;
    const descriptions = language == "EN" ? descriptionsEN : descriptionsPT;
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <Slide in {...{ timeout: 4000 }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    {language == "EN"
                      ? "Some projects I worked on"
                      : "Alguns projetos em que trabalhei"}
                  </h3>
                  <p className="subtitle-a">
                    {language == "EN"
                      ? "This projects were made wether in a professional contex, University or by my own."
                      : "Estes projetos foram realizados em contexto profissional, Universitário ou por conta própria."}
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
            <PortfolioItem
                directory="/img/loop_challenge/"
                filename="loop"
                title="UI & UX Challenge"
                text="Kotlin | Java"
                isExtended={false}
                description={descriptions.LoopChallenge}
                repository="https://github.com/rfsfernandes/android-kotlin-animations"
              />
              <PortfolioItem
                directory="/img/poket/"
                filename="poket"
                title="PoketDex"
                text="Android | Java"
                isExtended={true}
                description={descriptions.PoketDex}
                repository="https://github.com/rfsfernandes/poketdex"
              />
              <PortfolioItem
                directory="/img/icnf/"
                filename="icnf"
                title="NaturalPTrails"
                text="Android | Java"
                isExtended={true}
                description={descriptions.NaturalPTrails}
                repository={null}
              />
              <PortfolioItem
                directory="/img/myticket/"
                filename="myticket"
                title="My Ticket"
                text="Android | Java"
                isExtended={false}
                description={descriptions.Myticket}
                repository={null}
              />
              <PortfolioItem
                directory="/img/covid2day/"
                filename="covid2day"
                title="Covid2Day"
                text="Android | Java"
                isExtended={true}
                description={descriptions.Covid2Day}
                repository="https://github.com/rfsfernandes/covid2day/tree/development"
              />
              <PortfolioItem
                directory="/img/pescapanha/"
                filename="pescapanha"
                title="PescApanha"
                text="Android | Java"
                isExtended={false}
                description={descriptions.PescApanha}
              />
              <PortfolioItem
                directory="/img/fullstackchallenge/"
                filename="fullstackchallenge"
                title="Full Stack Challenge"
                text="MongoDB | ExpressJS | ReactJS | NodeJS"
                isExtended={false}
                description={descriptions.FullStack}
                repository="https://github.com/rfsfernandes/fullstackchallenge"
              />
              <PortfolioItem
                directory="/img/ecoescolas/"
                filename="ecoescolas"
                title={language == "EN" ? "Unity3D - ESTIG Sustainable School" : "Unity3D - ESTIG Escola Sustentável"}
                text="Unity3D | C# | SQLite"
                isExtended={true}
                description={descriptions.EcoEscolas}
                repository="https://github.com/rfsfernandes/estig_escola_sustentavel"
              />
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Portfolio;
