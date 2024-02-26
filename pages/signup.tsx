import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

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
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to Signup Page</h1>
    </div>
  );
}

export default Signup;
