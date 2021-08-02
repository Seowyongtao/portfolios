import React from "react";
import HeadContainer from "./components/HeadContainer";
import SectionTitle from "./components/SectionTitle";
import PortfolioCard from "./components/PortfolioCard";

function App() {
  return (
    <div>
      <HeadContainer />
      <SectionTitle />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  );
}

export default App;
