import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import { Heading } from "@/app/ui/typography/Heading";
import { OrderButton } from "@/app/ui/buttons/OrderButton";

export const Intro = () => (
  <div className="flex flex-col items-center gap-2 py-5 px-2.5 w-full h-screen justify-between">
    <Text>Web · UI/UX designer</Text>
    <div className="flex flex-col items-center gap-2">
      <Image src={"/img/main/kv_photo.png"} alt="" width={173} height={200} />
      <Heading>Екатерина Матвеева</Heading>
      <Text className="text-center">
        Проектирую запоминающиеся интерфейсы, <br /> эффективные для бизнеса
      </Text>
      <div className="py-3.5">
        <OrderButton />
      </div>
    </div>
    <div className="flex justify-between w-full mt-10">
      <Text>Tilda · Figma</Text>
      <Image src="/svg/icon_arrow.svg" alt="" width={15} height={22} />
      <Text className="underline">Скачать резюме</Text>
    </div>
  </div>
);
