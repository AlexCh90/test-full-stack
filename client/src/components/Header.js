import { useEffect, useState } from "react";
import "../assets/styles//header.scss";

const Header = () =>{
    const [header, setNavbar] = useState(false)
    const hideHeader = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        hideHeader()
        // adding the event when scroll change background
        window.addEventListener("scroll", hideHeader)
    })

    return(
        <div className={header ? "header hidden-header" : "header shown-header"}>
            <div className="container">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nisl eget turpis ornare bibendum. Cras id pretium est. In malesuada
                    sed quam nec molestie. Maecenas lorem ante, euismod eget tortor eget, ornare mattis ipsum. Integer eu ullamcorper lorem. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Fusce maximus lacinia magna dapibus fringilla. Ut efficitur neque nisl, ac hendrerit felis pretium
                    a. Pellentesque accumsan libero sed nisi gravida, at fringilla arcu convallis. Curabitur ultrices eros nec mollis facilisis. Vivamus pretium mi
                    felis. Suspendisse tempus luctus laoreet. Nam scelerisque non lectus at ultricies. Fusce convallis metus leo. Nulla rhoncus enim nisl.
                    Aliquam luctus volutpat neque, vitae tristique arcu finibus id.
                </p>
            </div>
        </div>
    )
}

export default Header