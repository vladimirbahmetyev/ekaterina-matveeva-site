import { FC } from "react";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  underline?: boolean;
}

export const Text: FC<TextProps> = ({ children, className }) => {
  return (
    <div className={`text-sm font-[Manrope] text-[#777162]  ${className}`}>
      {children}
    </div>
  );
};
