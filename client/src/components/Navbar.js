import AddButton from "./AddButton";
import { Orange_Logo } from "@/assets/Images";
import { AddImage } from ".";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-[4rem] shadow-[0_0px_10px_0px_rgba(0,0,0,0.5)]">
      <div className="w-[1440px] h-[4rem] p-2 px-10 flex justify-between items-center mx-auto">
        <div className="w-[10rem] h-[10rem]">
          <AddImage image={Orange_Logo} />
        </div>
        <ul className="relative flex gap-5 items-center">
          <Link href="/">
            <li className="">Home</li>
          </Link>
          <Link href="/discover">
            <li className="">Discover</li>
          </Link>
          <Link href="/my_cookbook"><li className="">My Cookbook</li></Link>
          <Link href="/create_recipe"><li className="">Create Recipe</li></Link>
          <li className="">Logout</li>
          <li className="">
            <AddButton
              className="border-2 border-orange-500"
              buttonName="Login"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
