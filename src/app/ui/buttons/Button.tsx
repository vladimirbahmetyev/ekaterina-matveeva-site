import { FC } from "react";
import { Text } from "@/app/ui/typography/Text";
import Link from "next/link";

interface ButtonProps {
  text: string;
  className?: string;
  link?: string;
}

export const Button: FC<ButtonProps> = ({
  text,
  className = "",
  link = "/",
}) => (
  <Link
    href={link}
    className={`bg-[#777162] flex justify-center items-center p-4 rounded-full ${className}`}
  >
    <Text color="white" className="cursor-pointer ">
      {text}
    </Text>
  </Link>
);
