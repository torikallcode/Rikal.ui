import React from 'react'

export const ButtonTransisi = ({ text }) => {
  return (
    <div className='flex gap-x-3'>
      {/* Left */}

      <a
        className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
        href="#"
      >
        <span
          className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
        ></span>

        <span
          className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
        >
          {text}
        </span>
      </a>

      {/* Right */}

      <a
        className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
        href="#"
      >
        <span
          className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
        ></span>

        <span
          className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
        >
          {text}
        </span>
      </a>

      {/* Bottom */}

      <a
        className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
        href="#"
      >
        <span
          className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
        ></span>

        <span
          className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
        >
          {text}
        </span>
      </a>

      {/* Top */}

      <a
        className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring"
        href="#"
      >
        <span
          className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
        ></span>

        <span
          className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
        >
          {text}
        </span>
      </a>
    </div>
  )
}
