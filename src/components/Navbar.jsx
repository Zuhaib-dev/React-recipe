import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-10 text-2xl font-mono mb-10">
      <NavLink  className={(e) => e.isActive ? "text-pink-400 flex " : ""} to='/'>Home</NavLink>
      <NavLink  className={(e) => e.isActive ? "text-pink-400 flex ": ""} to='/recipes'>Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-pink-400" : ""} to='/about'>About</NavLink>
      <NavLink className={(e) => e.isActive ? "text-pink-400" : ""} to='/create-recipes'>CreateRecipes</NavLink>
      
    </div>
  );
};

export default Navbar;
