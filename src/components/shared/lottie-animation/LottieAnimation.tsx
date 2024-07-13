import Lottie from "lottie-react";

const LottieAnimation = ({ animationData }: { animationData: object }) => {
    return (
        <Lottie animationData={animationData} loop={true} />
    );
};

export default LottieAnimation;