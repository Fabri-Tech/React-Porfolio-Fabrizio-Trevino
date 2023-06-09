import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-teal-500'>Hello there! my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
          Fabrizio Trevino
        </h1>
        <h2 className='text-4xl sm:text-4xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white bg-clip-text'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#b0b0b0] py-4 max-w-[700px]'>
          Experienced and accomplished full-stack developer from Monterrey, Mexico, with a strong track record of delivering exceptional digital solutions.
          Proficient in building responsive web applications, I bring a keen eye for detail and a passion for crafting seamless user experience.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Home;

