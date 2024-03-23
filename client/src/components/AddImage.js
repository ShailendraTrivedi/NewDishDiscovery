import Image from "next/image";

export default function AddImage({ image }) {
  return (
    <div className="relative w-full h-full">
      <Image alt="Not Found" src={image.src} layout="fill" priority objectFit='cover'/>
    </div>
  );
}
