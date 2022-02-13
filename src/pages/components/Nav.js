import React from 'react';
import { NavItems } from "./NavItems";

function Nav() {
    return <div className="items-center hidden lg:flex font-mono">
        <ul className="flex space-x-3">
            {NavItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={`${item.cName} bg-opacity-20 opacity-80 text-slate-800 items-center relative padding-huge bg-white duration-300 px-4 py-1 hover:bg-opacity-70 rounded flex justify-center flex-row`} href={item.url}>{item.title}</a>
                    </li>
                )
            })}
        </ul>
    </div>;
}

export default Nav;