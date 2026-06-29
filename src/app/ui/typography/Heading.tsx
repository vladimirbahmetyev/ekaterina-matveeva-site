import { FC } from "react";
import { colorType } from "@/app/ui/typography/Text";

type variantType = "h1" | "h2";

interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
  variant?: variantType;
  color?: colorType;
}

const VariantMap: Record<variantType, string> = {
  h1: "text-[38px]/[100%] lg:text-[64px]/[100%]",
  h2: "text-[38px]/[100%] lg:text-[48px]/[100%]",
};

const colorMap: Record<colorType, string> = {
  heading: "!text-[#434343]",
  "light-beige": "!text-[#B6B2A8]",
  beige: "!text-[#A7A090]",
  "dark-beige": "!text-[#777162]",
  white: "!text-[#FFFFFF]",
  yellow: "!text-[#E3A127]",
};

export const Heading: FC<HeadingProps> = ({
  children,
  className,
  variant = "h1",
  color,
}) => {
  const variantClass = VariantMap[variant];
  const colorClass = color ? colorMap[color] : "";
  return (
    <div
      className={`font-[Better-land] text-[#434343] ${className} ${variantClass} ${colorClass}`}
    >
      {children}
    </div>
  );
};
