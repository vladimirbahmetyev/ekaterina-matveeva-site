import { FC, RefObject } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

export interface PresentationCardProps {
  imgUrl: string;
  title: string;
  link: string;
}

export const PresentationCard: FC<PresentationCardProps> = ({
  imgUrl,
  title,
  link,
}) => {
  const ref = useScrollReveal();
  return (
    <div
      className={"flex flex-col gap-3"}
      ref={ref as RefObject<HTMLDivElement>}
    >
      <Image src={imgUrl} alt="" width={386} height={474} />
      <Text className="text-[#777162]">{title}</Text>
      <a
        href={link}
        className="flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text className="text-[#E3A127]">Посетить сайт</Text>
        <Image
          className="rotate-135"
          src={"/svg/smallArrow.svg"}
          alt=""
          width={11}
          height={10}
        />
      </a>
    </div>
  );
};
