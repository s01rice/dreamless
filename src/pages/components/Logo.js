import React from 'react';
import logo from '../../images/UNDFND_logo.png';

function Logo() {
    return <div className="flex-grow">
        <div className="flex align-center">
            <a className="w-min-content" href="/">
                {/* <button className="px-4 py-1 rounded duration-300 hover:bg-slate-800 bg-slate-500 bg-opacity-60 hover:bg-opacity-80 font-mono text-white">
                </button> */}
                <img src={logo} className="w-36 h-auto px-4 py-1 rounded duration-300 opacity-60 hover:opacity-100"></img>
            </a>
        </div>
    </div>;
}

export default Logo;