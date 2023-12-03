'use client';
import { NEXT_URL } from '../libs/url';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// components/UserTable.js
const UserTable = () => {
  const router = useRouter();
  const [userDetailList, setUserDetailList] = useState([]);
  useEffect(() => {
    const res = getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`${NEXT_URL}/users`);
      console.log(response.data.users);
      setUserDetailList(response.data.users);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const users = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john_doe',
      fullName: 'John M. Doe',
      joiningDate: '2022-01-01',
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'jane_smith',
      fullName: 'Jane A. Smith',
      joiningDate: '2022-02-15',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      username: 'bob_johnson',
      fullName: 'Bob R. Johnson',
      joiningDate: '2022-03-20',
    },
    {
      id: 4,
      name: 'Alice Williams',
      username: 'alice_williams',
      fullName: 'Alice C. Williams',
      joiningDate: '2022-04-10',
    },
    {
      id: 5,
      name: 'Charlie Brown',
      username: 'charlie_brown',
      fullName: 'Charlie D. Brown',
      joiningDate: '2022-05-05',
    },
  ];

  const removeUser = async (id) => {
    const confirmed = confirm('Are you sure?');
    try {
      if (confirmed) {
        const res = await axios.delete(`${NEXT_URL}/users?id=${id}`);
        if (res.data) {
          toast.success(res.data.message);
          const response = await axios.get(`${NEXT_URL}/users`);
          setUserDetailList(response.data.users);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <table className='border-collapse bg-gray-800  border-spacing-5 border-gray-500'>
        <thead>
          <tr>
            <th className='border p-3'>ID</th>
            <th className='border p-3'>Username</th>
            <th className='border p-3'>Password</th>
            <th className='border p-3'>Email</th>
            <th className='border p-3'>Date Of Birth</th>
            <th className='border p-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userDetailList.map((user, index) => (
            <tr key={user.id}>
              <td className='border p-3 text-center'>{index + 1}</td>
              <td className='border p-3 text-center'>{user?.username}</td>
              <td className='border p-3 text-center'>{user?.password}</td>
              <td className='border p-3 text-center'>{user?.email}</td>
              <td className='border p-3 text-center'>{user?.dateOfBirth}</td>
              <td className='border p-3 text-center flex space-x-2'>
                <button
                  className='bg-blue-500 text-white p-2 rounded-lg'
                  onClick={() => router.push(`/edit/${user?._id}`)}>
                  Update
                </button>
                <button
                  className='bg-red-500 text-white p-2 rounded-lg'
                  onClick={() => removeUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
