import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4 flex justify-between items-center'>
      <div className='flex space-x-4'>
        <Link href='/' className='text-white'>
          Home
        </Link>
        <Link href='/adduser' className='text-white'>
          AddUser
        </Link>
        <Link href='/contact' className='text-white'>
          Contact
        </Link>
        <Link href='/service' className='text-white'>
          Service
        </Link>
      </div>
      <div className='flex space-x-4'>
        <Link href='/login' className='text-white'>
          Login
        </Link>
        <Link href='/register' className='text-white'>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
