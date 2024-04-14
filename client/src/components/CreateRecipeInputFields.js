"use client";
import { useEffect, useState } from "react";
import { Form, Formik, FieldArray, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import CreateRecipeAction from "@/redux/actions/CreateRecipeAction";
import UploadImageFirebase from "./UploadImageFirebase";
import { CloudUpload, Trash2 } from "lucide-react";
import AddInput from "./AddInput";
import Loading from "@/app/loading";
import Image from "next/image";

const validationSchema = Yup.object().shape({
  recipeImage: Yup.mixed().required("* Please upload an image"),
  recipeTitle: Yup.string().required("* Please enter a title"),
  recipeCategory: Yup.string().required("* Please select a category"),
  recipeCookingTime: Yup.string().required("* Please enter cooking time"),
  recipeOrigin: Yup.string().required("* Please enter origin"),
  recipeServing: Yup.string().required("* Please enter serving"),
  recipeIntroduction: Yup.string().required("* Please enter introduction"),
  recipeIngredient: Yup.array()
    .of(Yup.string().required("* Please enter ingredient"))
    .min(1, "* At least one ingredient is required"),
  recipeInstructions: Yup.array()
    .of(Yup.string().required("* Please enter instruction"))
    .min(1, "* At least one instruction is required"),
});

export default function CreateRecipeInputFields() {
  const dispatch = useDispatch();
  const [resetKey, setResetKey] = useState(0);
  const { loading } = useSelector((state) => state.storeCookbook);

  const handleFormSubmit = async (values, { resetForm }) => {
    dispatch(CreateRecipeAction(values));
    resetForm();
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      {loading ? (
        <Loading message={"Your recipe is creating..."} />
      ) : (
        <Formik
          key={resetKey}
          initialValues={{
            recipeDiscoveryBy: localStorage.getItem("userName"),
            recipeImage: "",
            recipeTitle: "",
            recipeCategory: "",
            recipeIntroduction: "",
            recipeCookingTime: "",
            recipeOrigin: "",
            recipeServing: "",
            recipeIngredient: [],
            recipeInstructions: [],
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="grid grid-cols-2 gap-10">
                {/* Left Side */}
                <div>
                  <ul className="space-y-5">
                    <li>
                      <label htmlFor="dropzone-file">
                        {values.recipeImage &&
                        typeof values.recipeImage === "object" ? (
                          <div className="relative flex justify-center items-center rounded-sm overflow-auto border-2 active:border-orange-500 h-[20rem]">
                            <Image
                              src={URL.createObjectURL(values.recipeImage)}
                              alt="Recipe Image"
                              layout="fill"
                              objectFit="cover"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="border-2 active:border-orange-500 border-dotted h-[20rem] justify-center items-center text-gray-400 active:text-orange-500 flex flex-col rounded-sm">
                            <CloudUpload size={30} />
                            <p className="">
                              <span className="font-semibold">
                                Click to upload
                              </span>
                              or drag and drop
                            </p>
                          </div>
                        )}
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) =>
                            setFieldValue("recipeImage", e.target.files[0])
                          }
                        />
                      </label>
                      <div className="text-sm text-red">
                        <ErrorMessage name="recipeImage" />
                      </div>
                    </li>
                    <li>
                      <AddInput
                        label={"Title"}
                        id={"recipeTitle"}
                        value={values.recipeTitle}
                      />
                    </li>
                    <li>
                      <select
                        id="recipeCategory"
                        name="recipeCategory"
                        className="inputfield_css text-gray-400"
                        value={values.recipeCategory}
                        onChange={(e) =>
                          setFieldValue("recipeCategory", e.target.value)
                        }
                      >
                        <option value="">Select Category</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="snack">Snack</option>
                        <option value="appetizer">Appetizer</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="main_course">Main Course</option>
                        <option value="side_dish">Side Dish</option>
                        <option value="dessert">Dessert</option>
                        <option value="beverage">Beverage</option>
                      </select>
                      <div className="text-sm text-red">
                        <ErrorMessage name="recipeCategory" />
                      </div>
                    </li>
                    <li>
                      <AddInput
                        label={"Cooking Time"}
                        id={"recipeCookingTime"}
                        value={values.recipeCookingTime}
                      />
                      <div className="text-sm text-red">
                        <ErrorMessage name="recipeCookingTime" />
                      </div>
                    </li>
                    <li>
                      <AddInput
                        label={"Origin"}
                        id={"recipeOrigin"}
                        value={values.recipeOrigin}
                      />
                      <ErrorMessage name="recipeOrigin" />
                    </li>
                    <li>
                      <AddInput
                        label={"Serving"}
                        id={"recipeServing"}
                        value={values.recipeServing}
                      />
                      <ErrorMessage name="recipeServing" />
                    </li>
                    <li>
                      <AddInput
                        as={"textarea"}
                        label={"Introduction"}
                        id={"recipeIntroduction"}
                        className={"h-[10rem]"}
                        value={values.recipeIntroduction}
                      />
                      <ErrorMessage name="recipeCookingTime" />
                    </li>
                  </ul>
                </div>
                {/* Right Side */}
                <div className="space-y-10">
                  <div>
                    <FieldArray
                      name="recipeIngredient"
                      render={(arrayHelpers) => (
                        <ul className="space-y-2">
                          {values.recipeIngredient.map((ingredient, index) => (
                            <li key={index} className="flex gap-2">
                              <div className="w-full">
                                <AddInput
                                  label={`Ingredient-${index + 1}`}
                                  id={`recipeIngredient.${index}`}
                                  value={ingredient}
                                />
                              </div>
                              <div className="bg-orange-500 text-white p-2 cursor-pointer rounded-full">
                                <Trash2
                                  size={30}
                                  onClick={() => arrayHelpers.remove(index)}
                                />
                              </div>
                            </li>
                          ))}
                          <li>
                            <div className="w-full flex justify-center items-center">
                              <button
                                onClick={() => arrayHelpers.push("")}
                                className="flex gap-2 border-2 border-orange-500 w-[15rem] rounded-3xl items-center justify-center p-2"
                              >
                                Add Ingredient
                              </button>
                            </div>
                          </li>
                          <div className="text-sm text-red">
                            <ErrorMessage name="recipeIngredient" />
                          </div>
                        </ul>
                      )}
                    />
                  </div>
                  <div>
                    <FieldArray
                      name="recipeInstructions"
                      render={(arrayHelpers) => (
                        <ul className="space-y-2">
                          {values.recipeInstructions.map(
                            (instruction, index) => (
                              <li key={index} className="flex gap-2">
                                <div className="w-full">
                                  <AddInput
                                    label={`Instruction-${index + 1}`}
                                    id={`recipeInstructions.${index}`}
                                    value={instruction}
                                  />
                                </div>
                                <div className="bg-orange-500 text-white p-2 cursor-pointer rounded-full">
                                  <Trash2
                                    size={30}
                                    onClick={() => arrayHelpers.remove(index)}
                                  />
                                </div>
                              </li>
                            )
                          )}
                          <li>
                            <div className="w-full flex justify-center items-center">
                              <button
                                onClick={() => arrayHelpers.push("")}
                                className="flex gap-2 border-2 border-orange-500 w-[15rem] rounded-3xl items-center justify-center p-2"
                              >
                                Add Instruction
                              </button>
                            </div>
                          </li>
                          <div className="text-sm text-red">
                            <ErrorMessage name="recipeInstructions" />
                          </div>
                        </ul>
                      )}
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <div className="col-span-2 w-full flex justify-center items-center">
                  <button
                    type="submit"
                    className="flex gap-2 border-2 border-orange-500 w-[15rem] rounded-3xl items-center justify-center p-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
