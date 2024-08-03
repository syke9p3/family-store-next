
import Link from "next/link";
import { useParams } from "next/navigation";
import { BiSolidHome } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import { IoPricetag } from "react-icons/io5";
import { RiFileList3Fill } from "react-icons/ri";

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
    {
        name: "Gcash",
        href: "/gcash",
        icon: <GiCash />
    },
    {
        name: "Order",
        href: "/order",
        icon: <RiFileList3Fill />
    },
]

const Navbar = () => {


    return (
        <nav className="bg-teal-500 px-4 rounded-lg text-white fixed bottom-5 right-8 left-8">
            <ul className="flex justify-center">
                {links.map((link, i) => (
                    <Link href={link.href} key={i}>
                        <li className="flex flex-col items-center px-6 py-4 hover:bg-gray-100/20 rounded-md">
                            <p className="text-xl">
                                {link.icon}
                            </p>
                            <p className="text-xs font-bold mt-2">{link.name}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar; 