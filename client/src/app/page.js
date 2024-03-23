import { Home_Img } from "@/assets/Images";
import { AddImage } from "@/components";
import { Home_Header_Data, Home_Section_Data } from "@/assets/data";
import { MoveRight } from "lucide-react";
export default function Home() {
  return (
    <div className="">
      {/* Header */}
      <header className="grid grid-cols-2 h-screen">
        <div className="w-full h-full overflow-hidden">
          <AddImage image={Home_Img} />
        </div>
        <ul className="grid grid-cols-2 gap-5 p-10 h-full scrollbar_remover">
          {Home_Header_Data.map((item, i) => (
            <li key={i} className="border-2 border-orange-500 p-1 h-[12rem]">
              <div className="border-2 border-orange-500 w-full h-full flex flex-col gap-2 justify-around py-5 px-2 items-center overflow-hidden">
                <span className="font-bold text-lg">{item.recipeName}</span>
                <p className="text-center">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </header>
      <section className="mx-auto w-[1440px] py-[5rem] space-y-10">
        {Home_Section_Data.map((category, i) => (
          <div key={i} className="flex flex-col gap-5">
            <header className="text-3xl font-bold flex justify-center items-center gap-2 text-orange-500">
              {category.name}
              <MoveRight />
            </header>
            <section className="grid grid-cols-3 gap-5">
              {category.recipes.map((item, j) => (
                <div key={j} className="flex flex-col gap-5">
                  <div className="h-[300px] w-full bg-black10"></div>
                  <div className="text-center text-lg font-bold w-full">
                    {item.name}
                  </div>
                  <p className="text-center">{item.description}</p>
                </div>
              ))}
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
