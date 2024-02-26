import React from 'react'
import Image from 'next/image'
const MainSignup = () => {
    return (
        <div>
            <section>
                <div>
                    <Image
                        src="https://rb.gy/p2hphi"
                        // layout="fill"
                        // className="-z-10 !hidden opacity-60 sm:!inline"
                        // objectFit="cover"
                        width={1980}
                        height={1080}
                        alt='netbg'
                        className='brightness-50 h-[80vh]'
                    />
                </div>

                <div className='absolute top-24 sm:top-24 md:top-24 lg:top-24 xl:top-24'>
                    <div className='text-white sm:px-10' >
                        <h1 className='text-center text-4xl'>
                            Unlimited Books, Comics, Manga and more.
                        </h1>
                        <p className='text-center text-xl'>Your very own personal Library</p>
                        <p className='text-center text-xl py2'>Ready to start reading? Enter your phone number to create an account or restart your membership.</p>
                        <div className='flex flex-col mt-3 px-5'>
                            <input className='py-2 px-2' type="text" placeholder='Phone Number'/>
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