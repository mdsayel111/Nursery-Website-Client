
import Category from "../../components/home-page/category/Category";
import ImgGallery from "../../components/home-page/img-gallery/ImgGallery";
import LatestProducs from "../../components/home-page/latest-products/LatestProducs";
import Slider from "../../components/home-page/slider/Slider";

const Home = () => {
    return (
        <div className="border-red-500">
            <Slider />
            <Category />
            <LatestProducs />
            <ImgGallery />
        </div>
    );
};

export default Home;