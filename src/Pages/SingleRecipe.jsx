import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    const index = data.find((recipe) => params.id == recipe.id);
    const copydata = [...data]
    copydata[index] = {...copydata[index], ...recipe}
    console.log(index);

    

  };
  // const { dat } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        {" "}
        <h1 className="text-4xl font-black">{recipe.title}</h1>
        <img
          className="h-[30vh] mt-10 rounded-3xl"
          src={recipe.image}
          alt=""
        />{" "}
      </div>
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
            value={recipe.image}
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
          value={recipe.title}
          placeholder="Recipe Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          {...register("chef")}
          type="text"
          value={recipe.chef}
          placeholder="Chef Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          {...register("desc")}
          value={recipe.desc}
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
        value={recipe.category}
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
          Update
        </button>
        <button
          type="submit"
          className="w-full mt-4 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-3 px-6 rounded-lg text-lg font-semibold"
        >
          Delte
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
