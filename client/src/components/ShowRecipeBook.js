"use client";
import {
  Calendar,
  Images,
  LayoutDashboard,
  MessageCircle,
  Pencil,
  Tag,
  ThumbsUp,
  Timer,
  Trash,
} from "lucide-react";
import Image from "next/image";
import DeleteConfirm from "./DeleteConfirm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReadAllRecipesAction from "@/redux/actions/ReadAllRecipeAction";
import Loading from "@/app/loading";

export default function ShowRecipeBook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ReadAllRecipesAction());
  }, [dispatch]);
  const { loading, data } = useSelector((state) => state.storeRecipe);
  console.log({loading, data});
  const [deletedId, setDeletedId] = useState(null);

  const handleDeleteRecipe = (_id) => {
    setDeletedId(_id);
  };
  return (
    <div className="">
      {loading ? (
        <Loading message={"Wait your recipe is loading..."} />
      ) : (
        <div>
          {/* PopUp Appear for confirmation to delete */}
          {deletedId && (
            <DeleteConfirm deletedId={deletedId} setDeletedId={setDeletedId} />
          )}
          {/* Main Code Here */}
          <div className=""></div>
          <table className="w-[1400px] mx-auto border-2 border-black rounded-xl overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th>
                  <div className="flex gap-2 items-center justify-center p-2">
                    <Images />
                    Image
                  </div>
                </th>
                <th>
                  <div className="flex gap-2 items-center justify-center p-2">
                    <Tag />
                    Title
                  </div>
                </th>
                <th>
                  <div className="flex gap-2 items-center justify-center p-2">
                    <Calendar />
                    Publish Date
                  </div>
                </th>
                <th>
                  <div className="flex gap-2 items-center justify-center p-2">
                    <LayoutDashboard />
                    Category
                  </div>
                </th>
                <th>
                  <div className="flex gap-2 items-center justify-center p-2">
                    <Timer />
                    Cooking Time
                  </div>
                </th>
                <th>
                  <div className="flex gap-2 items-center justify-center p-2">
                    <ThumbsUp />
                    Like
                  </div>
                </th>
                <th>
                  <div className="flex gap-2 items-center justify-center p-2">
                    <MessageCircle />
                    Comment
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((recipe, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex justify-center items-center p-2">
                      <div className="relative bg-black10 w-[80px] h-[80px]">
                        <Image
                          alt="Image Not Found !"
                          fill
                          objectFit="cover"
                          src={recipe.recipeImage}
                          loader={() => recipe.recipeImage}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center p-2">
                      {recipe.recipeTitle}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center p-2">
                      23 March, 2024
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center p-2">
                      {recipe.recipeCategory}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center p-2">
                      {recipe.recipeCookingTime}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center p-2">
                      {recipe.recipeLikes}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center p-2">
                      {recipe.recipeComments?.length}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-between items-center p-2 w-full">
                      <Pencil className="cursor-pointer" />
                      <Trash
                        className="cursor-pointer"
                        onClick={() => handleDeleteRecipe(recipe._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
