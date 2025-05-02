import { useState } from 'react';
import { db } from '../hooks';
import { ref, set } from 'firebase/database';

interface Form {
  name: string;
  email: string;
  role: 'Student' | 'Parent' | 'Educator' | 'Institution';
  message: string;
}

const isDisabled = (form: Form) => {
  return !form.name.trim() || !form.email.trim() || !form.role.trim() || !form.message.trim();
};

const DEFAULT_FORM_VALUE: Form = { name: '', email: '', role: 'Student', message: '' };

export const ContactUs = () => {
  const [form, setForm] = useState<Form>(DEFAULT_FORM_VALUE);

  const clear = () => {
    setForm(DEFAULT_FORM_VALUE);
  };

  const sendMessage = () => {
    const timeStamp = Date.now();
    set(ref(db, `/inquires/${timeStamp}`), {
      name: form.name,
      email: form.email,
      role: form.role,
      message: form.message,
      timeStamp,
    }).then(() => {
      clear();
    });
  };

  const sendDisabled = isDisabled(form);

  return (
    <div id='contact' className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-serif font-bold text-gray-900'>Tell us what you're looking for</h2>
          <p className='mt-4 text-lg text-gray-500'>We'll listen.</p>
        </div>

        <div className='mt-10 max-w-xl mx-auto'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4'
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4'
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />
            </div>
            <div>
              <label htmlFor='role' className='block text-sm font-medium text-gray-700'>
                Role
              </label>
              <select
                id='role'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4'
                onChange={(e) => setForm({ ...form, role: e.target.value as Form['role'] })}
                value={form.role}
              >
                <option>Student</option>
                <option>Parent</option>
                <option>Educator</option>
                <option>Institution</option>
              </select>
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4'
                maxLength={500}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                value={form.message}
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                onClick={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                disabled={sendDisabled}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
