import Category from "../../components/category/Category";
import LatestProducs from "../../components/latest-products/LatestProducs";
import Slider from "../../components/slider/Slider";

const Home = () => {
    return (
        <div className="border-red-500">
            <Slider />
            <Category />
            <LatestProducs />
        </div>
    );
};

export default Home;