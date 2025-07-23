import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="bg-black p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-700">
          Create a New Recipe
        </h2>

        <div>
          <input
            {...register("image")}
            type="url"
            placeholder="Enter Image URL"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <small className="text-red-500 text-sm mt-1 block">
            This will show the error
          </small>
        </div>

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          {...register("desc")}
          placeholder="Enter Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={3}
        ></textarea>

        <textarea
          {...register("ingr")}
          placeholder="Enter Ingredients"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={3}
        ></textarea>

        <textarea
          {...register("inst")}
          placeholder="Enter Instructions"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={3}
        ></textarea>

        <select
          {...register("Categaries")}
          className="w-full p-3 border border-gray-300 rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button
          type="submit"
          className="w-full mt-4 bg-green-600 hover:bg-green-700 transition-all duration-300 text-white py-3 px-6 rounded-lg text-lg font-semibold"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
