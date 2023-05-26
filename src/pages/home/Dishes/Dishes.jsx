import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import bibimbapFood from '../../../assets/images/foods/bibimbap.jpg'
import jajangmyeonFood from '../../../assets/images/foods/jajangmyeon.jpg'
import tokbokkiFood from '../../../assets/images/foods/tokbokki.jpg'
import bulgogiFood from '../../../assets/images/foods/bulgogi.jpg'

const Dishes = () => {
  return (
    <div className="lg:px-20 px-6 py-20 dishes">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="lg:text-5xl text-2xl font-bold">
          Taste Our Finest Creations
        </h2>
        <p className="lg:text-lg my-4 lg:w-3/4 mx-auto">
          Discover Our Award-Winning Dishes and Savor the Flavors of Korean
          Cuisine. Our Best Dishes Are Crafted by Our Talented Chefs Using Only
          the Freshest Ingredients. Come and Indulge in a Culinary Experience
          Unlike Any Other.
        </p>
      </div>
      {/* Dish Container */}
      <div className="grid lg:grid-cols-4 gap-4 mt-10 lg:w-3/4 mx-auto">
      {/* Card 1 */}
        <div className="card card-compact bg-base-100 shadow-xl text-black">
          <figure>
            <img src={bibimbapFood} alt="bibimbap" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bibimbap <span className="text-[#FF4A22]">비빔밥</span>
            </h2>
            <p className="text-base font-bold">Price: 10$</p>
            <p className="text-base font-bold">Chef: Kim Yoon-jun</p>
            <p className="text-base">2000+ Quantity Served</p>
            <div className="text-lg flex">4.8
              <Rating style={{ maxWidth: 100 }} value={4.8} readOnly />
            </div>
            <div className="card-actions justify-end">
              <button className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card card-compact bg-base-100 shadow-xl text-black">
          <figure>
            <img
              src={jajangmyeonFood}
              alt="jajangmyeon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Jajangmyeon <span className="text-[#FF4A22]">짜장면</span>
            </h2>
            <p className="text-base font-bold">Price: 12$</p>
            <p className="text-base font-bold">Chef: Lee Hyun-woo</p>
            <p className="text-base">1200+ Quantity Served</p>
            <div className="text-lg flex">4.5
              <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
            </div>
            <div className="card-actions justify-end">
              <button className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card card-compact bg-base-100 shadow-xl text-black">
          <figure>
            <img src={tokbokkiFood} alt="Tokbokki" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Tokbokki <span className="text-[#FF4A22]">떡볶이</span>
            </h2>
            <p className="text-base font-bold">Price: 8$</p>
            <p className="text-base font-bold">Chef: Park Ji-hyun</p>
            <p className="text-base">3000+ Quantity Served</p>
            <div className="text-lg flex">4.2
              <Rating style={{ maxWidth: 100 }} value={4.2} readOnly />
            </div>
            <div className="card-actions justify-end">
              <button className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card card-compact bg-base-100 shadow-xl text-black">
          <figure>
            <img src={bulgogiFood} alt="Bulgogi" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bulgogi <span className="text-[#FF4A22]">불고기</span>
            </h2>
            <p className="text-base font-bold">Price: 15$</p>
            <p className="text-base font-bold">Chef: Kim Yoon-jungo</p>
            <p className="text-base">2500+ Quantity Served</p>
            <div className="text-lg flex">4.7
              <Rating style={{ maxWidth: 100 }} value={4.7} readOnly />
            </div>
            <div className="card-actions justify-end">
              <button className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
