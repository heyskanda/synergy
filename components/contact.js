import React from 'react'

export const Contact = () => {
  return (
    <div>
        <section className="py-6 bg-slate-900 text-red-600">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Contact Us</p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Student Co-ordinators</h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center  rounded-md md:w-96 lg:w-80 xl:w-64 bg-gradient-to-tr from-red-900 to-yellow-800 text-white">
                    <img className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://phx02pap002files.storage.live.com/y4mb4MNPXRrpLWyqicDCXZL3BmpaRcuYgjfdXmchHom3SBbX4MQGbktSkfQ4NQceLgU1R6zSGj6ECV0PPFNGVG-a3yRuDyUj_v2IWbZl3Kw3AJ2qTqkM2_SzNZCEmf5Wmsrv1xBjG9UwIF63II0J3FBqnvgIo-80FM3jbCsCYKw3wZ5RK6h-dCF7TKJ0mui5GMz?width=256&height=256&cropmode=none" width="256" height="256" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Saalihah</p>
                            <p>Student Co-ordinator</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 ">
                            <a href="tel:8073185668">
                                <h2 className='font-bold'>8073185668</h2>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center  rounded-md md:w-96 lg:w-80 xl:w-64 bg-gradient-to-tr from-red-900 to-yellow-800 text-white">
                    <img className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://phx02pap002files.storage.live.com/y4mV1NMdG3s2E2XHLCH5YMgFlKVX94gEp37kSGQlKCs8m8bU7P6JOOHj9wxco9buNb1cUjmsVgEw5lka6XugtRmpQrG9Zla2jAvun3W5bYW5AhmAi_ArRY88yxl-3Fws9Y6F5mlyPYxusbumlaEHs8cxuDcjXcgH1kzf85kvNJwp9jmh8t1IqNocDBUcr5ZgTdG?width=186&height=256&cropmode=none" width="180" height="256" />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">Skanda N</p>
                            <p>Student Co-ordinator</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 ">
                            <a href="tel:9980769400">
                                <h2 className='font-bold'>9980769400</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
