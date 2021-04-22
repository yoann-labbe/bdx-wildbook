import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";



function Main(props) {
    const {children} = props;

    return (
        <div>
           {/*<Header />*/}
            {children}
          {/*<Footer />*/}
        </div>
    );
}

export default Main;