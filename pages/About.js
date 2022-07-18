import React from 'react'
import Navbar from '../components/navbar'

export default function About() {
  return (
    <div>
        <Navbar />

        <div className='bg-gradient-to-bl h-full from-slate-900 via-slate-900 to-red-900 text-center p-10'>
        
            <h2 className="text-3xl font-bold sm:text-4xl text-red-600">Introduction</h2>

            <p className=" mt-6 text-lg px-6 text-justify text-yellow-500 md:px-12 lg:px-[14rem] xl:px-[18rem] 2xl:px-[22rem]">
            Shri Dharmasthala Manjunatheshwara College of Business Management is a unique, dynamic and professional management education institution, was established in the year 1987. It is a pioneer institution in the field of management studies at the under graduate level. The college is sponsored and managed by the SDME society, Ujire, of which great visionary padmavibhusan Dr. D Veerendra Heggade is the president. The institution is run under the able guidance of our principal prof. Aruna P Kamath.
            </p>

            <h2 className="text-3xl font-bold mt-5 sm:text-4xl text-red-600">Our Vision</h2>

            <p className=" mt-6 text-lg px-6 text-justify text-yellow-500 md:px-12 lg:px-[14rem] xl:px-[18rem] 2xl:px-[22rem]">
            Connecting minds, creating the future, bringing the world together to catalyse and exchange new perspectives and inspire action to deliver solutions to the challenges. Be it exposure to different worlds of business and management or discussion of world issues, Synergy has it all. Aims at being an unforgettable experience for undergraduates.
            </p>

            <h2 className="text-3xl font-bold mt-5 sm:text-4xl text-red-600">INTRÈPID</h2>

            <p className=" mt-6 text-lg px-6 text-justify text-yellow-500 md:px-12 lg:px-[14rem] xl:px-[18rem] 2xl:px-[22rem]">
            Presenting opportunities to young professionals to explore and embrace the dynamic corporate world. We believe passionately in the power of ideas to change attitudes, lives and ultimately, the world. So, we&apos;re building here a real-life corporate arena that offers inspiration to young professionals, and also to a community of curious souls to engage with ideas and each other. Synergy seeks to reach out to colleges across the length and breadth of the nation to bring out the best in our young minds.
            </p>
        </div>
    </div>
  )
}
