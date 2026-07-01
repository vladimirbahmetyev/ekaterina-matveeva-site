import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import { Heading } from "@/app/ui/typography/Heading";
import { OrderButton } from "@/app/ui/buttons/OrderButton";
import Link from "next/link";

export const Intro = () => (
  <div id="top" className="px-4 h-screen w-full pt-23 lg:flex flex-col">
    <div className="grid lg:grid-cols-[1fr_520px_1fr] gap-2 h-full lg:flex-1">
      <div className="hidden lg:flex flex-col justify-center">
        <Image
          className="mt-5 w-full"
          src={"/img/main/kv_2.webp"}
          alt=""
          width={252}
          height={310}
        />
      </div>
      <div className="min-h-0 lg:pt-[auto] flex flex-col items-center lg:justify-center lg:gap-6 w-full max-h-full">
        <div className="flex-1 flex flex-col w-full justify-end lg:justify-center items-center gap-4 min-h-0">
          <Text
            className="hidden lg:block mb-6"
            variant="text"
            color="dark-beige"
          >
            Web · UI/UX designer
          </Text>
          <Image
            className="lg:hidden mb-2 w-auto min-h-0 h-full"
            width={239}
            height={320}
            alt="kv"
            src={"/img/main/intro_mobile.webp"}
          />
          <div className="flex flex-col justify-center items-center shrink-0">
            <Heading className="mb-3 lg:mb-6">Екатерина Матвеева</Heading>
            <Text className="text-center mb-6" variant="h3" color="dark-beige">
              Проектирую запоминающиеся интерфейсы, <br /> эффективные для
              бизнеса
            </Text>
            <OrderButton />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_24px_1fr] lg:hidden w-full mt-12 shrink-0 pb-10">
          <Text
            variant="text"
            color="dark-beige"
            className="justify-self-start"
          >
            Tilda · Figma
          </Text>
          <Link
            href={"/#approach"}
            className="flex justify-center items-center"
          >
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
      <div className="hidden lg:flex flex-col justify-center items-end">
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
    <div className="hidden lg:grid grid-cols-3 w-full -mt-10 shrink-0 pb-10">
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
