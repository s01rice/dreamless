import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import { NavItems } from './NavItems.js';

import MobileNavToggle from './MobileNavToggle.js';


function MobileNav() {
    const defaultStyle = {
        transition: `opacity 150ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    const [navToggle, setNavToggle] = useState(false);
    function handleClick() {
        setNavToggle(!navToggle);
    }

    // console.log(navToggle);
    return <>
        <MobileNavToggle handleClick={handleClick} nav={navToggle} />
        <Transition in={navToggle} timeout={{ appear: 0, enter: 0, exit: 150 }} unmountOnExit>
            {state => (
                <div className="lg:hidden w-screen items-start h-screen fixed flex flex-col px-10 pt-20 z-40 bg-white bg-opacity-70 backdrop-blur-lg"
                    style={{ ...defaultStyle, ...transitionStyles[state] }}
                >
                    <ul className="text-xl w-full font-900 font-courier">
                        {NavItems.map((item, index) => {
                            return (
                                <li className="border-b border-black border-opacity-10" key={index}>
                                    <a className={`${item.cName} py-3 w-full items-center block relative flex text-black`} href={item.url} onClick={handleClick}>{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </Transition></>;
}

export default MobileNav;
