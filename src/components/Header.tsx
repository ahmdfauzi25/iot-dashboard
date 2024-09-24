"use client";

import { Icons } from "./icons";
import { useState, useEffect } from "react";

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
    
  return (
    <div className="flex flex-col justify-center md:items-start md:flex-row md:justify-between md:mt-3 md:mx-3">
      <div className="flex flex-col md:mt-0 text-center md:text-left ">
        <h1 className="text-xl md:text-4xl font-bold text-shadow-lg shadow-slate-800 uppercase">
          Light Station
        </h1>
        <div className="flex justify-center md:justify-start items-center gap-1">
          {/* <Icons.currentLocation className="w-6 h-6 md:block"/>

          <p className="text-sm md:text-xl text-shadow shadow-slate-800 ">
            California,Buena Park, CA 90621
          </p> */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-xl md:text-3xl">
          {currentTime.toLocaleTimeString('id-ID')}
        </h1>
        <p className="text-sm md:text-xl">
          {currentTime.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}