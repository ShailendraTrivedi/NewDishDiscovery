import { RegisterFields } from "@/components";

export default function Register() {
  return (
    <div className="h-screen overflow-y-hidden bg-auth_img bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[55rem] flex flex-col justify-between p-5 bg-white border-2 border-black rounded-xl px-10">
          <section>
            <div className="text-[20px] text-center font-bold p-5">
              Login to your account or create a new one to get started.
            </div>
          </section>
          <RegisterFields />
          <footer className="col-span-2 flex gap-2 justify-center text-[12px]">
            Need assistance? Contact our support team at
            <span className="font-bold">support@dishdiscovery.com</span>.
          </footer>
        </div>
      </div>
    </div>
  );
}
