import React from 'react'

export const ProductCard3 = () => {
  return (
    <a href="#" className="block group">
      <img
        src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt=""
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />

      <div className="flex justify-between mt-3 text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            Small Headphones
          </h3>

          <p className="mt-1.5 text-pretty text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam
            voluptatem nemo.
          </p>
        </div>

        <p className="text-gray-900">$299</p>
      </div>
    </a>)
}
