import React from "react";


function Minimal(props) {
    const {children} = props;

    return (
        <div>
            {children}
            <Footer />
        </div>
    );
}

export default Minimal;