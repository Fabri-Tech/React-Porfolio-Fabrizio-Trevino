const Contact = () => {
    return (
      <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c9109bc7-2f98-4aab-ab53-228d596b6e77" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-2'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-500 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or send me a mail</p>
          </div>
          <input className='bg-gray-200 text-gray-800 font-semibold p-2 rounded-lg' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-gray-200 text-gray-800 font-semibold rounded-lg' type="email" placeholder='Email' name='email' />
          <textarea className='bg-gray-200 p-2 text-gray-800 font-semibold rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 hover:border-gray-200 px-4 py-3 my-8 mx-auto flex items-center'>Let's work together!</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  