import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IntroduceMy from "../../components/IntroduceMy";
import Main from "../../components/Main";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

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
