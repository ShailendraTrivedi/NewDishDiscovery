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
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ShowRecipeBook() {
  const [showConfirmDeletePopUp, setShowConfirmDeletePopUp] = useState(false);
  const { loading, data } = useSelector((state) => state.storeRecipe);
  console.log(data);
  return (
    <div>
      {/* PopUp Appear for confirmation to delete */}
      {showConfirmDeletePopUp && (
        <DeleteConfirm setShowConfirmDeletePopUp={setShowConfirmDeletePopUp} />
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
                  <div className="bg-black10 w-[80px] h-[80px]"></div>
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
                  {recipe.likes}
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center p-2">
                  {recipe.comments.length}
                </div>
              </td>
              <td>
                <div className="flex justify-between items-center p-2 w-full">
                  <Pencil className="cursor-pointer" />
                  <Trash
                    className="cursor-pointer"
                    onClick={() => setShowConfirmDeletePopUp(true)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
