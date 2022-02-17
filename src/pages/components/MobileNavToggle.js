import React from 'react';

function MobileNavToggle(props) {
    const { useState } = React;
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
        props.handleClick(isOpen);
    }


    const hamburger = `h-0.5 w-5 my-0.5 rounded-full bg-white transition ease-in-out duration-500`


    return <div className="lg:hidden z-50 absolute right-8 top-8">
        <div className="opacity-1 bg-transparent">
            <button className="w-10 h-10 relative" type="button" onClick={handleClick}>
                <div className="transition ease-in-out flex flex-col justify-center items-center group">
                    <span className={`${hamburger} ${props.nav ? "rotate-45 translate-y-1.5 opacity-50 bg-black group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}></span>
                    <span className={`${hamburger} ${props.nav ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}></span>
                    <span className={`${hamburger} ${props.nav ? "-rotate-45 -translate-y-1.5 opacity-50 bg-black group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}></span>
                </div>
            </button>
        </div>
    </div>;
}

export default MobileNavToggle;