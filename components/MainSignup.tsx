import React from 'react'
import Image from 'next/image'

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


const MainSignup = () => {
    return (
        <div>
            <section>
                <div className="relative w-full h-[95vh] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] xl:h-[50vh] 2xl:h-[450px] lg:h-screen xl:h-screen 2xl:h-screen">
                    <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: "url('https://rb.gy/p2hphi')" }}>
                        {/* Optional: Add content inside the container */}
                    </div>
                </div>

                <div className='absolute top-24 sm:top-24 md:top-24 lg:top-20 xl:top-24'>
                    <div className='text-white w-full sm:px-10 md:px-20' >
                        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold'>
                            Unlimited Books, Comics, Manga and more.
                        </h1>


                        <p className='text-center text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl'>Your very own personal Library</p>
                        <p className='text-center text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl py-2'>Ready to start reading? Enter your phone number to create an account or restart your membership.</p>

                        <div className='flex flex-col mt-3 px-5 items-center sm:flex-row sm:justify-center sm:space-y-2 sm:space-x-4'>
                            <input className='py-2 px-4 sm:py-3 sm:px-6 sm:text-lg rounded-md border border-white bg-transparent mb-2 sm:mb-0' type="text" placeholder='Phone Number' />
                            <button className='bg-[#f01621] text-base px-4 py-2 sm:px-6 sm:py-3 rounded-md'>Get Started</button>
                        </div>

                    </div>
                </div>

            </section>

            <section className='mt-2'>
                <div className='py-10 flex items-center  justify-center flex-col lg:flex-row xl:px-20 '>
                    <div className='text-white text-center lg:text-start px-10'>
                        <h1 className='text-3xl md:text-6xl font-bold'>
                            Read at your leisure.
                        </h1>

                        <p className='text-xl md:text-2xl py-4'>
                            Read as many Novels, Manga, Comics and Magazines as you'd like, wherever and whenever.
                        </p>
                    </div>

                    <div className='w-48 lg:w-1/2 h-auto lg:h-auto mb-8 lg:mb-0'>
                        <Image
                            src="https://rb.gy/p2hphi"
                            alt="Description of the image"
                            width={300} // Adjust the width as needed
                            height={200} // Adjust the height as needed
                            className='object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className='mt-2 bg-black'>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:px-20 xl:px-32'>
                    {/* Image */}
                    <div className='w-48 lg:w-1/2 h-auto lg:h-auto mb-8 lg:mb-0 pt-4 sm:pt-8'>
                        <Image
                            src="https://rb.gy/p2hphi"
                            alt="Description of the image"
                            width={300} // Adjust the width as needed
                            height={200} // Adjust the height as needed
                            className='object-cover'
                        />
                    </div>

                    <div className='text-white text-center lg:text-start px-10'>
                        <h1 className='text-3xl md:text-6xl font-bold'>
                            Choose what you want to read.
                        </h1>

                        <p className='text-xl md:text-2xl py-4'>
                            Select whatever you'd like to read and have it brought it directly to you.
                        </p>
                    </div>
                </div>
            </section>

            <section className='mt-2'>
                <div className='py-10 flex items-center  justify-center flex-col lg:flex-row xl:px-20 '>
                    <div className='text-white text-center lg:text-start px-10'>
                        <h1 className='text-3xl md:text-6xl font-bold'>
                            Read, Return, Read Again.
                        </h1>

                        <p className='text-xl md:text-2xl py-4'>
                            Add the books to queue, queue items are delivered, when done reading, request a return and the next queue item  is delivered.
                        </p>
                    </div>

                    <div className='w-48 lg:w-1/2 h-auto lg:h-auto mb-8 lg:mb-0'>
                        <Image
                            src="https://rb.gy/p2hphi"
                            alt="Description of the image"
                            width={300} // Adjust the width as needed
                            height={200} // Adjust the height as needed
                            className='object-cover'
                        />
                    </div>
                </div>
            </section>
            <section className='mt-2 bg-black'>
                <div className='py-10 flex items-center justify-center flex-col lg:flex-row xl:px-20 '>
                    <h1 className='text-4xl md:text-6xl text-white text-center'>
                        Frequently Asked Questions
                    </h1>
                </div>

                <div className="flex justify-center mt-6">
                    <div className="w-full max-w-3xl">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowForwardIosSharpIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                            >
                                <Typography variant="h5">What is Libraula?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Libraula is a platform that allows you to borrow books on a subscription basis, similar to Netflix's DVD rental service but for books.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowForwardIosSharpIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                            >
                                <Typography variant="h5">How does Libraula work?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You simply sign up for a subscription, browse our library, select the books you want to read, and we'll deliver them to you. You can keep the books as long as you want, and return them when you're done to get more.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowForwardIosSharpIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                            >
                                <Typography variant="h5">What types of books are available?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Libraula offers a wide range of books including novels, manga, comics, magazines, and more. We aim to cater to diverse reading interests.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowForwardIosSharpIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                            >
                                <Typography variant="h5">How much does it cost?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The cost of Libraula subscription varies depending on the plan you choose. We offer different pricing tiers to suit your reading needs and budget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowForwardIosSharpIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                            >
                                <Typography variant="h5">Is it good for kids?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Libraula offers a selection of children's books suitable for various age groups. We strive to provide a safe and enriching reading experience for kids.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowForwardIosSharpIcon />}
                                aria-controls="panel-content"
                                id="panel-header"
                            >
                                <Typography variant="h5">Where can I read?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can read your borrowed books anywhere you like – at home, during your commute, or even on vacation. As long as you have access to your subscription, you can enjoy reading wherever you are.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainSignup