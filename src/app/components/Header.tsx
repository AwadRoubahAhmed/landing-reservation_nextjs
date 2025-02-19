import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header
      className="relative h-screen flex justify-center items-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url('/img-home3.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative text-center p-6">
        <h1 className="text-4xl md:text-6xl mb-4 text-white font-bold">
          Discover the World of Hotels
        </h1>
        <p className="text-lg md:text-2xl mb-4 text-white">
          Our world-class hotels are just a few clicks away
        </p>
        <Button className="w-52 bg-yellow-500 text-slate-100 font-bold py-3 px-6 mt-6 rounded-full animate-pulse">
          Book Now
        </Button>
      </div>
    </header>
  );
}
