import { Users, Sparkles, Edit3 } from 'lucide-react';

export const Offerings = () => {
  return (
    <div id='offerings' className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-serif font-bold text-gray-900'>How We Learn Together</h2>
          <p className='mt-4 text-lg text-gray-500'>Education that begins with your world, and returns to it.</p>
        </div>

        <div className='mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              title: '1-on-1 Learning Guidance',
              description: 'For select school students ready to explore, question, and grow',
              icon: Users,
            },
            {
              title: 'Mentorship Programs',
              description: 'Nurturing intellectual confidence, purpose, and curiosity for learners in grades 8-12',
              icon: Sparkles,
            },
            {
              title: 'Assessment Design',
              description: 'PLITO-based tools for institutions that want contextually relevant evaluations',
              icon: Edit3,
            },
            {
              title: 'Teacher Professional Development',
              description: 'PLITO provides nurturing to teachers as well',
              icon: Edit3,
            },
          ].map(({ title, description, icon: Icon }) => (
            <div key={title} className='bg-gray-50 p-6 rounded-lg'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                <Icon className='h-6 w-6' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>{title}</h3>
              <p className='mt-2 text-gray-500'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
