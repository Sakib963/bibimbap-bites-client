import Navbar from "../../shared/Navbar/Navbar";
import {BiDish} from 'react-icons/bi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {BsAward} from 'react-icons/bs'
import tabletDesign from '../../../assets/images/tablet_design.png'
import chefMain from '../../../assets/images/chef_main.png'

const Header = () => {
  return (
    <div className="header">
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 min-h-screen">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold">
              Experience Korean Food <br />
              like Never Before
            </h1>
            <p className="text-lg my-4">
              Experience the authentic taste of Korea with our expertly crafted
              dishes, prepared with the freshest ingredients and a passion for
              traditional Korean cuisine.
            </p>
            <button className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
              Order Now
            </button>
            <button className="border-[#FF4A22] border py-3 px-6 ms-4 rounded-lg text-black hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition">
              Know More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <div className="relative">
                <img src={tabletDesign} alt="Tablet Design" />
                <div className="absolute bottom-20 left-3">
                    <img src={chefMain} alt="Chef" />
                </div>
                <div className="absolute lg:top-40 lg:-left-32 top-16 -left-6">
                    <button className="bg-[#F0A392] text-black py-1 lg:py-3 px-2 lg:px-8 text-sm lg:text-base rounded-full flex items-center justify-center shadow-lg" disabled><BiDish className="mr-2 font-bold text-[#FF4A22] text-xl"/>Served 10k+ Customers</button>
                </div>
                <div className="absolute lg:top-80 top-56 lg:-right-24 -right-5">
                    <button className="bg-[#F0A392] text-black py-1 lg:py-3 px-2 lg:px-8 text-sm lg:text-base  rounded-full flex items-center justify-center shadow-lg" disabled><MdOutlineRestaurantMenu className="mr-2 font-bold text-[#FF4A22] text-xl"/>25+ Menus</button>
                </div>
                <div className="absolute lg:bottom-44 bottom-28 text-black lg:-left-24 -left-5">
                    <button className="bg-[#F0A392] text-black py-1 lg:py-3 px-2 lg:px-8 text-sm lg:text-base  rounded-full flex items-center justify-center shadow-lg" disabled><BsAward className="mr-2 font-bold text-[#FF4A22] text-xl"/>10+ Awards</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
