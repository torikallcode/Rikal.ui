import React from 'react'

export const CardPerson = () => {
  return (
    <article className="p-4 bg-gray-800 border border-gray-700 rounded-xl">
      <div className="flex items-center gap-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="object-cover rounded-full size-16"
        />

        <div>
          <h3 className="text-lg font-medium text-white">Claire Mac</h3>

          <div className="flow-root">
            <ul className="flex flex-wrap -m-1">
              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">Website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <a href="#" className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600">
            <strong className="font-medium text-white">Project A</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti,
              unde ab ut in!
            </p>
          </a>
        </li>

        <li>
          <a href="#" className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600">
            <strong className="font-medium text-white">Project B</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
            </p>
          </a>
        </li>
      </ul>
    </article>)
}
