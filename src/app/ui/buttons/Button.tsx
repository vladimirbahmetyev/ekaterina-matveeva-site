import { FC } from "react";
import { Text } from "@/app/ui/typography/Text";

interface ButtonProps {
  text: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ text, className = "" }) => (
  <a
    className={`bg-[#777162] flex justify-center items-center p-4 rounded-full ${className}`}
  >
    <Text color="white" className="cursor-pointer ">
      {text}
    </Text>
  </a>
);
