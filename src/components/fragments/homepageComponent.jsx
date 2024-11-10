import React from 'react'

export const HomepageComponent = () => {
  return (
    // <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
    //   <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    //     <div class="grid items-center grid-cols-1 md:grid-cols-2">
    //       <div>
    //         <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am <br class="block sm:hidden" />Jenny Carter</h2>
    //         <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    //         <p class="mt-4 text-xl text-gray-600 md:mt-8">
    //           <span class="relative inline-block">
    //             <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
    //             <span class="relative"> Have a question? </span>
    //           </span>
    //           <br class="block sm:hidden" />Ask me on <a href="#" title="" class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
    //         </p>
    //       </div>

    //       <div class="relative">
    //         <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

    //         <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <a href="#" className="relative block max-w-xl bg-black group">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>

        <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div
            className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p className="text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
              quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
            </p>
          </div>
        </div>
      </div>
    </a>

  )
}
