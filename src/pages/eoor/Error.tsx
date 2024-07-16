import LottieAnimation from "../../components/shared/lottie-animation/LottieAnimation";
import errorJSON from "../../assets/eooro.json"
import { NavLink } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

const Error = () => {
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center gap-8">
            <LottieAnimation animationData={errorJSON} />
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-primary text-2xl font-bold">Opps!</h1>
                <h1 className="text-secondary text-xl"> Something Went Wrong</h1>
                <NavLink to={"/"}>
                    <Button>Back To Home</Button>
                </NavLink>
            </div>
        </div>

    );
};

export default Error;