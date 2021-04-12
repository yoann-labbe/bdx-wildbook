import React from "react";


function Main(props) {
    const {children} = props;

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Main;