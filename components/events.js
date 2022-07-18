import React from 'react'
import Link from 'next/link'

export default function Events() {
  return (
    <div>
        <section className="text-yellow-500 bg-gradient-to-br from-red-900 via-slate-900 to-slate-900">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-red-600">Events</h2>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/Manager">
                    <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl">
                        <div className="mt-16 sm:pr-8">
                        <h5 className="text-xl font-bold text-slate-200">Best Manager</h5>
                        <p className="mt-2 text-sm text-gray-500">
                            Earth&apos;s mysterious eighth continent doesn&apos;t appear on most conventional maps. &quot;If we... 
                        </p>
                        </div>
                    </a>
                </Link>
                </div>
                
                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/Ceo">
                    <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl" >
                        <div className="mt-16 sm:pr-8">
                        <h5 className="text-xl font-bold text-slate-200">Best CEO</h5>
                        <p className="mt-2 text-sm text-gray-500">
                        Asia, home to more than 60% of the total world population has a lot more to wonder...
                        </p>
                        </div>
                    </a>
                </Link>
                </div>

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/Marketing">
                    <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl" >
                        <div className="mt-16 sm:pr-8">
                        <h5 className="text-xl font-bold text-slate-200">Marketing</h5>
                        <p className="mt-2 text-sm text-gray-500">
                        Europe is one of the largest advertising markets worldwide with its geography...
                        </p>
                        </div>
                    </a>
                </Link>
                </div>

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/Rnd">
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl">
                    <div className="mt-16 sm:pr-8">
                    <h5 className="text-xl font-bold text-slate-200">Research & Development</h5>
                    <p className="mt-2 text-sm text-gray-500">
                        It&apos;s cold, but you guessed that already, it&apos;s also the highest and windiest...
                    </p>
                    </div>
                </a>
                </Link>
                </div>

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/Finance">
                
                    <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl">
                        <div className="mt-16 sm:pr-8">
                        <h5 className="text-xl font-bold text-slate-200">Finance</h5>
                        <p className="mt-2 text-sm text-gray-500">
                            Australia is a highly developed country with the world&apos;s thirteenth largest...
                        </p>
                        </div>
                    </a>
                </Link>
                </div>

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/Quiz">
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl">
                    <div className="mt-16 sm:pr-8">
                    <h5 className="text-xl font-bold text-slate-200">Business Quiz</h5>
                    <p className="mt-2 text-sm text-gray-500">
                        Through the middle of this continent runs the line of the equator and...
                    </p>
                    </div>
                </a>
                </Link>
                </div>

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/Photography"> 
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl" >
                    <div className="mt-16 sm:pr-8">
                    <h5 className="text-xl font-bold text-slate-200">Photography</h5>
                    <p className="mt-2 text-sm text-gray-500">
                    Goodbye Atlantis, Hello &quot;Greater Adria&apos;. Take a hike along the mountain belts scattered...
                    </p>
                    </div>
                </a>
                </Link> 
                </div>

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="/HR">
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl">
                    <div className="mt-16 sm:pr-8">
                    <h5 className="text-xl font-bold text-slate-200">Human Resource</h5>
                    <p className="mt-2 text-sm text-gray-500">
                    &quot;You&apos;re not just recruiting employees, but are sowing the seeds of your reputation...
                    </p>
                    </div>
                </a>
                </Link>
                </div>

                <div className="p-1 shadow-xl bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 rounded-2xl">
                <Link href="PR">
                <a className="block p-6 bg-slate-900 sm:p-8 rounded-xl" href="PR">
                    <div className="mt-16 sm:pr-8">
                    <h5 className="text-xl font-bold text-slate-200">Public Relations</h5>
                    <p className="mt-2 text-sm text-gray-500">
                        North America, home to &quot;The Statue of Liberty Enlightening the World&quot; was...
                    </p>
                    </div>
                </a>
                </Link>
                </div>

                </div>

                <div className="mt-12 text-center">
                <a
                    className="inline-flex items-center px-8 py-3 mt-8 text-yellow-300 bg-red-700 border border-red-700 rounded hover:bg-transparent active:text-blue-500 focus:outline-none focus:ring"
                    href="https://forms.gle/nC2TE97RPkRzFpKV6"
                >
                    <span className="text-sm font-medium"> Get Started </span>

                    <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                    </svg>
                </a>
                </div>
            </div>
            </section>
    </div>
  )
}
