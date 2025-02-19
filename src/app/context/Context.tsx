"use client";

// Imports;
import {
  Dispatch,
  createContext,
  SetStateAction,
  useState,
  useContext,
} from "react";

// Types;
type ContextPropsType = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  selectedImg: string;
  setSelectedImg: Dispatch<SetStateAction<string>>;
};

/////////////////////////////////////// 1 ////////////////////////
// 1. Création de Context;
export const Context = createContext<ContextPropsType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  selectedImg: "",
  setSelectedImg: () => {},
});

// Fonctions;
const imagesGaleries = [
  "room1.jpg",
  "room2.jpg",
  "room3.jpg",
  "room4.jpg",
  "room5.jpg",
  "room1.jpg",
];

/////////////////////////////////////// 2 ////////////////////////
// 2. Installations de Context(Provider);
export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string>(imagesGaleries[0]);

  // Comportements;

  // Définition des valeurs dans le ContextProvider.
  return (
    <Context.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        selectedImg,
        setSelectedImg,
      }}
    >
      {children}
    </Context.Provider>
  );
};

/////////////////////////////////////// 3 ////////////////////////
// 3. Consommation de Context;
export const useFilterContext = () => {
  const filterContext = useContext(Context);
  return filterContext;
};
