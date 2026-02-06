import { FC } from "react";

type colorType = "dark-beige" | "heading" | "light-beige" | "beige" | "white";
type variantType =
  | "h3"
  | "h4"
  | "h5"
  | "button"
  | "body"
  | "caption"
  | "footnote";

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
  h3: "md:text-[20px]/[120%] md:font-semibold md:tracking-[3%]",
  h4: "md:text-[18px]/[110%] md:font-semibold md:tracking-[3%]",
  h5: "md:text-[18px]/[110%] md:font-regular md:tracking-[0%]",
  button:
    "text-[16px]/[120%] md:text-[16px]/[100%] font-semibold md:font-semibold tracking-normal md:tracking-[3%]",
  body: "text-[14px]/[120%] md:text-[16px]/[120%] font-medium md:font-medium md:tracking-[0%]",
  caption:
    "text-[12px]/[140%] font-regular md:text-[14px]/[100%] md:font-semibold md:tracking-[0%]",
  footnote:
    "text-[10px]/[120%] font-regular tracking-[3%] md:text-[10px]/[100%] md:font-semibold md:tracking-[3%]",
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
      className={`text-sm font-[Manrope] text-[#777162]  ${className} ${colorClass} ${formattingClass} ${typographyClass}`}
    >
      {children}
    </div>
  );
};
