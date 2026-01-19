import { FC } from "react";
import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";

interface ExternalLinkButtonProps {
  link: string;
  className?: string;
}

export const ExternalLinkButton: FC<ExternalLinkButtonProps> = ({
  link,
  className,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`bg-[#777162] px-5 py-3 rounded-full flex gap-1 items-center ${className ? className : ""}`}
    >
      <Text className="text-white font-medium">Перейти на сайт</Text>
      <Image src="/svg/planet.svg" width={9} height={9} alt="" />
    </a>
  );
};
