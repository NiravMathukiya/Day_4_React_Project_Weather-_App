import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whats = () =>{
    window.location.href = "https://wa.me/6354813652";
  }
  // Toggle the menu visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center p-4 bg-gray-800">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl font-bold text-white">Dark Weather</h1>
        <button
          className="md:hidden text-white"
          onClick={handleToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:flex md:items-center md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}
      >
        <a href="/" className="block md:inline-block text-white p-4 hover:text-blue-400">Home</a>
        <a href="https://github.com/NiravMathukiya" className="block md:inline-block text-white  p-4  hover:text-blue-400">Github</a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjcQQRBXsTSWDhXnbMTTFnNdzfVvtmxVClfNjWkTmfcZfgwjmplKlHznpLcKwxVsFBsq" className="block md:inline-block text-white  p-4 hover:text-blue-400">Contect</a>
        <button className="block md:inline-block bg-blue-500 px-4  m-3  py-2 rounded-lg hover:bg-blue-600 text-white" onClick={whats}>
          <div className='flex flex-row gap-2 items-center justify-center'>
        <FaWhatsapp />Whatsapp
        </div>
        </button>
      </div>
    </nav>
  );
}

  