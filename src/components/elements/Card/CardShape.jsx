import React from 'react'

export const CardShape = () => {
  return (
    <a href="#" className="block">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        className="object-cover w-full h-56 rounded-bl-3xl rounded-tr-3xl sm:h-64 lg:h-72"
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="font-medium">Company Name</strong>

        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

        <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
      </div>
    </a>)
}
