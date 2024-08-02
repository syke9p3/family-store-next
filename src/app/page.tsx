'use client'

import Link from "next/link";
import { BiSolidHome } from "react-icons/bi";
import { IoPricetag } from "react-icons/io5";

const links = [
  {
    name: "Home",
    href: "/",
    icon: <BiSolidHome />
  },
  {
    name: "Prices",
    href: "/prices",
    icon: <IoPricetag />
  },
]


export default function Page() {

  return (
    <main className="relative flex min-h-screen flex-col max-w-xl gap-4 bg-white max-h-[100dvh]">
      <nav className="bg-gray-200 p-3">
        <ul className="flex">
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <li className="flex flex-col items-center px-6 py-4 gap-1 hover:bg-gray-100 rounded-md">
                <p className="text-xl">
                  {link.icon}
                </p>
                <p className="text-xs">{link.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </main>
  );
}
