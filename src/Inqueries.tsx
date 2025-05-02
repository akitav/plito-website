import React, { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from './hooks'; // Assuming you have a firebase.ts file with the db configuration

interface Inquiry {
  name: string;
  email: string;
  role: string;
  message: string;
  timeStamp: number;
}

export const Inquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  const fetchInquiries = () => {
    const inquiriesRef = ref(db, '/inquires');
    onValue(inquiriesRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        const inquiriesList = Object.values(data) as Inquiry[];
        setInquiries(inquiriesList);
      } else {
        setInquiries([]);
      }
    });
  };

  const deleteInquiry = (timestamp: number) => {
    remove(ref(db, `/inquires/${timestamp}`))
      .then(() => {
        console.log('Inquiry deleted successfully');
        fetchInquiries(); // Refetch data after deletion
      })
      .catch((error) => {
        console.error('Error deleting inquiry:', error);
      });
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8'>Inquiries</h2>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {inquiries.map((inquiry, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='px-6 py-4'>
              <h3 className='font-bold text-xl mb-2 text-gray-800'>{inquiry.name}</h3>
              <p className='text-gray-600 text-sm mb-2'>Email: {inquiry.email}</p>
              <p className='text-gray-600 text-sm mb-2'>Role: {inquiry.role}</p>
              <p className='text-gray-700 text-base mb-4'>{inquiry.message}</p>
              <div className='flex justify-between items-center'>
                <p className='text-gray-500 text-xs'>{new Date(inquiry.timeStamp).toLocaleString()}</p>
                <button
                  className='bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded'
                  onClick={() => deleteInquiry(inquiry.timeStamp)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
