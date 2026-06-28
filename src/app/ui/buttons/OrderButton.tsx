import { Text } from "@/app/ui/typography/Text";
import { a } from "motion/react-client";
import Image from "next/image";

export const OrderButton = () => {
  return (
    <a
      className="flex flex-col items-center relative"
      target="_blank"
      rel="noopener noreferrer"
      href="https://t.me/prezakatya"
    >
      <Image src="/svg/circle.svg" alt="" width={223} height={104} />
      <Text
        variant="h4"
        color="dark-beige"
        className="absolute bottom-[50%] translate-y-[90%]  font-semibold"
      >
        Обсудить проект
      </Text>
    </a>
  );
};
