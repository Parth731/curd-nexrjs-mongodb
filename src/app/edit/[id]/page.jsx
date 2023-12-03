'use client';
import UserForm from '../../../components/UserForm';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

const Edituser = () => {
  const { id } = useParams();
  // const { userId } = router.query;

  return (
    <div>
      <UserForm userId={id} />
    </div>
  );
};

export default Edituser;
