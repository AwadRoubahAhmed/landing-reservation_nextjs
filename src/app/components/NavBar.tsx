"use client";
import Link from "next/link";
import { User, AlignJustify, X, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFilterContext } from "../context/Context";

export default function NavBar() {
  // State;
  const { isMenuOpen, setIsMenuOpen } = useFilterContext();
  // Comportements;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Gestion du menu
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/About" },
    { title: "Nos Offres", href: "/NosOffres" },
    { title: "Contact", href: "/Contact" },
  ];

  // Affichage(render);
  return (
    <nav className="bg-slate-950 bg-opacity-45 border-b text-slate-100 w-full h-10 flex fixed top-0 left-0 p-4 md:p-6 lg:p-8 z-10">
      <div className="container flex justify-between items-center">
        <div className="flex">
          <Link
            href="/"
            className="flex justify-center items-center text-lg lg:text-xl xl:text-2xl"
          >
            <Hotel
              size={20}
              className="text-2xl hover:text-yellow-500 lg:text-3xl xl:text-4xl lg:mt-3"
            />
            <h1 className="hover:text-yellow-500 font-bold">
              Villa hôtel
              <span className="font-bold text-yellow-500 text-2xl lg:text-3xl xl:text-4xl">
                .
              </span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:block space-x-4 text-md lg:text-lg">
          {menuItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="hover:text-yellow-500"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:block text-md lg:text-lg xl:text-xl">
          <Link href="/">
            <User className="text-slate-100 hover:text-yellow-500 " />
          </Link>
        </div>
        {/* Menu mobile */}
        <div className="flex md:hidden">
          <Button className="z-50" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </Button>
        </div>
      </div>
      {
        // Menu mobile
        isMenuOpen && (
          <div className="md:hidden absolute top-10 left-0 w-full bg-slate-800 bg-opacity-90 text-slate-100 transition">
            <div className="flex flex-col justify-center items-center h-[300px] space-y-4 font-bold">
              {menuItems.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="hover:text-yellow-500 text-base transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )
      }
    </nav>
  );
}
