import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";

export const OrderButton = () => {
  return (
    <div className="flex flex-col items-center relative">
      <Image src="/svg/circle.svg" alt="" width={180} height={100} />
      <Text className="absolute bottom-[50%] translate-y-[90%] !text-[#434136] !text-[14px] font-semibold">
        Заказать дизайн
      </Text>
    </div>
  );
};
