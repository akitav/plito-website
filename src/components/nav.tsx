import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo1 from '../assets/PactLogo1.svg';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-normal h-16'>
          <img src={Logo1} style={{ height: '72px' }} />
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              {/* TODO: add the logo here */}
              {/* <h1 className='text-xl font-serif text-gray-900'>PACT</h1> */}
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <a href='#home' className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900'>
                Home
              </a>
              <a
                href='#framework'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900'
              >
                Framework
              </a>
              <a
                href='#offerings'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900'
              >
                Offerings
              </a>
              <a
                href='#contact'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900'
              >
                Contact
              </a>
            </div>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
            >
              {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='sm:hidden'>
          <div className='pt-2 pb-3 space-y-1'>
            {['Home', 'Framework', 'Offerings', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
