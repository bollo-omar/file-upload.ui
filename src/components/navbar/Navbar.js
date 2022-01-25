import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <nav className="menu">
                <ul className="menu-list">
                    <li><Link to="/">home</Link></li>                                      
                </ul>
                <div className="menu-toggler"></div>
            </nav>
        </>
    )
}