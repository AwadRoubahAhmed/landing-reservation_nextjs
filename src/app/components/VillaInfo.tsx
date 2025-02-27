"use client";

import { CookingPot, Waves, Bath, Bed, Square, Fence } from "lucide-react";
type VillaInfoProps = {
  square: number;
  bedrooms: number;
  bathrooms: number;
  hasPool: boolean;
  hasKitchen: boolean;
  fence: boolean;
};

export const VillaInfo: React.FC<VillaInfoProps> = ({
  square,
  bedrooms,
  bathrooms,
  hasPool,
  hasKitchen,
  fence,
}) => {
  return (
    <section className="max-w-[800px] min-h-[300px] mx-auto bg-slate-100 rounded-md shadow-xl p-8">
      <h2 className="font-semibold text-2xl text-center mb-8">Informations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center space-x-2">
          {hasPool && <Waves className="text-blue-500" />}
          <span className="text-lg font-light">Piscine</span>
        </div>

        <div className="flex items-center space-x-2">
          {hasKitchen && <CookingPot className="text-sky-500" />}
          <span className="text-lg font-light">Cuisine aménagée</span>
        </div>

        <div className="flex items-center space-x-2">
          {Bath && <Bath className="text-yellow-500" />}
          <span className="text-lg font-light">
            {bathrooms} Salle(s) de bain
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {Bed && <Bed className="text-cyan-500" />}
          <span className="text-lg font-light">{bedrooms} Chambre(s)</span>
        </div>

        <div className="flex items-center space-x-2">
          <Square className="text-purple-500" />
          <span className="text-lg font-light">Surface {square}m carée</span>
        </div>

        <div className="flex items-center space-x-2">
          {fence && <Fence className="text-green-500" />}
          <span className="text-lg font-light">Jardin</span>
        </div>
      </div>
      <p className="mt-6 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        recusandae quam animi ut est sint, quibusdam a quia beatae dignissimos
        aliquid laboriosam. Asperiores natus ullam aspernatur, minima
        perferendis similique fugit incidunt temporibus quasi maiores maxime
        commodi, reiciendis possimus molestias harum illo assumenda nobis est
        nam et animi, ad obcaecati eaque?
      </p>
    </section>
  );
};
