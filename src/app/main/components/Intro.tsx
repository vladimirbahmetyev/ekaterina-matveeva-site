import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import { Heading } from "@/app/ui/typography/Heading";
import { OrderButton } from "@/app/ui/buttons/OrderButton";
import Link from "next/link";

export const Intro = () => (
  <div id="top" className="px-4 h-screen w-full pb-10">
    <div className="grid lg:grid-cols-[1fr_520px_1fr] gap-2 h-full">
      <div className="hidden md:flex flex-col justify-center">
        <Image
          className="mt-5 w-full"
          src={"/img/main/kv_2.webp"}
          alt=""
          width={252}
          height={310}
        />
      </div>
      <div className="mt-18 flex flex-col items-center justify-center gap-3 md:gap-6 w-full ">
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
        <div className="flex flex-col gap-5 items-end mt-12 w-full">
          <Image
            className="w-10"
            height={41}
            width={77}
            src={"/svg/yellow-heart.svg"}
            alt="hellow heart"
          />
          <Image
            className="w-full"
            src={"/img/main/kv_1.webp"}
            alt=""
            width={190}
            height={260}
          />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 w-full mt-[-40px]">
      <Text variant="text" color="dark-beige" className="justify-self-start">
        Tilda · Figma
      </Text>
      <Link href={"/#approach"} className="flex justify-center items-center">
        <Image
          className="mb-0 animate-bounce justify-self-center"
          src="/svg/icon_arrow.svg"
          alt=""
          width={36}
          height={36}
        />
      </Link>
      <Text variant="text" color="dark-beige" className="justify-self-end">
        Скачать резюме
      </Text>
    </div>
  </div>
);
