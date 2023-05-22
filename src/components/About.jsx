// Import necessary packages
import React from 'react';

// Define About functional component
const About = () => {
  // JSX to be returned for rendering
  return (
    <div name='about' className='w-full h-screen bg-black'>
      {/* A wrapper div for centering content */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* Grid for About title */}
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* About title */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-500 text-gray-200'>
              About
            </p>
          </div>
        </div>

        {/* Grid for About content */}
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          {/* Greeting message */}
          <div className='sm:text-right text-4xl font-bold text-gray-200'>
            <p>Hi. I'm Fabrizio Trevino, nice to meet you. Please take a look around.</p>
          </div>

          {/* About description */}
          <div>
            <p className="text-gray-200">I am a results-driven software developer from Mexico, recently immersed in coding.
              With a background in international business, I bring a unique perspective to problem-solving.
              I am passionate about creating exceptional software solutions that make a positive impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export About component
export default About;
