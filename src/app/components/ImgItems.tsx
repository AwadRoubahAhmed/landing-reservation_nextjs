type ImgItemsProps = {
  selectedImg: string;
  item: string;
  handleSelectedImg: (item: string) => void;
};

export default function ImgItems({
  selectedImg,
  item,
  handleSelectedImg,
}: ImgItemsProps) {
  return (
    <>
      <img
        src={item}
        alt="Villa Picture"
        className={`w-full h-16 object-cover rounded-md cursor-pointer transition-all duration-300 gap-3 ${selectedImg === item && "ring-2 ring-yellow-500"}`}
        onClick={() => handleSelectedImg(item)}
      />
    </>
  );
}
