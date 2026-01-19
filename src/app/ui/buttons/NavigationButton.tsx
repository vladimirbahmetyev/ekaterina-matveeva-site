import { FC } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";

interface BackProps {
  onClick?: () => void;
  text: string;
}

export const NavigationButton: FC<BackProps> = ({ onClick, text }) => (
  <button className="flex items-center gap-3 cursor-pointer" onClick={onClick}>
    <Image src="/svg/smallArrow.svg" width={11} height={10} alt="" />
    <Text className="text-[#E3A127] font-semibold text-[14px]">{text}</Text>
  </button>
);
