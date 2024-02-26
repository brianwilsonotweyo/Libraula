import React from 'react';
import Image from 'next/image';

const MainSignup = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <Image
                src="https://rb.gy/p2hphi"
                width={1980}
                height={1080}
                alt='netbg'
                className='brightness-50 object-cover w-full h-[80vh] sm:h-screen'
            />

            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-white text-center sm:px-10'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                        Unlimited Books, Comics, Manga and more.
                    </h1>
                    <p className='text-xl sm:text-2xl lg:text-3xl'>Your very own personal Library</p>
                    <p className='text-xl sm:text-2xl lg:text-3xl py-2'>Ready to start reading? Enter your phone number to create an account or restart your membership.</p>
                    <div className='flex flex-col sm:flex-row justify-center items-center sm:space-x-2 sm:mt-3'>
                        <input className='py-2 px-4 sm:w-64 lg:w-80' type="text" placeholder='Phone Number'/>
                        <button className='bg-[#f01621] text-base p-2 sm:p-3 rounded-sm'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSignup;
