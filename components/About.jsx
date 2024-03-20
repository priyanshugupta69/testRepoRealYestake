import React from 'react'
import { Typography } from "@material-tailwind/react";

export default function Hero() {
    return (
        <div className='text-white bg-[#120014] lg:py-[5rem] lg:px-[6.25rem] md:py-[5rem] md:px-[6.25rem] xl:py-[5rem] xl:px-[6.25rem] pb-24'>
            <div className='lg:flex md:flex justify-center items-center pt-10 '>
                {/* INNER CONTAINER */}
                <div className='text-center lg:w-1/2 md:w-1/2 xl:w-1/2 pb-10'>
                    <Typography variant="h1" className='text-5xl font-anton font-normal text-white'>
                        Why Choose Us to
                        <br />
                        Capture and Showcase
                        <br />
                        <span className='text-[#C332E6]'> Your Space in 3D?</span>
                    </Typography>
                </div>
                <div className='md:flex md:flex-col xl:flex xl:flex-col lg:flex lg:flex-col px-2'>
                    <Typography variant="small" className='text-white text-base font-normal pl-5'>
                        Is your property stuck in the flatland of traditional photos? Let&apos;s break free
                        from two-
                        <br />
                        dimensional limitations and unleash the full potential of your space with
                        stunning 3D tours.
                    </Typography>
                    <ol className='pl-5 text-[#C332E6] text-base font-normal pt-5'>
                        <li className='text-white flex'>
                            <svg className='pt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <mask id="mask0_923_1263" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                    <path d="M16 0H0V16H16V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_923_1263)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57144 0H7.42857V5.06025L5.53297 0.368466L4.47333 0.796588L6.41804 5.60991L2.74721 1.93908L1.93909 2.74721L5.45742 6.26553L0.897928 4.27345L0.440367 5.32071L5.26484 7.42857H0V8.57144H5.26483L0.440369 10.6793L0.897928 11.7266L5.45741 9.73448L1.93909 13.2528L2.74721 14.0609L6.41804 10.3901L4.47333 15.2034L5.53297 15.6315L7.42857 10.9398V16H8.57144V10.9398L10.467 15.6315L11.5266 15.2034L9.582 10.3901L13.2528 14.0609L14.0609 13.2528L10.5426 9.73448L15.1021 11.7266L15.5596 10.6793L10.7352 8.57144H16V7.42857H10.7351L15.5596 5.32071L15.1021 4.27345L10.5426 6.26553L14.0609 2.7472L13.2528 1.93908L9.582 5.6099L11.5266 0.796588L10.467 0.368466L8.57144 5.06025V0Z" fill="#C332E6" />
                                </g>
                            </svg>
                            <div className='flex md:flex-row lg:flex-row xl:flex-row flex-col'>
                                <span className='font-bold pl-2 pr-1'>Seamless listing platform: </span>
                                <span>Upload your tour and reach the right audience</span>
                            </div>

                        </li>
                        <li className='text-white flex'>
                            <svg className='pt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <mask id="mask0_923_1263" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                    <path d="M16 0H0V16H16V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_923_1263)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57144 0H7.42857V5.06025L5.53297 0.368466L4.47333 0.796588L6.41804 5.60991L2.74721 1.93908L1.93909 2.74721L5.45742 6.26553L0.897928 4.27345L0.440367 5.32071L5.26484 7.42857H0V8.57144H5.26483L0.440369 10.6793L0.897928 11.7266L5.45741 9.73448L1.93909 13.2528L2.74721 14.0609L6.41804 10.3901L4.47333 15.2034L5.53297 15.6315L7.42857 10.9398V16H8.57144V10.9398L10.467 15.6315L11.5266 15.2034L9.582 10.3901L13.2528 14.0609L14.0609 13.2528L10.5426 9.73448L15.1021 11.7266L15.5596 10.6793L10.7352 8.57144H16V7.42857H10.7351L15.5596 5.32071L15.1021 4.27345L10.5426 6.26553L14.0609 2.7472L13.2528 1.93908L9.582 5.6099L11.5266 0.796588L10.467 0.368466L8.57144 5.06025V0Z" fill="#C332E6" />
                                </g>
                            </svg>
                            <div className='flex md:flex-row lg:flex-row xl:flex-row flex-col'>
                                <span className='font-bold pl-2 pr-1'>State-of-the-art technology: </span>
                                <span>We wield cutting-edge 3D cameras and software</span>
                            </div>
                        </li>
                        <li className='text-white flex'>
                            <svg className='pt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <mask id="mask0_923_1263" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                    <path d="M16 0H0V16H16V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_923_1263)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.57144 0H7.42857V5.06025L5.53297 0.368466L4.47333 0.796588L6.41804 5.60991L2.74721 1.93908L1.93909 2.74721L5.45742 6.26553L0.897928 4.27345L0.440367 5.32071L5.26484 7.42857H0V8.57144H5.26483L0.440369 10.6793L0.897928 11.7266L5.45741 9.73448L1.93909 13.2528L2.74721 14.0609L6.41804 10.3901L4.47333 15.2034L5.53297 15.6315L7.42857 10.9398V16H8.57144V10.9398L10.467 15.6315L11.5266 15.2034L9.582 10.3901L13.2528 14.0609L14.0609 13.2528L10.5426 9.73448L15.1021 11.7266L15.5596 10.6793L10.7352 8.57144H16V7.42857H10.7351L15.5596 5.32071L15.1021 4.27345L10.5426 6.26553L14.0609 2.7472L13.2528 1.93908L9.582 5.6099L11.5266 0.796588L10.467 0.368466L8.57144 5.06025V0Z" fill="#C332E6" />
                                </g>
                            </svg>
                            <div className='flex md:flex-row lg:flex-row xl:flex-row flex-col'>
                                <span className='font-bold pl-2 pr-1'>Stress-free experience: </span>
                                <span>Relax and let our professionals handle everything.</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
