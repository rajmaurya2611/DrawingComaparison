import React from 'react';

const Button = () => {
  return (
    <button className="overflow-hidden relative w-32 p-2 h-12 bg-red-500 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group transition-colors duration-500 group-hover:bg-white group-hover:text-red-500">
      Log in
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-8 z-10">Log in</span>
    </button>
  );
}

export default Button;
