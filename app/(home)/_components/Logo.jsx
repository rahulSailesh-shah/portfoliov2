import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={40}
      width={30}
      src="./logo.svg"
      alt="logo"
      className=" cursor-pointer"
    />
  );
};
