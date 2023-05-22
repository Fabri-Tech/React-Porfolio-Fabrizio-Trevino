import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import ReactImg from '../assets/react.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-black text-gray-100'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-teal-500'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4 font-bold'>HTML</p>
          </div>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4 font-bold'>CSS</p>
          </div>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
            <p className='my-4 font-bold'>JavaScript</p>
          </div>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={Node} alt='Node.js icon' />
            <p className='my-4 font-bold'>Node.js</p>
          </div>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind CSS icon' />
            <p className='my-4 font-bold'>Tailwind</p>
          </div>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={GitHub} alt='GitHub icon' />
            <p className='my-4 font-bold'>GitHub</p>
          </div>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
            <p className='my-4 font-bold'>React</p>
          </div>
          <div className='shadow-md bg-gradient-to-b from-gray-900 to-gray-600 hover:scale-110 duration-500 rounded-lg'>
            <img className='w-20 mx-auto' src={Mongo} alt='MongoDB icon' />
            <p className='my-4 font-bold'>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
