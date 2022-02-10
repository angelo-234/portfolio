import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import udemy from "../img/udemy.png";
import Slide from "@material-ui/core/Slide";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    color: "white",
    background: "#00adb5",
    padding: "16px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  customDot: {
    background: "#00adb5",
    borderColor: "#00adb5",
  },
  paperImg: {
    textAlign: "center",
  },
  imgTag: {
    borderRadius: "10%",
  },
}));

function OnlineCourses(props) {
  const { language } = props;
  const classes = useStyles();
  return (
    <div>
      <Slide in {...{ timeout: 3500 }}>
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        {language == "EN" ? "Online " : "Cursos "}
                        <span className="about_span">
                          {language == "EN" ? "Courses" : "Online"}
                        </span>
                        .
                      </h5>
                    </div>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Paper elevation={3} className={classes.paper}>
                          <div className={classes.paperImg}>
                            <img
                              className={classes.imgTag}
                              src={udemy}
                              alt=""
                              width="100px"
                              height="100px"
                            />
                          </div>
                          <Typography
                            align="center"
                            variant="h6"
                            component="h1"
                          >
                            {language == "EN"
                              ? "The Complete 2021 Flutter Development Bootcamp with Dart"
                              : "The Complete 2021 Flutter Development Bootcamp com Dart"}
                          </Typography>
                          <Typography>
                            {language == "EN"
                              ? "A 28.5h Flutter bootcamp from Udemy, instructed by Angela Yu, one of the bests instructors. I learned a lot about cross platform mobile development."
                              : "Um bootcamp de Flutter de 28.5 h da Udemy, instruído pela Angela Yu, uma das melhores instrutoras da plataforma. Aprendi imenso sobre desenvolvimento de aplicações híbridas para dispositivos móveis."}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Paper elevation={3} className={classes.paper}>
                          <div className={classes.paperImg}>
                            <img
                              className={classes.imgTag}
                              src={udemy}
                              alt=""
                              width="100px"
                              height="100px"
                            />
                          </div>
                          <Typography
                            align="center"
                            variant="h6"
                            component="h1"
                          >
                            {language == "EN"
                              ? "The Complete 2020 Web Development Bootcamp"
                              : "Bootcamp completo de Desenvolvimento Web de 2020"}
                          </Typography>
                          <Typography>
                            {language == "EN"
                              ? "A 54h Fullstack bootcamp from Udemy, instructed by Angela Yu, one of the bests instructors. I learned about MongoDB, ExpressJS, ReactJS and NodeJS."
                              : "Um bootcamp Fullstack de 54h da Udemy, instruído pela Angela Yu, uma das melhores instrutoras da plataforma. Aprendi MongoDB, ExpressJS, ReactJS e NodeJS."}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Paper elevation={3} className={classes.paper}>
                          <div className={classes.paperImg}>
                            <img
                              className={classes.imgTag}
                              src={udemy}
                              alt=""
                              width="100px"
                              height="100px"
                            />
                          </div>
                          <Typography
                            align="center"
                            variant="h6"
                            component="h1"
                          >
                            {language == "EN"
                              ? "The Complete App Design Course - UX, UI and Design Thinking"
                              : "Curso Completo de Design de Aplicações - UX, UI e Pensamento de Design"}
                          </Typography>
                          <Typography>
                            {language == "EN"
                              ? "A course where I learned about UI, UX and Design, at Udemy with the instructor Angela Yu. Since it was one of my weaknesses, I took this course in order to improve myself and to open my mind a bit more."
                              : "Um curso onde aprendi sobre UI, UX e Design, na Udemy com a instrutora Angela Yu. Por ser um dos meus pontos fracos, fiz este curso com o objetivo de melhorar essa minha fraquesa e abrir um pouco mais a minha mente."}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </div>
  );
}

export default OnlineCourses;
