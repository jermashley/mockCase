import React from "react";

import "../normalize.css";
import "../styles.css";

const Layout = ({ children }) => (
  <>
    <main>
      <header>
        <h1 className="page-heading">Mockcase</h1>
      </header>

      <section>
        { children }
      </section>
    </main>
  </>
);

export default Layout;
