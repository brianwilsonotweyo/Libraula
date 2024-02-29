import React from 'react';
import { useRouter } from 'next/router';

const HeaderSignup = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/login');
  };

  return (
    <header className='flex items-center z-50 absolute w-full'>
      <div>
        <img
          src="https://rb.gy/e2yjuv"
          width={200}
          height={200}
          className="cursor-pointer object-contain"
        />
      </div>

      <div className='flex items-center absolute right-3'>
        <div>
          <button className='bg-[#14E509] text-base p-1 rounded-sm text-white' onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderSignup;
