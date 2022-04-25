import React from 'react';
import Action from '../images/actionimage.jpg';
import Layout from './components/Layout';
import { motion } from "framer-motion";

function Home() {


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

        <div className="relative sm:h-screen h-[75vh]">
          {/* <video autoPlay loop muted className="absolute z-10 w-full h-screen object-cover overlay-item">
        <source src={Rocket} type="video/mp4" />
    </video> */}
          <img className="absolute z-10 w-full h-full object-cover overlay-item" src={Action} />
          <div className="absolute z-20 w-full h-1/3 sm:bottom-0 bottom-[-1px] bg-gradient-to-t from-black">
          </div>
          {/* <div className="absolute z-30 font-mono top-[30%] left-[33%] -translate-x-1/2 text-white mx-10 drop-shadow-lg">
        <p className="md:text-9xl text-6xl drop-shadow-lg">Ascent</p>
    <p className="md:text-3xl text-xl text-right drop-shadow-lg">Rise above.</p></div> */}
        </div>
        <div className="sm:hidden h-[25vh] bg-black text-xl font-courier text-center text-green-600">
          <p className="pt-10 text-2xl">
            |The End is UNDFND...
      </p>
          <p className="text-xs fixed w-full bottom-5">A project by Evil Media Empire</p>
        </div>
      </motion.section>
    </React.Fragment >
  )
}

export default Home;
