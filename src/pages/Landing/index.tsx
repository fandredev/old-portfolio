import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import IntroduceMy from "../../components/IntroduceMy";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import "./styled.scss";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <IntroduceMy />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
