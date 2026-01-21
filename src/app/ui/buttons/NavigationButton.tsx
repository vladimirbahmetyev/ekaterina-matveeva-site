"use client";

import { FC } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";
import { useRouter } from "next/navigation";

interface BackProps {
  back?: boolean;
  url?: string;
  text: string;
}

export const NavigationButton: FC<BackProps> = ({
  back = false,
  url = "/",
  text,
}) => {
  const router = useRouter();
  const onClick = () => {
    if (back) {
      router.back();
    } else {
      router.push(url);
    }
  };
  return (
    <button
      className="flex items-center gap-3 cursor-pointer"
      onClick={onClick}
    >
      <Image src="/svg/smallArrow.svg" width={11} height={10} alt="" />
      <Text className="text-[#E3A127] font-semibold text-[14px]">{text}</Text>
    </button>
  );
};
