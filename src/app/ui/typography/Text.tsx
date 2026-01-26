import { FC } from "react";

type colorType = "primary" | "secondary" | "black";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  underline?: boolean;
  color?: colorType;
  preserveFormatting?: boolean;
}

const colorMap: Record<colorType, string> = {
  primary: "!text-[#35322A]",
  secondary: "!text-[#777162]",
  black: "!text-[#141414]",
};

export const Text: FC<TextProps> = ({
  children,
  className,
  color,
  preserveFormatting,
}) => {
  const colorClass = color ? colorMap[color] : "";
  const formattingClass = preserveFormatting ? "whitespace-pre-wrap" : "";
  return (
    <div
      className={`text-sm font-[Manrope] text-[#777162]  ${className} ${colorClass} ${formattingClass}`}
    >
      {children}
    </div>
  );
};
