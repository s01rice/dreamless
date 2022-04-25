import React from 'react';
import Action from '../images/actionimage.jpg';
import Layout from './components/Layout';
import { motion } from "framer-motion";

function Story() {


    return (
        <React.Fragment>

            <Layout />
            <motion.section
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.4,
                        ease: [0.4, -0.05, 0.01, 0.01]
                    }
                }}
                exit={{ opacity: 0 }}>

                <div className="relative bg-red-200 h-screen pt-28">
                    <img className="z-10 h-screen object-cover fixed overlay-item" src={Action} />
                    <div className="h-full">A</div>
                    <div className="h-full">A</div>
                    {/* <div className="absolute z-30 font-mono top-[30%] left-[33%] -translate-x-1/2 text-white mx-10 drop-shadow-lg">
        <p className="md:text-9xl text-6xl drop-shadow-lg">Ascent</p>
    <p className="md:text-3xl text-xl text-right drop-shadow-lg">Rise above.</p></div> */}
                </div>
            </motion.section>
        </React.Fragment >
    )
}

export default Story;
