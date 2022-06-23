import React, { useState, Fragment } from "react";
import Uzbekistan from "./components/Uzbekistan";
import World from "./components/World";
import Navigation from "./UI/Navigation";
import TopTen from "./components/TopTen";
import Footer from "./UI/Footer";
import MenyuComponent from "./UI/Menyu";

const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuToggleHandler = () => {
    setShowMenu(!showMenu);
  };
 
    return (
      <Fragment>
        <Navigation menyuClicked={menuToggleHandler} />
        {showMenu &&  
          <MenyuComponent
            backdropClicked={menuToggleHandler}
            menyuShow={showMenu}
          />
         }
        <Uzbekistan />
        <World />
        <TopTen />
        <Footer />
      </Fragment>
    );
  
}

export default App;
