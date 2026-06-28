import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import { Heading } from "@/app/ui/typography/Heading";
import { OrderButton } from "@/app/ui/buttons/OrderButton";

export const Intro = () => (
  <div id="top" className="px-4 md:px-30 h-screen w-full pb-10">
    <div className="flex gap-2 h-full justify-between ">
      <div className="hidden md:flex flex-col justify-center">
        <Image
          className="mt-5"
          src={"/img/main/kv_2.webp"}
          alt=""
          width={252}
          height={310}
        />
      </div>
      <div className="mt-18 flex flex-col items-center justify-center gap-3 md:gap-6 ">
        <Text className="hidden md:block" variant="text" color="dark-beige">
          Web · UI/UX designer
        </Text>
        <Image
          className="md:hidden mb-2"
          width={239}
          height={320}
          alt="kv"
          src={"/img/main/intro_mobile.webp"}
        />
        <Heading>Екатерина Матвеева</Heading>
        <Text
          className="text-center mb-3 md:mb-0"
          variant="h3"
          color="dark-beige"
        >
          Проектирую запоминающиеся интерфейсы, <br /> эффективные для бизнеса
        </Text>
        <OrderButton />
      </div>
      <div className="hidden md:flex flex-col justify-center mt-10 items-end">
        <div className="flex flex-col gap-5 items-end mt-12">
          <Image
            className="w-10"
            height={41}
            width={77}
            src={"/svg/yellow-heart.svg"}
            alt="hellow heart"
          />
          <Image src={"/img/main/kv_1.webp"} alt="" width={190} height={260} />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 w-full mt-[-40px] justify-items-center">
      <Text variant="text" color="dark-beige">
        Tilda · Figma
      </Text>
      <Image
        className="mb-0 animate-bounce"
        src="/svg/icon_arrow.svg"
        alt=""
        width={36}
        height={36}
      />
      <Text variant="text" color="dark-beige">
        Скачать резюме
      </Text>
    </div>
  </div>
);
