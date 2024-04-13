"use client";
import { AnimateTrash } from "@/assets/Images";
import DeleteRecipeAction from "@/redux/actions/DeleteRecipeAction";
import { Cross, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function DeleteConfirm({ deletedId, setDeletedId }) {
  const dispatch = useDispatch();
  const handleDeleteRecipeById = () => {
    dispatch(DeleteRecipeAction({ _id: deletedId }));
    setDeletedId(null);
  };
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50">
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative bg-white w-[40rem] h-[15rem] border-t-8 border-orange-500 rounded-xl">
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2
            -translate-y-1/2 w-[4rem] h-[4rem] rounded-full bg-orange-500"
            >
              <div className="w-full h-full flex justify-center items-center text-white">
                <Image
                  alt="ImageNot Found !"
                  height={50}
                  width={50}
                  src={AnimateTrash.src}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between items-center p-10 w-full h-full">
              <div className="">
                Are you absolutely certain that you wish to proceed with the
                deletion of this recipe? Once deleted, the information will be
                irretrievable. Please confirm your decision.
              </div>
              <div className="flex gap-10">
                <button
                  onClick={() => setDeletedId(null)}
                  className="flex gap-2 border-2 border-orange-500 w-[15rem] rounded-3xl items-center justify-center p-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteRecipeById()}
                  className="flex gap-2 bg-orange-500 text-white w-[15rem] rounded-3xl items-center justify-center p-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
