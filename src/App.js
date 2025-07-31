import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Extras from "./Components/Extras";
import Routing from "./Routes";

const App = () => {
  return (
    <>
      <div id="page" class="page">
        <Header />
        <main id="content" class="site-main">
        <Routing />
        </main>
        <Footer />
        <Extras />
      </div>
    </>
  );
};

export default App;
