import React from 'react';
import Layout from './components/Layout';
import { TeamMembers } from './components/TeamMembers';
import { motion } from "framer-motion";

function Team() {

    function polygon(index) {
        if (index == 0) return (
            <svg viewBox="0 0 101 50">
                <circle cx="50" cy="25" r="20" stroke="#FFFFFF" />
            </svg>
        )
        else if (index == 1) return (
            <svg viewBox="0 0 100 50">
                <rect x="30" y="14" width="30" height="30" transform="rotate(-45, 40 20)" stroke="#FFFFFF" />
            </svg>
        )
        else if (index == 2) return (
            <svg viewBox="0 0 100 50">
                <polygon points="50, 10 30, 45 70, 45" stroke="#FFFFFF" />
            </svg>
        )
        return (
            <svg viewBox="0 0 100 50">
                <rect x="33" y="5" width="35" height="35" stroke="#FFFFFF" />
            </svg>
        )
    }

    return <React.Fragment>
        <Layout />
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="bg-black h-full w-full flex flex-col p-8 text-slate-200 lg:p-16 xl:px-32 2xl:px-64 sm:justify-center items-center text-center min-h-screen">
                <div className="xl:text-3xl xs:text-2xl mt-20 text-xl max-w-8xl lg:space-y-8 space-y-4 font-courier">
                    <div className="team font-bold text-3xl">
                        Team
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-x-40 gap-x-20 mt-4 text-xl">
                    {TeamMembers.map((member, index) => {
                        return (
                            <div className="flex flex-col text-center my-5 items-center" key={index}>
                                {polygon(index)}
                                <p className="font-bold py-2 md:text-2xl text-xl">{member.title}</p>
                                <p className="font-normal xs:text-lg text-sm py-2">{member.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.section>
    </React.Fragment>;
}

export default Team;
