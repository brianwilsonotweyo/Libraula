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

  const handleGetStartedClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    router.push('/register'); // Redirect to the register page
  };

  return (
    <>
      <HeaderSignup />
      <MainSignup handleGetStartedClick={handleGetStartedClick} />
    </>
  );
}

export default Signup;
