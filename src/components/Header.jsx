import { NavLink } from "react-router-dom"

const Header = ()=> {
    return (
        <header>
            <div className="tete">
                <img src="image/univblan.png" alt=""/>
                <nav>
                    <ul>
                        <li><NavLink to={"/"} className>Accueil</NavLink></li>
                        <li><NavLink to={"/université"}>Université</NavLink></li>
                        <li><NavLink to={"/formation"}>Formation</NavLink></li>
                        <li><NavLink to={"/apropos"}>Apropos</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    
    )
}
export default Header