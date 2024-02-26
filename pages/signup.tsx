import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import HeaderSignup from '../components/HeaderSignup';
import MainSignup from '../components/MainSignup';

const Signup = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page if the user is already logged in
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <>
    <HeaderSignup/>
    <MainSignup/>
    </>

  );
}

export default Signup;
