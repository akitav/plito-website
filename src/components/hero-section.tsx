import './index.css';

export const HeroSection = () => {
  return (
    <div className='relative overflow-hidden hero-section'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8  sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32'>
          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='text-center'>
              <h1 className='text-4xl tracking-tight font-serif font-bold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block'>What does it mean to</span>
                <span className='block text-blue-600'>truly learn?</span>
              </h1>
              <p className='mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl font-bold text-gray-900'>
                Welcome to a place where your questions matter.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center'>
                <div className='rounded-md shadow'>
                  <a
                    href='https://medium.com/@akitavN'
                    target='_blank'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'
                  >
                    Learn more about our Work
                  </a>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='#contact'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10'
                  >
                    Inquire About Mentorship
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
