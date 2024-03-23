"use client";
import { CloudUpload, Trash2 } from "lucide-react";
import AddInput from "./AddInput";
import "./component_style.css";
import { Form, Formik, FieldArray } from "formik"; // Added FieldArray for dynamic fields
export default function CreateRecipeInputFields() {
  return (
    <div>
      <Formik
        initialValues={{
          recipeImage: "",
          recipeTitle: "",
          recipeCategory: "",
          recipeIntroduction: "",
          recipeCookingTime: "",
          recipeIngredient: [],
          recipeInstructions: [],
        }}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="grid grid-cols-2 gap-10">
              {/* Left Side */}
              <div>
                <ul className="space-y-5">
                  <li>
                    <label htmlFor="dropzone-file">
                      <div className="border-2 border-dotted h-[10rem] justify-center items-center text-gray-400 flex flex-col rounded-sm">
                        <CloudUpload size={30} />
                        <p class="">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        class="hidden"
                        onChange={(e) =>
                          setFieldValue("recipeImage", e.target.files[0])
                        }
                      />
                    </label>
                  </li>
                  <li>
                    <AddInput label={"Title"} id={"recipeTitle"} />
                  </li>
                  <li>
                    {/* <AddInput label={"Category"} id={"recipeCategory"} /> */}
                    <select
                      id="recipeCategory"
                      name="recipeCategory"
                      className="inputfield_css text-gray-400"
                    >
                      <option value="">Select Category</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Snack">Snack</option>
                      <option value="Appetizer">Appetizer</option>
                      <option value="Salad">Salad</option>
                      <option value="Soup">Soup</option>
                      <option value="Main Course">Main Course</option>
                      <option value="Side Dish">Side Dish</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Beverage">Beverage</option>
                    </select>
                  </li>
                  <li>
                    <AddInput label={"Cooking Time"} id={"recipeCookingTime"} />
                  </li>
                  <li>
                    <AddInput
                      as={"textarea"}
                      label={"Introduction"}
                      id={"recipeIntroduction"}
                      className={"h-[10rem]"}
                    />
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
                        {values.recipeIngredient.map((_, index) => (
                          <li key={index} className="flex gap-2">
                            <div className="w-full">
                              <AddInput
                                label={`Ingredient-${index + 1}`}
                                id={`recipeIngredient.${index}`}
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
                      </ul>
                    )}
                  />
                </div>
                <div>
                  <FieldArray
                    name="recipeInstructions"
                    render={(arrayHelpers) => (
                      <ul className="space-y-2">
                        {values.recipeInstructions.map((_, index) => (
                          <li key={index} className="flex gap-2">
                            <div className="w-full">
                              <AddInput
                                label={`Instruction-${index + 1}`}
                                id={`recipeInstructions.${index}`}
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
                              Add Instruction
                            </button>
                          </div>
                        </li>
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
    </div>
  );
}
