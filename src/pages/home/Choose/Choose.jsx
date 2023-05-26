import { MdFastfood } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { TbBuildingWarehouse } from "react-icons/tb";
const Choose = () => {
  return (
    <div className="choose-us lg:px-20 px-6 py-20">
      <div className="text-center">
        <h2 className="lg:text-5xl text-2xl font-bold">
        Experience Our Artistic Dishes
        </h2>
        <p className="lg:text-lg my-4 lg:w-3/4 mx-auto">
          Discover Our Award-Winning Dishes and Savor the Flavors of Korean
          Cuisine. Our Best Dishes Are Crafted by Our Talented Chefs Using Only
          the Freshest Ingredients. Come and Indulge in a Culinary Experience
          Unlike Any Other.
        </p>
      </div>
      {/* Feature Container */}
      <div className="w-3/4 mx-auto grid lg:grid-cols-3 py-10 gap-4">
        <div className="card card-compact bg-base-100 shadow-xl text-black space-y-3 py-10 border border-[#FF4A22]">
          <MdFastfood className="text-3xl bg-[#FF4A22] p-2 rounded-lg w-14 h-14 mx-auto text-white" />
          <div className="card-body text-center space-y-3">
            <h2 className="text-2xl font-semibold">Quality Food</h2>
            <p className="text-base">
              Delicious food, made with fresh and high-quality ingredients, that
              will satisfy your taste buds and leave you wanting more
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl text-black space-y-3 py-10 border border-[#FF4A22]">
          <ImSpoonKnife className="text-3xl bg-[#FF4A22] p-2 rounded-lg w-14 h-14 mx-auto text-white" />
          <div className="card-body text-center space-y-3">
            <h2 className="text-2xl font-semibold">Healthy Food</h2>
            <p className="text-base">
              Delicious and nutritious dishes made with fresh, wholesome
              ingredients to nourish your body and mind.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl text-black space-y-3 py-10 border border-[#FF4A22]">
          <TbBuildingWarehouse className="text-3xl bg-[#FF4A22] p-2 rounded-lg w-14 h-14 mx-auto text-white" />
          <div className="card-body text-center space-y-3">
            <h2 className="text-2xl font-semibold">Beautiful Dine</h2>
            <p className="text-base">
              Experience a visually stunning dining experience with our
              beautifully crafted dishes, elegant ambiance, and attentive
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
