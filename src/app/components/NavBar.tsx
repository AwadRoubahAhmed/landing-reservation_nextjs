"use client";
import Link from "next/link";
import { User, AlignJustify, X, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFilterContext } from "../context/Context";
import MenuItems from "./MenuItems";
import { menus } from "../constant/Constants";

export default function NavBar() {
  // State;
  const { isMenuOpen, setIsMenuOpen } = useFilterContext();
  // Comportements;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Affichage(render);
  return (
    <nav className="flex bg-slate-950 bg-opacity-45 border-b text-slate-100 w-full h-10 fixed top-0 left-0 p-4 md:p-6 lg:p-8 z-10">
      {/* container */}
      <div className="container flex justify-between items-center">
        {/* Logo ( Icon + Title ) */}
        <div className="flex">
          <Link
            href="/"
            className="flex justify-center items-center text-lg lg:text-2xl xl:text-3xl"
          >
            <Hotel
              size={20}
              className="text-xl hover:text-yellow-500 lg:text-2xl xl:text-3xl "
            />
            <h1 className="hover:text-yellow-500 font-bold">
              Villa hôtel
              <span className="font-bold text-yellow-500 text-xl lg:text-2xl xl:text-3xl">
                .
              </span>
            </h1>
          </Link>
        </div>
        {/* Menu déroulant */}
        <div className="hidden md:flex justify-center items-center space-x-4 text-md lg:text-lg">
          {menus.map((item) => (
            <MenuItems key={item.href} item={item} />
          ))}
        </div>
        {/* Utilisateur connecté */}
        <div className="hidden md:block text-md lg:text-lg xl:text-xl border rounded-full p-0.5">
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
          <div className="md:hidden absolute top-10 left-0 w-full bg-slate-950 bg-opacity-90 text-slate-100 transition">
            <div className="flex flex-col justify-center items-center h-[300px] space-y-4 font-bold">
              {menus.map((item) => (
                <MenuItems key={item.href} item={item} />
              ))}
            </div>
          </div>
        )
      }
    </nav>
  );
}
