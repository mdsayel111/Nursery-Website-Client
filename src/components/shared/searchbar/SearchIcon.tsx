import { FaSearchengin } from "react-icons/fa6";


const SearchIcon = ({ className }: { className?: string }) => {
    return (
        <div>
            <FaSearchengin className={`${className}`} />
        </div>
    );
};

export default SearchIcon;