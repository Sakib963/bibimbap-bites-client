import { useContext } from "react";
import { SingleChefContext } from "../Chefs/Chefs";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazy-load";

const Chef = () => {
  const chef = useContext(SingleChefContext);
  console.log(chef);
  return (
    <div className="shadow-lg rounded-lg border border-[#FF4A22]">
      <div className="grid lg:grid-cols-2 gap-4 p-4">
        <figure>
          {/* Lazy Load in Chef Images */}
          <LazyLoad offset={300}>
            <img src={chef.photo} alt="Photo of Korean Chef" />
          </LazyLoad>
        </figure>
        <div className="space-y-4">
          {/* Chef Info */}
          <h2 className="text-2xl font-bold">{chef.name}</h2>
          <p>
            {`${chef.bio.slice(0, 120)}...`}{" "}
            <a className="link link-secondary">Read More</a>
          </p>
          <div className="space-y-2">
            <p className="flex gap-2 items-center font-bold">
              <FaBriefcase className="text-[#FF4A22]" />
              {chef.years_of_experience}+ Years of Experience
            </p>
            <p className="flex gap-2 items-center font-bold">
              <GiForkKnifeSpoon className="text-[#FF4A22]" />
              {chef.num_recipes}+ Recipes
            </p>
            <p className="flex gap-2 items-center font-bold">
              <AiFillLike className="text-[#FF4A22]" />
              {chef.likes}+ Likes
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* Link to Private Route */}
        <Link to={`/chef/${chef.id}`}>
          <button className="bg-[#FF4A22] py-3 px-6  w-full rounded-b-lg text-white hover:scale-y-105 hover:ease-in hover:duration-200 hover:transition">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
