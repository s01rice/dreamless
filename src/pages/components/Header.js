import React from 'react';


import Logo from './Logo.js';
import Nav from './Nav.js';
import MobileNavToggle from './MobileNavToggle.js';


function Header(props) {

    const handleClick = (isOpen) => {
        props.handleClick(isOpen);
    }

    return <div className="absolute w-full text-center h-20 px-8 pt-8 z-50">
        <div className="flex h-full items-center justify-center max-w-[1920px] mx-auto">
            <Logo />
            <Nav />
            {/* <MobileNavToggle handleClick={handleClick} /> */}
        </div>
    </div>;
}

export default Header;
