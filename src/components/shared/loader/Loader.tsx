
import LottieAnimation from '../lottie-animation/LottieAnimation';
import loaderJSON from "../../../assets/loader.json"

const Loader = () => {
    return (
        <LottieAnimation animationData={loaderJSON} />
    );
};

export default Loader;