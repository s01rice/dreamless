import React from 'react';
import Rocket from '../images/rocket.mp4';


function Home() {

  return <React.Fragment>
    <main className="relative h-screen">
      <video autoPlay loop muted className="absolute z-10 w-full h-screen object-cover overlay-item">
        <source src={Rocket} type="video/mp4" />
      </video>
      <div className="absolute z-20 w-full h-1/2 bottom-0 bg-gradient-to-t from-black">
      </div>
      <div className="absolute z-30 font-mono top-[40%] left-[33%] -translate-x-1/2 text-white mx-10 drop-shadow-lg">
        <p className="md:text-9xl text-6xl drop-shadow-lg">Ascent</p>
        <p className="md:text-3xl text-xl text-right drop-shadow-lg">Rise above.</p></div>
    </main>
  </React.Fragment>;
}

export default Home;
