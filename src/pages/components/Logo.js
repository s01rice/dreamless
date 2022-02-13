import React from 'react';

function Logo() {
    return <div className="flex-grow">
        <div className="flex align-center">
            <a className="w-min-content" href="/">
                <button className="px-4 py-1 rounded duration-300 hover:bg-slate-800 bg-slate-500 bg-opacity-60 hover:bg-opacity-80 font-mono text-white">Ascent</button>
            </a>
        </div>
    </div>;
}

export default Logo;