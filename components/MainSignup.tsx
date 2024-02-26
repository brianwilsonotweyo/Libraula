import React from 'react'
import Image from 'next/image'
const MainSignup = () => {
    return (
        <div>
            <section>
                <div className="relative w-full h-[95vh] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] xl:h-[50vh] 2xl:h-[450px] lg:h-screen xl:h-screen 2xl:h-screen">
                    <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: "url('https://rb.gy/p2hphi')" }}>
                        {/* Optional: Add content inside the container */}
                    </div>
                </div>

                <div className='absolute top-24 sm:top-24 md:top-24 lg:top-24 xl:top-24'>
                    <div className='text-white w-full sm:px-10 md:px-20' >
                        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold'>
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