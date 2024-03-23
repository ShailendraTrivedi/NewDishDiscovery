import { CreateRecipeInputFields } from "@/components";

export default function CreateRecipe() {
  return (
    <div className="w-[1440px] mx-auto py-[5rem] space-y-10">
      <header className="flex flex-col justify-center items-center w-full gap-5">
        <h1 className="text-5xl text-orange-500 font-bold text-center">
          Welcome to the recipe creation page!
        </h1>
        <p className="text-center">
          Share your culinary masterpiece with the DishDiscovery community by
          filling out the following details for your new recipe.
        </p>
      </header>
      <CreateRecipeInputFields />
    </div>
  );
}
