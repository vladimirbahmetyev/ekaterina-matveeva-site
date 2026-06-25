import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";

export const OrderButton = () => {
  return (
    <div className="flex flex-col items-center relative">
      <Image src="/svg/circle.svg" alt="" width={223} height={104} />
      <Text variant="h4" color='dark-beige' className="absolute bottom-[50%] translate-y-[90%]  font-semibold">
        Обсудить проект
      </Text>
    </div>
  );
};
