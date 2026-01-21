import { OrderButton } from "@/app/ui/buttons/OrderButton";
import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";

import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-6 px-2.5 w-full">
        <Heading className={"text-[#777162]"}>Екатерина Матвеева</Heading>
        <Image
          className="rounded-xl"
          src="/img/footer/photo.png"
          alt="logo"
          width={130}
          height={130}
        />
        <Text>На связи пн-пт 8:00-18:00 мск</Text>
        <div className="py-4">
          <OrderButton />
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center relative">
        <a className="flex gap-2 items-center">
          <Text className="underline font-semibold">Скачать резюме </Text>
          <Image src="/svg/external.svg" alt="" width={15} height={15} />
        </a>
        <Text className="font-semibold">matveevae.work@gmail.com</Text>
        <Text className="underline font-semibold">Вконтакте</Text>
        <Text className="underline font-semibold">Instagram*</Text>
        <Text className="text-[#D7D2C3] text-[9px] font-semibold text-center">
          *признан экстремистской
          <br />
          организацией в РФ
        </Text>
        <Image
          src="/svg/heart.svg"
          alt=""
          width={42}
          height={56}
          className="absolute right-[110%] bottom-[20%]"
        />
      </div>
      <div className="flex justify-between gap-3 px-2.5 py-3 border-t-[#F2F1F1] border-t-1 w-full">
        <Text className={"text-[10px]"}>Все права защищены © 2025</Text>
        <Text className={"text-[10px]"}>
          Дизайн разработала
          <br /> Матвеева Екатерина
        </Text>
      </div>
    </footer>
  );
};
