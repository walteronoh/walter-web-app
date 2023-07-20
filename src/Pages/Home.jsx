import React from 'react';
import '../App.css';

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 text-center">
      <div className="py-8 px-4  text-center lg:py-16">
        <div className="mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hi, I'm Walter Kiprono</div>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Tag me on ReactJs, NodeJs, Flutter, ASP.NET and .NETcore Projects</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="/portfolio" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Check out my projects
            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
