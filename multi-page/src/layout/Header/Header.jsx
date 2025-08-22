import { NavLink } from "react-router"
const Header = () => {
    return(
        <>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/sobre" end>Sobre</NavLink>
            </nav>
        </>
    )
}
export default Header;