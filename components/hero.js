import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';

export default function Hero() {
  return (
    <section className="text-white bg-gradient-to-tr from-slate-900 via-slate-900 to-red-900">
      <div className="h-[60vh] px-4 flex items-center justify-center">
        <div className="text-center">
          <img
            src="synergy.png"
            width="208px"
            height="77px"
            className="mx-auto"
            alt="synergy"
          />

          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-red-900 via-red-500 to-red-900">
            SYNERGY 2K22
          </h1>
          <p className="text-md font-bold text-yellow-500 py-2"> PRESENTS </p>
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-red-900 via-red-500 to-red-900">
            INTRÈPID
          </h1>

          <p className="max-w-xl mx-auto text-yellow-500 mt-4 sm:leading-relaxed sm:text-xl">
            EXPLORE . DREAM . DISCOVER
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-40 px-3 py-2 md:w-52 text-sm font-medium text-yellow-200 border border-red-700 rounded sm:w-auto bg-red-700 hover:bg-transparent active:bg-red-700 focus:outline-none focus:ring"
              href="https://forms.gle/nC2TE97RPkRzFpKV6"
            >
              Register Now
            </a>

            <Link href="/About">
              <a className="block w-40 px-3 py-2 md:w-52 text-sm font-medium text-yellow-200 border border-red-700 rounded sm:w-auto hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
