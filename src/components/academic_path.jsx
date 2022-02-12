import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import udemy from "../img/udemy.png";
import ipb from "../img/ipb.png";
import Slide from "@material-ui/core/Slide";
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
    borderRadius: "10%"
  }
}));

function AcedemicPath(props) {
  const { language } = props;
  const classes = useStyles();
  return (
    <div>
      <Slide in {...{ timeout: 3000 }}>
        <section id="my-path" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        {language == "EN" ? "Academic " : "Percurso "}{" "}
                        <span className="about_span">
                          {language == "EN" ? "Path" : "Académico"}
                        </span>
                        .
                      </h5>
                    </div>
                    <Timeline align="alternate">
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                className={classes.imgTag}
                                src={ipb}
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
                                ? "Masters Degree in Computer Engineering"
                                : "Mestrado Integrado em Engenharia Informática"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Masters Degree in Computer Engineering from FCT NOVA, Faculty of Sciences and Technology of the NOVA University of Lisbon. Diving deeper into detail in various different areas which I began to study in the first degree."
                                : "Mestrado Integrado em Engenharia Informática na FCT NOVA, Faculdade de Ciencias e Tecnologia da Universidade Nova de Lisboa. Com este curso tenho como objetivo entrar em ainda mais detalhe em varias areas ja aboradadas no primeiro curso."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2021 - 
                              {language == "EN" ? " Present Day" : " Dia Atual"}
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            className={classes.customDot}
                          ></TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <div className={classes.paperImg}>
                              <img
                                className={classes.imgTag}
                                src={ipb}
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
                                ? "Bachelor's Degree - Computer Engineering"
                                : "Curso de Ensino Superior - Engenheria Informatica"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "A course made to prepare it's students for all aspects of the professional tech world from the Faculty of Science and Technology of the NOVA University of Lisbon."
                                : "Um curso feito para preparar os alunos para o mundo profissional da area da tecnologia, da Faculdade de Ciencias e Tecnologia da Universidade NOVA de Lisboa."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              2018 - 2021
                            </Typography>
                          </TimelineContent>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
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

export default AcedemicPath;
