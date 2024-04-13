"use client";
import { ErrorMessage, Form, Formik } from "formik";
import AddInput from "./AddInput";

export default function RegisterFields() {
  return (
    <div>
      <Formik
        initialValues={{
          userEmail: "",
          userPassword: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
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
                </div>
              </li>
              <li>
                <div className="flex flex-col justify-center items-center">
                  <button className="border-2 border-orange-500 w-[10rem] p-2 rounded-full">
                    Register
                  </button>
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
        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={formik.handleSignIn}
            className="p-2 w-[10rem] rounded-3xl border-2 border-orange-500"
          >
            Register
          </button>
        </div>
      </form> */}
    </div>
  );
}
