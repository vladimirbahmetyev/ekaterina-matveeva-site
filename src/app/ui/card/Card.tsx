import { FC } from "react";
import { white } from "next/dist/lib/picocolors";

type cardType = "white" | "orange" | "filled";
const CardStyleMap: Record<cardType, string> = {
  white: "border-[#EDE5D5]",
  orange: "border-[#FFCB6B]",
  filled: "border-[transparent] bg-[#F9F5EC]",
};

interface CardProps {
  children?: React.ReactNode;
  variant?: cardType;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const Card: FC<CardProps> = ({
  children,
  variant = white,
  className,
  ref,
}) => (
  <div
    className={`flex flex-col border-[1px] rounded-xl p-5 ${CardStyleMap[variant]} ${className}`}
    ref={ref}
  >
    {children}
  </div>
);
