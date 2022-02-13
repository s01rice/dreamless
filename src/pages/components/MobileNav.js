import React from 'react';
import { Transition } from 'react-transition-group';

import { NavItems } from './NavItems.js';


function MobileNav({ nav }) {
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

    console.log(nav);
    return <Transition in={nav} timeout={{ appear: 0, enter: 0, exit: 150 }} unmountOnExit>
        {state => (
            <div className="lg:hidden w-screen items-start h-screen fixed flex flex-col px-10 pt-20 z-40 bg-white bg-opacity-70 backdrop-blur-lg"
                style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
                <ul className="text-xl w-full font-900 font-mono">
                    {NavItems.map((item, index) => {
                        return (
                            <li className="border-b border-black border-opacity-10" key={index}>
                                <a className={`${item.cName} py-3 w-full items-center block relative flex text-black`} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )}
    </Transition>;
}

export default MobileNav;
