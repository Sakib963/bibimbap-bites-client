import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsAward } from "react-icons/bs";
import Recipe from "../Recipe/Recipe";
import { createContext } from "react";
import Footer from "../../shared/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import LazyLoad from "react-lazy-load";

export const RecipeContext = createContext(null);

const Recipes = () => {
  const data = useLoaderData();
  const recipes = data.recipes;

  // Displaying Toast If user mark a dish as favorite
  const handleFavorite = (name) => {
    toast(`Marked ${name}as Favorite`);
  };

  return (
    <div>
      <div className="header">
        {/* Toast Container */}
        <Toaster
          toastOptions={{
            style: {
              padding: "16px",
              backgroundColor: "#FF4A22",
              color: "#FFFFFF",
              boxShadow: "10px #000000",
            },
          }}
        />
        <Navbar></Navbar>
        <div>
          <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 min-h-screen">
            {/* Chef Info */}
            <div className="flex justify-center items-center">
              <div>
                <h1 className="text-5xl font-bold">{data.name}</h1>
                <p className="text-lg my-4">{data.bio}</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              {/* Chef Banner */}
              <div className="relative">
                <LazyLoad offset={100}>
                  {/* Lazy Load In Chef's Picture */}
                  <img src={data.photo_png} alt="Tablet Design" />
                </LazyLoad>
                {/* Info Buttons */}
                <div className="absolute lg:top-40 lg:-left-16 top-16 -left-6">
                  <button
                    className="bg-[#F0A392] text-black py-1 lg:py-3 px-2 lg:px-8 text-sm lg:text-base rounded-full flex items-center justify-center shadow-lg"
                    disabled
                  >
                    <AiFillLike className="mr-2 font-bold text-[#FF4A22] text-xl" />
                    {data.likes}+ Likes
                  </button>
                </div>
                {/* Info Buttons */}
                <div className="absolute lg:top-80 top-56 lg:-right-24 -right-5">
                  <button
                    className="bg-[#F0A392] text-black py-1 lg:py-3 px-2 lg:px-8 text-sm lg:text-base  rounded-full flex items-center justify-center shadow-lg"
                    disabled
                  >
                    <MdOutlineRestaurantMenu className="mr-2 font-bold text-[#FF4A22] text-xl" />
                    {data.num_recipes}+ Recipes
                  </button>
                </div>
                {/* Info Buttons */}
                <div className="absolute lg:bottom-44 bottom-28 text-black lg:-left-28 -left-5">
                  <button
                    className="bg-[#F0A392] text-black py-1 lg:py-3 px-2 lg:px-8 text-sm lg:text-base  rounded-full flex items-center justify-center shadow-lg"
                    disabled
                  >
                    <BsAward className="mr-2 font-bold text-[#FF4A22] text-xl" />
                    {data.years_of_experience}+ Years of Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="space-y-3 text-center">
          <h3 className="text-2xl lg:text-5xl font-bold">
            Experience Our Artistic Dishes
          </h3>
          <p>
            Indulge in our exquisite culinary creations, where each dish is a
            masterpiece crafted with artistic passion to create a unique dining
            experience.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:w-3/4 mx-auto gap-4 mt-10">
          {/* Recipe Container */}
          {recipes &&
            recipes.map((recipe) => (
              <RecipeContext.Provider
                key={recipe.id}
                value={{ recipe, handleFavorite }}
              >
                <Recipe></Recipe>
              </RecipeContext.Provider>
            ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Recipes;
