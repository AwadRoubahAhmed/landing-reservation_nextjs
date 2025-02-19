"use client";
// import Image from "next/image";
import { useState } from "react";

// Fonctions;
const imagesGaleries = [
  "room1.jpg",
  "room2.jpg",
  "room3.jpg",
  "room4.jpg",
  "room5.jpg",
  "room1.jpg",
];

export default function Galeries() {
  // State;
  const [selectedImg, setSelectedImg] = useState<string>(imagesGaleries[0]);

  // Comportements;
  // const handleSelectedImg = (roomImg: string) => setSelectedImg(roomImg);

  // Rendu;
  return (
    <section className="max-w-[1200px] mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-center">
        <div className="w-full h-[300px] md:w-3/4 md:h-[600px]">
          <img
            src={selectedImg}
            alt="Villa Picture"
            // width={400}
            // height={600}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex  md:flex-col space-x-4 md:space-x-0 md:space-y-4 mt-4 md:mt-0 md:ml-4 overflow-x-auto md:overflow-x-visible">
          {imagesGaleries.map((item, index) => (
            <img
              src={item}
              alt=""
              key={index}
              // width={400}
              // height={600}
              className={`w-full h-16 object-cover rounded-md cursor-pointer transition-all duration-300 gap-3 ${selectedImg === item && "ring-2 ring-yellow-500"}`}
              onClick={() => setSelectedImg(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
