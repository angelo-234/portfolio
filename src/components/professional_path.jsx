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
                                ? "Junior Software Engineer"
                                : "Engenheiro Informatico Junior"}
                            </Typography>
                            <Typography>
                              {language == "EN"
                                ? "Junior Software Engineer for Cult of Bits Lda."
                                : "Engenheiro Informatico Junior para a empresa Cult of Bits Lda."}
                            </Typography>
                          </Paper>
                          <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                            {language == "EN"
                                ? "November 2022 - Present"
                                : "Novembro 2022 - Presente"}
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
