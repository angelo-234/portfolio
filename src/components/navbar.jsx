import React from "react";
import $ from "jquery";
import { withStyles } from "@material-ui/core/styles";
import logo1 from "../img/profile.png";
import logo2 from "../img/profile.png";
import Switch from "@material-ui/core/Switch";

const PurpleSwitch = withStyles({
  switchBase: {
    color: "#01767c",
    "&$checked": {
      color: "#01767c",
    },
    "&$checked + $track": {
      backgroundColor: "#01767c",
    },
  },
  checked: {},
  track: {},
})(Switch);

class Navbar extends React.Component {

  constructor() {
    super();
    this.state = {
      logo: logo1,
      languageState: "PT",
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight,
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");

        document
          .querySelector(".navbar-expand-md")
          .classList.add("language-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("language-trans");

        this.setState({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");

        document
          .querySelector(".navbar-expand-md")
          .classList.add("language-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("language-reduce");
        this.setState({ logo: logo1 });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5,
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  handleChange = (props) => (event) => {
    if (!event.target.checked) {
      // this.setState({ language: "PT" });
      props.callback("PT");
    } else {
      // this.setState({ language: "EN" });
      props.callback("EN");
    }
  };

  render() {
    const { language } = this.props;
    // console.log(language);
    // this.setState({languageState: language});

    // const { languageState } = this.state;

    let disabled;

    if (language == "EN") {
      disabled = true;
    } else {
      disabled = false
    }

    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container-fluid">
          <div>
            <span
              className="language"
              id="PT"
              style={{ color: language == "EN" ? "" : "#01767c" }}
            >
              PT
            </span>
            <PurpleSwitch checked={disabled} onChange={this.handleChange(this.props)} />
            <span
              className="language"
              id="EN"
              style={{ color: language == "PT" ? "" : "#01767c" }}
            >
              EN
            </span>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  {language == "EN" ? "Home" : "Início"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  {language == "EN" ? "About" : "Sobre"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#my-path">
                  {language == "EN" ? "Timeline" : "Caminho"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  {language == "EN" ? "Projects" : "Projetos"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#curriculum">
                  {language == "EN" ? "Curriculum" : "Currículo"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  {language == "EN" ? "Contact" : "Contacto"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
