import { Recipes_Data } from "@/assets/data";
import { ArrowRight, MessagesSquare, Search, ThumbsUp } from "lucide-react";

export default function Discover() {
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
          />
        </div>
        <ul className="flex justify-center items-center gap-10">
          <li>
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10"></div>
          </li>
          <li>
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10"></div>
          </li>
          <li>
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10"></div>
          </li>
          <li>
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10"></div>
          </li>
          <li>
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10"></div>
          </li>
          <li>
            <div className="border-2 border-orange-500 h-[150px] w-[150px] rounded-full bg-black10"></div>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Recipes_Data.map((recipe, i) => (
          <div key={i} className="border-2 border-orange-500 rounded-xl">
            <div className="w-full h-[300px] bg-black10"></div>
            <div className="w-full rounded-xl flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">{recipe.title}</div>
              <div className="text-sm text-center">{recipe.introduction}</div>
              <div className="flex gap-2 text-sm font-bold">
                Type:
                <span className="border-2 border-green-500 p-1">
                  <div className="rounded-full h-3 w-3 bg-green-500" />
                </span>
              </div>
              <div className="flex gap-2 text-sm font-bold">
                Preperation Time:
                <span className="text-orange-500">{recipe.cookingTime}</span>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex gap-5">
                  <div className="flex gap-2">
                    {recipe.likes}
                    <ThumbsUp />
                  </div>
                  <div className="flex gap-2">
                    {recipe.comments.length}
                    <MessagesSquare />
                  </div>
                </div>
                <div className="flex underline gap-2">Read More <ArrowRight size={20}/></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
