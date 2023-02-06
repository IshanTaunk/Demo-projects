import { useState } from "react";
import {Link} from "react-router-dom";
import "./header.css";

const Header=()=>{
    const [tabClass,setTabClass]=useState("0");

    return <div>
            <nav>
                <ul className='toolbar'>
                    <li><div className={'link'+(tabClass==="0"?" active":"")} onClick={()=>setTabClass("0")}><Link to="/" data-item="Home">Home</Link></div></li>
                    <li><div className={'link'+(tabClass==="1"?" active":"")} onClick={()=>setTabClass("1")}><Link to="/profile" data-item="Profile">Profile</Link></div></li>
                    <li><div className={'link'+(tabClass==="2"?" active":"")} onClick={()=>setTabClass("2")}><Link to="/components" data-item="Components">Components</Link></div></li>
                </ul>
            </nav>
    </div>
}

export default Header;