import { FC } from "react";

interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <div className={`text-4xl font-[Better-land] text-[#434343] ${className}`}>
      {children}
    </div>
  );
};
