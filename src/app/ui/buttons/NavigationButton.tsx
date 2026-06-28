"use client";

import { FC } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";
import { useRouter } from "next/navigation";

interface BackProps {
  back?: boolean;
  url?: string;
  text: string;
  className?: string;
}

export const NavigationButton: FC<BackProps> = ({
  back = false,
  url = "/",
  text,
  className,
}) => {
  const router = useRouter();
  const onClick = () => {
    if (back) {
      router.push("/#cases");
    } else {
      router.push(url);
    }
  };
  return (
    <button
      className={`flex items-center gap-3 cursor-pointer ${className ? className : ""}`}
      onClick={onClick}
    >
      <Image src="/svg/smallArrow.svg" width={11} height={10} alt="" />
      <Text className="text-[#E3A127]" variant="text">
        {text}
      </Text>
    </button>
  );
};
