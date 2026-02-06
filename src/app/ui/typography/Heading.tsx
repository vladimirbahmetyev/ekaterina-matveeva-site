import { FC } from "react";

type variantType = "h1" | "h2";

interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
  variant?: variantType;
}

const VariantMap: Record<variantType, string> = {
  h1: "text-[38px]/[100%] font-regular tracking-normal",
  h2: "text-[38px]/[100%] font-regular tracking-normal",
};

export const Heading: FC<HeadingProps> = ({
  children,
  className,
  variant = "h1",
}) => {
  const variantClass = VariantMap[variant];
  return (
    <div
      className={`text-4xl font-[Better-land] text-[#434343] ${className} ${variantClass}`}
    >
      {children}
    </div>
  );
};
