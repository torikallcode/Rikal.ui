import React from 'react'

export const CardLargeImage = () => {
  return (
    <a href="#" className="block">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="object-cover w-full h-64 sm:h-80 lg:h-96"
      />
      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>
      <p className="max-w-sm mt-2 text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
      </p>
    </a>
  )
}
