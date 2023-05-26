
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import './Home.css'
import Chefs from "../Chefs/Chefs";
import { createContext } from "react";
import Dishes from "../Dishes/Dishes";
import Album from "../Album/Album";
import Footer from "../../shared/Footer/Footer";
import Choose from "../Choose/Choose";

export const ChefContext = createContext(null);

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Choose></Choose>
            <ChefContext.Provider value={data}>
                <Chefs></Chefs>
            </ChefContext.Provider>
            <Dishes></Dishes>
            <Album></Album>
            <Footer></Footer>
        </div>
    );
};

export default Home;