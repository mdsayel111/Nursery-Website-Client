import { ReactNode } from "react";

// create button type
type TButton = {
    children: ReactNode,
    onClick?: any,
    className?: string;
    disabled?: boolean
}

const Button = ({ children, onClick, className, disabled }: TButton) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`py-2 px-4 rounded-md bg-primary hover:bg-secondary transition-all text-white font-bold ${className} disabled:bg-gray-400`}>{children}</button>
    );
};

export default Button;