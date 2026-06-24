import { FC } from "react";

export type colorType =
  | "dark-beige"
  | "heading"
  | "light-beige"
  | "beige"
  | "white";
type variantType = "h3" | "h4" | "text" | "body-text" | "caption" | "footnote";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  underline?: boolean;
  color?: colorType;
  preserveFormatting?: boolean;
  variant?: variantType;
}

const colorMap: Record<colorType, string> = {
  heading: "!text-[#434343]",
  "light-beige": "!text-[#B6B2A8]",
  beige: "!text-[#A7A090]",
  "dark-beige": "!text-[#777162]",
  white: "!text-[#FFFFFF]",
};

const variantMap: Record<variantType, string> = {
  h3: "text-[16px]/[120%] md:text-[20px]/[120%] md:font-semibold md:tracking-[3%]",
  h4: "text-[16px]/[120%] font-semibold md:text-[18px]/[120%]",
  text: "text-[16px]/[120%]",
  "body-text": "text-[14px]/[120%] md:text-[16px]/[120%]",
  caption: "text-[12px]/[140%] md:text-[12px]/[140%] md:tracking-[0%]",
  footnote: "text-[10px]/[110%] md:text-[14px]/[110%] md:tracking-[3%]",
};

export const Text: FC<TextProps> = ({
  children,
  className,
  color,
  preserveFormatting,
  variant = "body",
}) => {
  const colorClass = color ? colorMap[color] : "";
  const formattingClass = preserveFormatting ? "whitespace-pre-wrap" : "";
  const typographyClass = variantMap[variant];
  return (
    <div
      className={` font-[Manrope] ${className} ${colorClass} ${formattingClass} ${typographyClass}`}
    >
      {children}
    </div>
  );
};
