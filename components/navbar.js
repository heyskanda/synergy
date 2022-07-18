import Image from "next/dist/client/image"
import Link from "next/link"
import { useState } from "react"

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <header className="bg-slate-900 sticky">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-300">
              <span className="sr-only">Home</span>
              <Image src="/../public/synergy.png" width='140px' height='52px' classNameName='' alt='synergy'/>
            </a>
          </div>

          <div className={isOpen == true ? "md:flex md:items-center md:gap-12 bg-slate-900 p-5 md:p-0" : "md:flex md:items-center md:gap-12 bg-slate-900"}>
            <nav className={ isOpen == true ? "flex flex-col md:block " : "hidden md:block"} aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">Header navigation</h2>

              <ul className="flex flex-col relative md:flex-row items-center md:gap-8 pt-32  md:pt-0 text-base" >
                <li>
                  <Link href="/">
                    <a className="text-yellow-500 transition hover:text-red-600">
                      Home
                    </a>
                  </Link>
                </li>
                
                <li>
                  <Link href="/About">
                    <a className="text-yellow-500 transition hover:text-red-600">
                      About
                    </a>
                  </Link>
                </li>

                {/* <li>
                  <Link href="/Event">
                    <a className="text-yellow-500 transition hover:text-red-600">
                      Events
                    </a>
                  </Link>
                </li> */}

                <li>
                  <Link href="/Contactus">
                    <a className="text-yellow-500 transition hover:text-red-600 ">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 mt-3 md:mt-0">
              <div className="sm:gap-4 sm:flex">
                <a
                  className="px-5 py-2.5 text-sm font-medium text-yellow-500 bg-red-700 border border-red-700 rounded-md shadow hover:bg-transparent"
                  href="https://forms.gle/nC2TE97RPkRzFpKV6"
                >
                  Register Now
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  className="p-2 text-white transition bg-gray-800 rounded hover:text-white/75"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
