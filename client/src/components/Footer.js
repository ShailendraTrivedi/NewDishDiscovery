import {
  Copyright,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  SendHorizontal,
  LinkedinIcon,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col h-[10rem] justify-between text-white">
      <div className="bg-[#1e1e1e] h-full flex justify-center items-center">
        <ul className="flex justify-center gap-2 list-none">
          <li>
            <Link
              href="#"
              type="button"
              className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10"
            >
              <Facebook />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              type="button"
              className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10"
            >
              <Twitter />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              type="button"
              className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10"
            >
              <Instagram />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              type="button"
              className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10"
            >
              <LinkedinIcon />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              type="button"
              className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10"
            >
              <Github />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              type="button"
              className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      {/*Copyright section*/}
      <div className="w-full p-4 text-center bg-black">
        <div className="flex justify-center items-center gap-2">
          <Copyright /> 2024 Copyright:
          <a className="text-whitehite" href="https://tailwind-elements.com/">
            DishDiscovery
          </a>
        </div>
      </div>
    </footer>
  );
}
