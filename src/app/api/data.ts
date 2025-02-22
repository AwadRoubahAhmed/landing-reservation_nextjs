export type ArticlesVillaProps = {
  id: number;
  // img: string;
  title: string;
  description: {
    surface: number;
    bedrooms: number;
    bathrooms: number;
    hasPool: boolean;
    hasKitchen: boolean;
    area: number;
  };
};

export const ArticlesVilla = [
  {
    id: 1,
    // img: "/images/villa1.jpg",
    title: "Villa 1",
    description: {
      surface: 112,
      bedrooms: 5,
      bathrooms: 5,
      hasPool: true,
      hasKitchen: true,
      area: 100,
    },
  },
  {
    id: 2,
    // img: "/images/villa2.jpg",
    title: "Villa 2",
    description: {
      surface: 130,
      bedrooms: 7,
      bathrooms: 7,
      hasPool: true,
      hasKitchen: true,
      area: 120,
    },
  },
  {
    id: 3,
    // img: "/images/villa3.jpg",
    title: "Villa 3",
    description: {
      surface: 110,
      bedrooms: 6,
      bathrooms: 6,
      hasPool: true,
      hasKitchen: true,
      area: 110,
    },
  },
  {
    id: 4,
    // img: "/images/villa4.jpg",
    title: "Villa 4",
    description: {
      surface: 117,
      bedrooms: 5,
      bathrooms: 5,
      hasPool: true,
      hasKitchen: true,
      area: 125,
    },
  },
  {
    id: 5,
    // img: "/images/villa5.jpg",
    title: "Villa 5",
    description: {
      surface: 129,
      bedrooms: 7,
      bathrooms: 7,
      hasPool: true,
      hasKitchen: true,
      area: 130,
    },
  },
  {
    id: 6,
    // img: "/images/villa6.jpg",
    title: "Villa 6",
    description: {
      surface: 124,
      bedrooms: 6,
      bathrooms: 6,
      hasPool: true,
      hasKitchen: true,
      area: 115,
    },
  },
];
