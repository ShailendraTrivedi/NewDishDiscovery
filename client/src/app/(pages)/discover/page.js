"use client";
import { AddImage, ReadAllRecipes } from "@/components";
import { useState } from "react";

export default function Discover() {
  const [searchRecipe, setSearchRecipe] = useState(null);
  const handleSearch = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setSearchRecipe(e.target.value);
    }
  };
  return (
    <div className="w-[1440px] mx-auto py-[5rem] space-y-20">
      {/* Header Section */}
      <div className="space-y-5">
        <h1 className="text-5xl text-orange-500 font-bold text-center">
          Discover Delicious Recipes!
        </h1>
        <p className="text-center px-10">
          Welcome to the Discovery Page, your gateway to a world of culinary
          inspiration. Whether you&apos;re an experienced chef or a passionate
          home cook, this is where you&apos;ll find exciting new recipes to
          tantalize your taste buds.
        </p>
        <div className="flex border-2 border-orange-500 rounded-3xl ps-10 overflow-hidden mx-[10%]">
          <input
            type="text"
            placeholder="Let Search The Recipe..."
            className="focus:outline-none w-full p-2"
            onKeyDown={(e) => handleSearch(e)}
          />
        </div>
        <ul className="flex justify-center items-center gap-10">
          <li className="flex flex-col">
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10 overflow-hidden">
              <img src="/discover_images/Breakfast.png" alt="" className="" />
            </div>
            <label htmlFor="" className="text-center text-orange-500">
              Breakfast
            </label>
          </li>
          <li className="flex flex-col">
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10 overflow-hidden">
              <img src="/discover_images/Lunch.png" alt="" className="" />
            </div>
            <label htmlFor="" className="text-center text-orange-500">
              Lunch
            </label>
          </li>
          <li className="flex flex-col">
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10 overflow-hidden">
              <img src="/discover_images/Dinner.png" alt="" className="" />
            </div>
            <label htmlFor="" className="text-center text-orange-500">
              Dinner
            </label>
          </li>
          <li className="flex flex-col">
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10 overflow-hidden">
              <img src="/discover_images/Snack.png" alt="" className="" />
            </div>
            <label htmlFor="" className="text-center text-orange-500">
              Snack
            </label>
          </li>
          <li className="flex flex-col">
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10 overflow-hidden">
              <img src="/discover_images/IceCream.png" alt="" className="" />
            </div>
            <label htmlFor="" className="text-center text-orange-500">
              IceCream
            </label>
          </li>
          <li className="flex flex-col">
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10 overflow-hidden">
              <img src="/discover_images/ColdDrink.png" alt="" className="" />
            </div>
            <label htmlFor="" className="text-center text-orange-500">
              ColdDrink
            </label>
          </li>
        </ul>
      </div>
      <ReadAllRecipes searchRecipe={searchRecipe} />
    </div>
  );
}
