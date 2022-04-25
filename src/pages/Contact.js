import React from 'react';

import Layout from './components/Layout';
import { motion } from "framer-motion";


function Contact() {

    return <React.Fragment>
        <Layout />
        <motion.section
            initial={{ opacity: 0, y: -10 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.7,
                    ease: [0.6, -0.05, 0.01, 0.99]
                }
            }}
            exit={{ opacity: 0 }}>
            <div className="bg-black h-full w-full flex flex-col p-8 text-slate-200 lg:p-16 xl:px-32 2xl:px-64 justify-center items-center text-center min-h-screen">
                <div className="xl:text-3xl xs:text-2xl mt-20 text-xl max-w-8xl lg:space-y-8 space-y-4 font-courier">
                    <div className="team font-bold sm:text-3xl">
                        hello@evilmediaempire.com
                </div>
                </div>
            </div>
        </motion.section>
    </React.Fragment>;
}

export default Contact;
