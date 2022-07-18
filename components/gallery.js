import React from 'react'

export default function Gallery() {
  return (
    <section className="md:px-20 bg-slate-900">
        <div className="container flex flex-col justify-center p-4 mx-auto">
            <h2 className='text-center mb-6 text-white text-4xl font-bold'>Gallery</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img className="object-cover w-full dark:bg-gray-500 aspect-square rounded-md" src="https://source.unsplash.com/random/300x300/?1" />
                <img className="object-cover w-full dark:bg-gray-500 aspect-square rounded-md" src="https://source.unsplash.com/random/300x300/?2" />
                <img className="object-cover w-full dark:bg-gray-500 aspect-square rounded-md" src="https://source.unsplash.com/random/300x300/?3" />
                <img className="object-cover w-full dark:bg-gray-500 aspect-square rounded-md" src="https://source.unsplash.com/random/300x300/?4" />
            </div>
        </div>
    </section>
  )
}
