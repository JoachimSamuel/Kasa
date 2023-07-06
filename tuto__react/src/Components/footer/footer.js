import React from "react";
import WhiteLogo from "../images/logo.png"


function Footer() {

    // state (état, données)
  
    //comportements

    //return (render)
    return (
        <footer>
             <div className="contenair-footer" >
             <img src={WhiteLogo} alt="Logo Kasa" className="logo-Kasa-white" />
                <p>© 2020 Kasa, All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer;