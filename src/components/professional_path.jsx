import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";

import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import digitalworks from "../img/digitalworks.png";
import tekever from "../img/tekever.png";
import goma from "../img/goma.png";
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

function ProfessionalPath(props) {
  const { language } = props;
  const classes = useStyles();
  return (
    <div>
      <Slide in {...{ timeout: 2500 }}>
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        {language == "EN" ? "Professional " : "Percurso "}
                        <span className="about_span">
                          {language == "EN" ? "Path" : "Profissional"}
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
                                src={goma}
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
                              Lead Android Developer
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Android team leader. In charge of leading the development of a modular iGaming application on the Android platform, where I set priorities and distributed tasks among team members."
                                : "Líder da equipa de Android. Encarregue de liderar o desenvolvimento de uma aplicação modular de iGaming na plataforma Android, onde defini prioridades e distribuo tarefas pelos membros da equipa"}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              {language == "EN" ? "August 2021 - current" : "Agosto 2021 - até ao momento"}
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
                                src={tekever}
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
                                ? "Android Developer"
                                : "Desenvolvedor Android"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Android Developer in the project Santander Empresas."
                                : "Desenvolvedor Android no projeto Santander Empresas."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                            {language == "EN"
                                ? "March 2021 - August 2021"
                                : "Março 2021 - Agosto 2021"}
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
                                src={digitalworks}
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
                                ? "Junior Android Developer"
                                : "Desenvolvedor Android Júnior"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "I started my journey here. I did two internships and later signed a contract. During these two years I was responsible for the Company's Android development."
                                : "Comecei a minha jornada aqui. Realizei dois estágios e mais tarde assinei contrato. Durante esses dois anos fui responsável pelo desenvolvimento Android da Empresa."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                              {language == "EN"
                                ? "February 2019 - March 2021"
                                : "Fevereiro 2019 - Março 2021"}
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

export default ProfessionalPath;
