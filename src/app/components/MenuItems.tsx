import Link from "next/link";

type MenuItemsProps = {
  item: {
    href: string;
    title: string;
  };
};

export default function MenuItems({ item }: MenuItemsProps) {
  return (
    <>
      <Link href={item.href} className="hover:text-yellow-500">
        {item.title}
      </Link>
    </>
  );
}
