import { createContext, useContext } from "react";
import { ChefContext } from "../Home/Home";
import Chef from "../Chef/Chef";

export const SingleChefContext = createContext(null)

const Chefs = () => {
    const chefData = useContext(ChefContext)
    return (
        <div className="lg:px-20 px-6 my-20">
            <div className="text-center">
                <h2 className="lg:text-5xl text-2xl font-bold">The Masterminds Behind Our Dishes</h2>
                <p className="lg:text-lg my-4 lg:w-3/4 mx-auto">Meet our team of talented chefs, each with a unique culinary background and passion for Korean cuisine. Get to know the faces behind the flavors and discover their signature dishes.</p>
            </div>
            {/* Chef Cards Container */}
            <div className="grid lg:grid-cols-2 gap-4 lg:w-3/4 mx-auto mt-20">
                {
                    chefData.map(chef => <SingleChefContext.Provider key={chef.id} value={chef}><Chef></Chef></SingleChefContext.Provider>)
                }
            </div>
            
        </div>
    );
};

export default Chefs;