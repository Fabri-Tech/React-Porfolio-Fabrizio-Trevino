// Import data from the data file
import { data } from "../data/data.js";

// Work function component
const Work = () => {

    // Assign the imported data to the variable 'project'
    const project = data;
  
    // Returns the JSX structure for the Work component
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-black'>
            {/* This is the main container for the Work component */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                {/* Section heading */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-teal-500'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Container for individual projects. It uses CSS grid for layout. */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    
                    {/* Iterate over the 'project' array to render each project. */}
                    {project.map((item, index) => (
                        // Each project is displayed with a background image and details appear on hover
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                                flex justify-center text-center items-center mx-auto content-div "
                        >
                            {/* Hover effect container */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                {/* Display the project name */}
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                {/* Links to the project's code and live version */}
                                <div className="pt-8 text-center ">
                                    {/* Link to the project's GitHub */}
                                    <a href={item.github} target="_blank" rel="noreferrer">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    {/* Link to the live version of the project */}
                                    <a href={item.live} target="_blank" rel="noreferrer">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Export the Work function component
export default Work;
