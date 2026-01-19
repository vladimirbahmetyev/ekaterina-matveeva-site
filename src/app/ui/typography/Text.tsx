import { FC } from "react";

type colorType = "primary" | "secondary";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  underline?: boolean;
  color?: colorType;
}

const colorMap: Record<colorType, string> = {
  primary: "text-[#35322A]",
  secondary: "text-[#777162]",
};

export const Text: FC<TextProps> = ({ children, className, color }) => {
  const colorClass = color ? colorMap[color] : "";
  return (
    <div
      className={`text-sm font-[Manrope] text-[#777162]  ${className} ${colorClass}`}
    >
      {children}
    </div>
  );
};
