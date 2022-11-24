import { Tab } from '@headlessui/react';
import React, { Fragment, useContext, useState } from 'react';
import CheckoutCart from '../Components/CheckoutCart';
import Payment from '../Components/Payment';
import ReviewHouse from '../Components/ReviewHouse';
import WhosComing from '../Components/WhosComing';
import { AuthContext } from '../contexts/AuthProvider';

const Checkout = () => {
    const {user} = useContext(AuthContext);
    const checkoutData = {
        _id:'01225544',
        location:'Dhaka, Bangladesh',
        title: 'Huge Apratment eith 4 besds',
        image: 'https://assets.architecturaldigest.in/photos/600845cf54beb9e516da8bb3/master/w_1600%2Cc_limit/Bengaluru-home-Bodhi-Design-Studio-17.jpg',
        from: '12/10/2022',
        to: '20/10/2022',
        host: {
            name: 'john Den',
            image:'https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            email: 'johndoe@gmail.com',
        },
        price: 98,
        total_guest: 4,
        bedrooms: 2,
        bathrooms: 2,
        ratings: 4.8,
        reviews: 64,
    }
    const [selectedIndex, setSelectedIndex] = useState(0);


    return (
        <div className='md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 px-4 py-4'>
           <div className='flex-1'>
           <Tab.Group 
           selectedIndex={selectedIndex}
           onChange={setSelectedIndex}
           defaultIndex={1}
           >
      <Tab.List className='container flex flex-wrap items-center py-4 mx-auto overflow-y-auto'>
        <Tab as={Fragment}>
          {({ selected }) => (
            
            <button
              className={
                selected ? 'text-blue-600 bg-white shadow-lg rounded' : 'text-gray-600'
              }
            >
             1. Reviews House Rules
            </button>
          )}
        </Tab>
        <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    </span>
        <Tab as={Fragment}>
          {({ selected }) => (
            
            <button
              className={
                selected ? 'text-blue-600 bg-white shadow-lg rounded' : 'text-gray-600'
              }
            >
             2.Whos Comming
            </button>
          )}
        </Tab>
        <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    </span>
    <Tab as={Fragment}>
          {({ selected }) => (
            
    
            <button
              className={
                selected ? 'text-blue-600 bg-white shadow  rounded' : 'text-gray-600 bg-white'
              }
            >
            3.Confirm & Pay
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><ReviewHouse></ReviewHouse></Tab.Panel>
        <Tab.Panel><WhosComing></WhosComing></Tab.Panel>
        <Tab.Panel><Payment></Payment></Tab.Panel>
      </Tab.Panels>
      
        
        
      
    </Tab.Group> 
           </div>
           <CheckoutCart></CheckoutCart>
        </div>
    );
};

export default Checkout;