"use client";
import AddButton from "./AddButton";
import { Orange_Logo } from "@/assets/Images";
import { AddImage } from ".";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logoutAuth } from "@/redux/reducers/AuthReducer";
import Cookies from "js-cookie";
const isBrowser = typeof window !== "undefined";

export default function Navbar() {
  const dispatch = useDispatch();
  const auth =
    isBrowser &&
    (useSelector((state) => state.storeAuth.auth) ||
      localStorage.getItem("auth"));

  const router = useRouter();
  const handleLogout = () => {
    dispatch(logoutAuth());
    if (isBrowser) {
      localStorage.clear();
    }
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <div className="w-full h-[4rem] shadow-[0_0px_10px_0px_rgba(0,0,0,0.5)]">
      <div className="w-[1440px] h-[4rem] p-2 px-10 flex justify-between items-center mx-auto">
        <div className="w-[10rem] h-[10rem]">
          <AddImage image={Orange_Logo} />
        </div>
        <ul className="relative flex gap-5 items-center">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/discover">
            <li className="cursor-pointer">Discover</li>
          </Link>
          {auth ? (
            <>
              <Link href="/my_cookbook">
                <li className="cursor-pointer">My Cookbook</li>
              </Link>
              <Link href="/create_recipe">
                <li className="">Create Recipe</li>
              </Link>
              <li className="cursor-pointer" onClick={handleLogout}>
                Logout
              </li>
            </>
          ) : (
            <Link href="/login">
              <li className="cursor-pointer">
                <AddButton
                  className="border-2 border-orange-500"
                  buttonName="Login"
                />
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
