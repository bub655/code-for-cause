'use client';

export const Hero = () => {
  return (<>
    <div className="pt-20 text-center">
      <div className="pb-4">
        <span className="font-black shadow-purple-400 text-8xl">Code for a </span>
        <span className="font-black drop-shadow-[4px_6px_var(--tw-shadow-color)] shadow-[#896FBC] text-8xl">Cause</span>
      </div>
      <div className="font-bold text-purple-100 text-3xl pb-4">
        The first social good hackathon for middle- and high-schoolers.
      </div>
      <div className="p-2 mb-16 w-fit mt-6 ml-auto mr-auto bg-[#D9D9D9] rounded-full ">
        <form onSubmit={() => { }} className="flex items-center justify-between space-x-8" >
          <input type="email" placeholder="Your Email" className="ml-4 w-68 bg-transparent text-black pl-3 text-2xl font-bold border-b-[4px] border-[#7953C5]" />
          <button type="submit" className="bg-[#896FBC] hover:bg-[#7953C5] font-semibold text-white px-4 py-2 rounded-full text-2xl">I&apos;m interested! </button>
        </form>
      </div>
      <div className="w-fit ml-auto mr-auto bg-[#D9D9D9] rounded-full p-6">
        <div className="text-black font-bold space-x-4 text-xl ml-2 mr-2">
          <span>691 S Milpitas Blvd.</span>
          <span className="text-2xl">|</span>
          <span>December 9, 2023</span>
        </div>
      </div>
    </div>
  </>)
}