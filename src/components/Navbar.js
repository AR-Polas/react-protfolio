import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(false)
    }
    return (

        <nav class="navbar">
            <div class="navbar__container">
                <div className="navbar__logo">
                    <a href="https://bit.ly/3jAwTQz"> <i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Arpolash" style={{ margin: "0 13px" }}><i class="fab fa-github-square"></i></a>
                    <a href="https://www.facebook.com/arpolas1029"><i class="fab fa-facebook-square"></i></a>
                </div>
                <div class={`${active ? 'navbar__toggle is-active' : 'navbar__toggle '}`} id="mobile-menu" onClick={() => setActive(!active)}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul className={`${active ? 'navbar__menu active' : 'navbar__menu'}`}>
                    <li class="navbar__item">
                        <a href="#home" class="navbar__links" id="home__page" onClick={handleClick}>Home</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#about" class="navbar__links" id="about__page" onClick={handleClick}>About</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#project" class="navbar__links" id="services__page" onClick={handleClick}>Projects</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#contact" class="navbar__links" id="services__page" onClick={handleClick}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;