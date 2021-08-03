import React from "react";
import Logo from "./components/Logo";
import HeadContainer from "./components/HeadContainer";
import SectionTitle from "./components/SectionTitle";
import PortfolioCard from "./components/PortfolioCard";
import SkillCard from "./components/SkillCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Logo />
      <HeadContainer />
      <SectionTitle 
      title="Knowledge that I can share with you" 
      content="Here are the projects that I've dedicated my time to. After building my first projects, I've been addicted to it ! It feels like a collection habit, don't you feel the same ?"
      />
      <SkillCard />
      <SectionTitle 
      title="What I've been working on" 
      content="Here are the projects that I've dedicated my time to. After building my first projects, I've been addicted to it ! It feels like a collection habit, don't you feel the same ?"
      />
      <PortfolioCard />
      <PortfolioCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
