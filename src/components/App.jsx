import React, { useState } from "react";
//import components
import Navbar from "./navbar.jsx";
import Intro from "./intro.jsx";
import About from "./about.jsx";
import Portfolio from "./portfolio.jsx";
import Contact from "./contact.jsx";
import BackToTop from "./back-top.jsx";
import Preloader from "./preloader";
//import ProfessionalPath from "./professional_path";
import AcademicPath from "./academic_path";
import SkillSet from "./skillset";
import CV from "./cv";
import OnlineCourses from "./online_courses.jsx";

function App() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  let languageCookie = "EN";

  ca.forEach((cookie) => {
    if (cookie.includes("language")) {
      languageCookie = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    }
  });

  const [language, setLanguage] = useState(languageCookie);

  function languageChange(newLanguage) {
    if (newLanguage == "EN") {
      document.cookie = "language=EN; path=/";
    } else {
      document.cookie = "language=PT; path=/";
    }

    setLanguage(newLanguage);
  }

  return (
    <div style={{position: "relative"}}>
      <BackToTop />
      <Navbar callback={languageChange} language={language} />
      <Intro language={language} />
      <About language={language} />
      <ProfessionalPath language={language} />
      <AcademicPath language={language} />
      <OnlineCourses language={language} />
      <Portfolio language={language} />
      <CV language={language} />
      <SkillSet language={language} />
      <Contact language={language} />

      <Preloader />
    </div>
  );
}

export default App;
