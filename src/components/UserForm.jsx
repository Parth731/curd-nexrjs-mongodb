'use client';
import { NEXT_URL } from '../libs/url';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UserForm = ({ userId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    console.log(userId);
    if (userId) {
      getUserById();
    }
  }, [userId]);

  const getUserById = async () => {
    try {
      const response = await axios.get(`${NEXT_URL}/users/${userId}`);
      console.log(response.data);
      // setUserDetailList(response.data.users);
      setFormData(response.data.user);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);

    const { username, password, email, dateOfBirth } = formData;

    if (!username || !password || !email || !dateOfBirth) {
      alert('Title and description are required.');
      return;
    }

    try {
      const resonse = await axios.post(
        `${NEXT_URL}/users`,
        JSON.stringify({ username, password, email, dateOfBirth }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (resonse.data) {
        toast.success(resonse.data.message);
        const response = await axios.get(`${NEXT_URL}/users`);
        // setUserDetailList(response.data.users);
        router.refresh();
        router.push('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);

    const { username, password, email, dateOfBirth } = formData;

    if (!username || !password || !email || !dateOfBirth) {
      alert('all field are required.');
      return;
    }

    try {
      const resonse = await axios.put(
        `${NEXT_URL}/users/${userId}`,
        {
          newUserName: username,
          newPassword: password,
          newEmail: email,
          newDoB: dateOfBirth,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (resonse.data) {
        toast.success(resonse.data.message);
        router.refresh();
        router.push('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={userId ? handleUpdate : handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'>
            User Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Enter your username'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Enter your password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='fullName'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Enter your full email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='joiningDate'>
            DateOfBirth
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='dateOfBirth'
            type='date'
            placeholder='Select joining date'
            name='dateOfBirth'
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'>
            {userId ? 'update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
