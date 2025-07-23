import { Link } from "react-router-dom";

const Recipecard = (props) => {
  const { title, id, image, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" mr-3 mb-3  w-[23vw]  hover:scale-105 duration-150 overflow-hidden shadow "
    >
      <img
        className="w-full1 rounded-2xl object-cover h-[40vh] block"
        src={image}
        alt=""
      />
      <h1 className="mt-2 font-black px-2"> {title} </h1>
      <small className="px-2 text-rose-300">{chef}</small>
      <p className="px-2 pb-3 ">
        {" "}
        {desc.slice(0, 100)}... <small className="text-blue-400">more</small>{" "}
      </p>
    </Link>
  );
};

export default Recipecard;
