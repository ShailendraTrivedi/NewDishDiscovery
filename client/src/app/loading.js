import Image from "next/image";
import { LoadingAnimation } from "@/assets/Images";
import { AddImage } from "@/components";

export default function Loading({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="relative w-[10rem] h-[10rem]">
        <Image
          alt="Image Not Found"
          src={LoadingAnimation.src}
          fill
          objectFit="cover"
        />
      </div>
      <div className="">{message || "Loading..."}</div>
    </div>
  );
}
