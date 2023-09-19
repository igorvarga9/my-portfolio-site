import React from "react";
import "./App.css";

import { SideBar, NavBar } from "components";
import { About, Blog, Portfolio, Resume, Contact } from "pages";
import { NavProvider } from "providers/NavProvider";

const App: React.FC = () => {
  return (
    <NavProvider>
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
    </NavProvider>
  );
};

export default App;
