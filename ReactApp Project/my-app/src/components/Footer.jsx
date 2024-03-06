import React from "react";

const footerText = "Copyright ⓒ " + new Date().getFullYear();
function Header(){
    return (
        <footer>
            <p>{footerText}</p>
        </footer>
    );
}

export default Header;