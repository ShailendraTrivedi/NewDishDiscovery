import { ShowRecipeBook } from "@/components";

export default function MyCookbook() {
  return (
    <div className="w-[1440px] mx-auto py-[5rem] space-y-10">
      <header className="flex flex-col justify-center items-center w-full gap-5">
        <h1 className="text-5xl text-orange-500 font-bold text-center">
          Welcome to Your Cookbook!
        </h1>
        <p className="text-center">
          Your Cookbook is your culinary haven where you can manage and organize
          all your saved recipes in one place. It&apos;s your personal
          collection of delicious creations waiting to be explored and enjoyed.
        </p>
      </header>
      <ShowRecipeBook />
    </div>
  );
}
