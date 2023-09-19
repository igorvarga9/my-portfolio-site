import React from "react";
import "./App.css";

import { SideBar, NavBar } from "components";
import { About, Blog, Portfolio, Resume, Contact } from "pages";

const App: React.FC = () => {
  return (
    <main>
      <SideBar />

      <div className="main-content">
        <NavBar />

        <About />

        <Resume />

        <Portfolio />

        <Blog />

        <Contact />
      </div>
    </main>
  );
};

export default App;
