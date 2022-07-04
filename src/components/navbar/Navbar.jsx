import React, {useState} from "react";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
    <div>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt2">Wht is GPT3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </div>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="FFF" size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
                    : <RiMenu3Line color="FFF" size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu/>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar