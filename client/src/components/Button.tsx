import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        className ||
        "border-cyan-500/50 border-2 cursor-pointer rounded-lg h-5 p-4 flex justify-center items-center transition-colors hover:border-cyan-500"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
