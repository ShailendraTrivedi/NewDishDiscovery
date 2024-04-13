import { LoginFields } from "@/components";

export default function Login() {
  return (
    <div className="h-screen overflow-y-hidden bg-auth_img bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[55rem] grid grid-cols-2 bg-white border-2 border-black rounded-xl p-5 gap-5">
          <header className="flex flex-col items-center gap-10 py-10">
            <div className="text-[24px] font-bold text-orange-500">
              Welcome to DishDicovery !
            </div>
            <div className="text-p text-gray-500 text-center">
              Login to explore a world of delicious recipes and dishes.
              Discover, cook, and share your culinary creations with food
              enthusiasts from around the globe.
            </div>
          </header>
          <LoginFields />
          <footer className="col-span-2 flex gap-2 justify-center text-h6">
            Need assistance? Contact our support team at
            <span className="font-bold">support@dishdiscovery.com</span>.
          </footer>
        </div>
      </div>
    </div>
  );
}
