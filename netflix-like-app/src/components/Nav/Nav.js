import React, {useEffect, useState} from 'react';
import './Nav.css';

const Nav = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >= 100){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <nav className={`nav ${show ? "nav--black" : ""}`}>
            <img src="http://pngimg.com/uploads/netflix/netflix_PNG32.png" 
            alt="logo" className="nav__logo"/>

            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
            alt="avatar" className="nav__avatar"/>
        </nav>
    );
}

export default Nav;