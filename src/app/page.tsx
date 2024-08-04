'use client'

import Image from "next/image";
import Link from "next/link";
import Navbar from "./ui/prices/navbar";
import { ListSkeleton } from "./ui/skeleton";


export default function Page() {

  return (
    <main className="relative flex min-h-screen flex-col gap-4 bg-white max-h-[100dvh]">
      {/* <Header title="Family Store" /> */}
      <div className="flex-grow">
        <div className="p-12 pb-[80px] flex flex-col gap-2 bg-teal-500 text-white">
          <h1 className="font-bold text-4xl">Welcome!</h1>
          <p className="text-sm opacity-80">Family Store Manager - search for prices of items with ease</p>
        </div>
        <div className="grid grid-cols-2 m-8 gap-4 mt-[-50px]">
          <Link href={'/prices'} className="bg-white text-center p-8 rounded-md shadow-md border 
          hover:-translate-y-3 transition-all duration-150 ease-in-out
          ">
            <div className="flex flex-col items-center">
              <Image
                width={150}
                height={40}
                src="/illustration/receipt.png"
                alt=""
              />
            </div>
            <p className="font-bold opacity-80">Price Tracker</p>
          </Link>
          <Link href={'/prices'} className="bg-white text-center p-8 rounded-md shadow-md border
          hover:-translate-y-3 transition-all duration-150 ease-in-out
          ">
            <div className="flex flex-col items-center">
              <Image
                width={150}
                height={40}
                src="/illustration/money.png"
                alt=""
              />
            </div>
            <p className="font-bold opacity-80">Gcash Charge List</p>
          </Link>
        </div>
        <Navbar />
      </div >
    </main >
  );
}

const Banner = () => {
  return (
    <div className=" 
    min-h-[50dvh]
    bg-cover bg-no-repeat bg-center 
      bg-[url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
      ">
    </div>
  )
}

const HomeCard = () => {
  return (
    <div>
      <div className="grid rounded-md bg-teal-500 p-4 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-xl">Family Store Manager</h1>
          <p className="text-sm text-white/80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores odio labore minus eveniet quae deleniti rerum eos reprehenderit aspernatur dolorum!</p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4">
        <div className="grid rounded-md bg-teal-500 p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-bold text-xl">Price Tracker</h1>
            <p className="text-sm text-white/80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores odio labore minus eveniet quae deleniti rerum eos reprehenderit aspernatur dolorum!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
