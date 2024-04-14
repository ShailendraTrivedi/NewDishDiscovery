"use client";

import { Recipes_Data } from "@/assets/data";
import ReadAllRecipesAction from "@/redux/actions/ReadAllRecipeAction";
import { ArrowRight, MessagesSquare, ThumbsUp } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddImage from "./AddImage";
import Image from "next/image";
import Loading from "@/app/loading";
import SearchRecipesAction from "@/redux/actions/SearchRecipesAction";

export default function ReadAllRecipes({ searchRecipe }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchRecipe) {
      dispatch(SearchRecipesAction(searchRecipe));
    }
  }, [searchRecipe]);

  useEffect(() => {
    dispatch(ReadAllRecipesAction());
  }, [dispatch]);

  const { loading, data } = useSelector((state) => state.storeRecipes);

  return (
    <div>
      {loading ? (
        <Loading message={"Wait for the recipes..."} />
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {data?.map((recipe, i) => (
            <div
              key={i}
              className="border-2 border-orange-500 rounded-xl overflow-hidden"
            >
              <div className="relative w-full h-[300px] bg-black10">
                <Image
                  alt="Image Not Found !"
                  fill
                  objectFit="cover"
                  src={recipe.recipeImage}
                  loader={() => recipe.recipeImage}
                />
              </div>
              <div className="w-full rounded-xl flex flex-col items-center gap-2 p-2">
                <div className="text-xl font-bold">{recipe.recipeTitle}</div>
                <div className="text-sm text-center">
                  {recipe.recipeIntroduction}
                </div>
                <div className="flex gap-2 text-sm font-bold">
                  Type:
                  <span className="border-2 border-green-500 p-1">
                    <div className="rounded-full h-3 w-3 bg-green-500" />
                  </span>
                </div>
                <div className="flex gap-2 text-sm font-bold">
                  Preperation Time:
                  <span className="text-orange-500">
                    {recipe.recipeCookingTime}
                  </span>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex gap-5">
                    <div className="flex gap-2">
                      {recipe.recipeLikes}
                      <ThumbsUp />
                    </div>
                    <div className="flex gap-2">
                      {recipe.recipeComments?.length}
                      <MessagesSquare />
                    </div>
                  </div>
                  <div className="flex underline gap-2">
                    Read More <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
