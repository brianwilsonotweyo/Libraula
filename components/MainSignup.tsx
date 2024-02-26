import React from 'react'
import Image from 'next/image'
const MainSignup = () => {
    return (
        <div>
            <section>
                <div>
                    <Image
                        src="https://rb.gy/p2hphi"
                        width={1980}
                        height={1080}
                        alt='netbg'
                        className='brightness-50 h-[80vh] sm:h-auto'
                    />
                </div>


                <div className='absolute top-24 sm:top-24 md:top-24 lg:top-24 xl:top-24'>
                    <div className='text-white w-full sm:px-10 md:px-20' >
                        <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold'>
                            Unlimited Books, Comics, Manga and more.
                        </h1>

                        <p className='text-center text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl'>Your very own personal Library</p>
                        <p className='text-center text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl py-2'>Ready to start reading? Enter your phone number to create an account or restart your membership.</p>
                        <div className='flex flex-col mt-3 px-5'>
                            <input className='py-2 px-2' type="text" placeholder='Phone Number' />
                            <div className='text-center py-2'>
                                <button className='bg-[#f01621] text-base p-1 rounded-sm'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default MainSignup