import { BookOpen, Users, Settings, Sparkles, Edit3 } from 'lucide-react';

export const PlitoFramework = () => {
  return (
    <div id='framework' className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-serif font-bold text-gray-900'>PLITO: A Framework that Breathes</h2>
          <p className='mt-4 text-lg text-gray-500'>
            A proprietary framework for designing learning that is fully contextual, adaptable, and personal.
          </p>
        </div>

        <div className='mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {[
            {
              title: 'People',
              icon: Users,
              description: 'Who are you in the world? What communities, relationships, and roles shape you?',
            },
            {
              title: 'Labour',
              icon: Settings,
              description: 'What kind of work do you wish to do or value most? What kind of effort gives you meaning?',
            },
            { title: 'Ideas', icon: BookOpen, description: 'What beliefs or concepts have power in your life?' },
            {
              title: 'Techne',
              icon: Edit3,
              description: 'What tools and methods do you lean on? What ways of learning feel natural?',
            },
            {
              title: 'Objects',
              icon: Sparkles,
              description: 'What are your goals, dreams, and the outcomes you seek—both concrete and abstract?',
            },
          ].map(({ title, icon: Icon, description }) => (
            <div key={title} className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto'>
                <Icon className='h-6 w-6' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-900 text-center'>{title}</h3>
              <p className='mt-2 text-sm text-gray-500'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
