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

export default function ShowRecipeBook() {
  return (
    <div>
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
          <tr>
            <td>
              <div className="flex justify-center items-center p-2">
                <div className="bg-black10 w-[80px] h-[80px]"></div>
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center p-2">
                Mouthwatering Veggie Pizza
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center p-2">
                23 March, 2024
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center p-2">Dinner</div>
            </td>
            <td>
              <div className="flex justify-center items-center p-2">
                30 minutes
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center p-2">235</div>
            </td>
            <td>
              <div className="flex justify-center items-center p-2">7</div>
            </td>
            <td>
              <div className="flex justify-between items-center p-2 w-full">
                <Pencil className="cursor-pointer" />
                <Trash className="cursor-pointer" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
