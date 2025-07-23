import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import Recipecard from "../components/Recipecard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => (
    <Recipecard recipe={recipe} key={recipe.id} />
  ));
  return <div className="flex flex-wrap">{data.length > 0 ? renderrecipes : "No Recipes Found"}</div>;
};

export default Recipes;
