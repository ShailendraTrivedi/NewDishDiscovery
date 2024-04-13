"use client";
import { ErrorMessage, Form, Formik } from "formik";
import AddInput from "./AddInput";
import Link from "next/link";
import { useDispatch } from "react-redux";
import LoginAction from "@/redux/actions/LoginAction";
import { useRouter } from "next/navigation";

export default function LoginFields() {
  const dispatch = useDispatch();
  const router = useRouter()
  return (
    <section>
      <div className=" text-center font-bold py-10 px-2">
        Login to your account or create a new one to get started.
      </div>
      <Formik
        initialValues={{
          userEmail: "",
          userPassword: "",
        }}
        onSubmit={(values) => {
          dispatch(LoginAction(router, values));
        }}
      >
        {(values) => (
          <Form>
            <ul className="space-y-5">
              <li>
                <AddInput
                  label={"Email"}
                  id={"userEmail"}
                  value={values.userEmail}
                />
                <div className="text-sm text-red">
                  <ErrorMessage name="userEmail" />
                </div>
              </li>
              <li>
                <div className="">
                  <AddInput
                    type={"password"}
                    label={"Password"}
                    id={"userPassword"}
                    value={values.userPassword}
                  />
                  <div className="text-sm text-red">
                    <ErrorMessage name="userPassword" />
                  </div>
                  <div className="flex justify-end text-sm text-orange-500 cursor-pointer">
                    Forget Password ?
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-col justify-center items-center">
                  <button
                    type="submit"
                    className="border-2 border-orange-500 w-[10rem] p-2 rounded-full"
                  >
                    Login
                  </button>
                </div>
              </li>
              <li>
                <div className="flex gap-2 justify-center">
                  <span className="">New to DishDiscovery?</span>
                  <Link
                    href={"/register"}
                    className="text-orange-500 cursor-pointer"
                  >
                    Sign up here!
                  </Link>
                </div>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
      {/* <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col justify-around gap-5"
            >
              <Input
                id="email"
                type="text"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <div className="flex justify-end">
                <Link
                  to="/emailVerification"
                  className="text-[12px] text-orange-500"
                >
                  Forget Password ?
                </Link>
              </div>
              <Button
                onClick={formik.handleSignIn}
                className="border-2 border-orange-500"
                buttonName="Login"
              />
              <div className="flex gap-2 justify-center">
                <span className="">New to DishDiscovery?</span>
                <Link to="/signup" className="text-orange-500 cursor-pointer">
                  Sign up here!
                </Link>
              </div>
            </form> */}
    </section>
  );
}
