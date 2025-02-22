"use client";
// import Image from "next/image";
import { useState } from "react";
import ImgItems from "./ImgItems";

// Fonctions;
const imagesGaleries = [
  "villa1.jpg",
  "villa2.jpg",
  "villa3.jpg",
  "villa4.jpg",
  "villa5.jpg",
  "villa6.jpg",
];

export default function Galeries() {
  // State;
  const [selectedImg, setSelectedImg] = useState<string>(imagesGaleries[0]);
  const [infosDetail, setInfosDetail] = useState([])
  // Comportements;
  const handleSelectedImg = (item: string) => setSelectedImg(item);

  // Rendu;
  return (
    <section className="max-w-[1200px] mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-center">
        <div className="w-full h-[300px] md:w-3/4 md:h-[600px]">
          <img
            src={selectedImg}
            alt="Villa Picture"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mt-4 md:mt-0 md:ml-4 overflow-x-auto md:overflow-x-visible">
          {imagesGaleries.map((item, index) => (
            <ImgItems
              key={index}
              selectedImg={selectedImg}
              item={item}
              handleSelectedImg={handleSelectedImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
