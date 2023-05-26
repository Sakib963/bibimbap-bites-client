import { useContext, useState } from "react";
import { RecipeContext } from "../Recipes/Recipes";
import { Rating } from "@smastrom/react-rating";
import { MdFavorite } from "react-icons/md";
import { IoIosHeartDislike } from "react-icons/io";

const Recipe = () => {
  const recipeData = useContext(RecipeContext);
  const recipe = recipeData.recipe;

  const [disable, setDisable] = useState(false);

  const handleDisable = () => {
    setDisable(true);
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl text-black border border-[#FF4A22]">
      <figure className="w-full">
        <img src={recipe.photoUrl} alt="recipe photo" className="w-full" />
      </figure>
      <div className="card-body">
        <div className="card-title text-[#FF4A22] flex">
          <h2>{recipe.name}</h2>
          <div className="text-lg flex">
            {recipe.rating}
            <Rating style={{ maxWidth: 100 }} value={recipe.rating} readOnly />
          </div>
        </div>
        <p className="text-base font-bold">
          Ingredients: <span className="font-normal">{recipe.ingredients}</span>
        </p>
        <p className="text-base font-bold">
          Cooking Method:{" "}
          <span className="font-normal">{recipe.cooking_method}</span>
        </p>
        <div className="card-actions justify-end">
        {
          disable ? <button
          className="bg-[#FF4A22] py-3 pr-6 rounded-lg text-white flex items-center" disabled
        >
          <IoIosHeartDislike className="mx-3" />
          Marked As Favorite
        </button>
        : 
        <button
            className="bg-[#FF4A22] py-3 pr-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition flex items-center"
            onClick={() => {
              recipeData.handleFavorite(recipe.name);
              handleDisable();
            }}
          >
            <MdFavorite className="mx-3" />
            Mark As Favorite
          </button>
        }
        </div>
      </div>
    </div>
  );
};

export default Recipe;
