import React from "react";
import UpButton from "../../common/components/UpButton/UpButton";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Main(props) {
  const { children } = props;

  return (
    <div>
      {/*<Header />*/}
      {children}
      {/*<UpButton showBelow={250} />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default Main;
