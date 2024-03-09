import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/styles/banner.scss"

const Banner = () => {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    return(
        <nav className={navbar ? "navbar ontop navbar-expand-lg sticky-top banner" : "navbar notontop navbar-expand-lg sticky-top banner"}>
            <div className="container">
                <Link to="/" className="navbar-brand">Accueil</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart" aria-controls="offcanvasStart" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasStart" aria-labelledby="offcanvasStartLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasStartLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/page1" className="nav-link active" aria-current="page">Page 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/page2" className="nav-link active" aria-current="page">Page 2</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>)
}

export default Banner