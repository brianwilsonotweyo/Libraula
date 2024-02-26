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
                        className='brightness-50 h-[70vh]'
                    />
                </div>

                <div className='absolute top-24'>
                    <div className='text-white'>
                        <h1 className='text-center'>
                            Unlimited Books, Comics, Manga and more.
                        </h1>
                        <p className='text-center'>Your very own personal Library</p>
                        <p className='text-center'>Ready to start reading? Enter your phone number to create an account or restart your membership.</p>
                        <div className='flex items-center flex-col'>
                            <input type="text" />
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainSignup