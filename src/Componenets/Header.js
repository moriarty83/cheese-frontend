import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props){
    


    return (
        <nav className="nav">
            <Link to="/">
                <div>All Cheese</div>
            </Link>
        </nav>    
    );
  } 
  
  export default Header