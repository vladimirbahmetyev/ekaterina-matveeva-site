import { OrderButton } from "@/app/ui/buttons/OrderButton";
import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";

import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center px-2.5 w-full mb-[-60px]">
        <Image 
          src="/img/footer/bg.png"
          width={300}
          height={300}
          alt='bg'
        />
        <Heading className="mb-5">Екатерина Матвеева</Heading>
        <Image
          className="rounded-xl mb-5"
          src="/img/footer/photo.png"
          alt="logo"
          width={192}
          height={193}
        />
        <Text variant="text" color="heading" className="mb-5">Я на связи пн-пт 8:00-18:00 мск</Text>
        <div className="py-4">
          <OrderButton />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-center md:justify-between md:w-full md:px-30 relative">
        <div className="md:order-2">
          <a className="flex gap-2 items-center mb-3">
            <Text variant="h4" color="dark-beige" >Скачать резюме </Text>
            <Image src="/svg/external.svg" alt="" width={15} height={15} />
          </a>
          <Text variant="h4" color="dark-beige">matveevae.work@gmail.com</Text>
        </div>
        <div className="md:order-1">
          <Text variant="h4" color="dark-beige" className="mb-3">Вконтакте</Text>
          <Text variant="h4" color="dark-beige" className="mb-5">Instagram*</Text>
          <Text variant="footnote" color="light-beige" className="text-center">
            *признан экстремистской организацией в РФ
          </Text>
        </div>
        <Image
          src="/svg/heart.svg"
          alt=""
          width={42}
          height={56}
          className="absolute right-[110%] bottom-[20%] md:hidden"
        />
      </div>
      <div className="flex justify-between gap-3 px-2.5 md:px-30 py-3 md:py-5 border-t-[#F2F1F1] border-t-1 w-full">
        <Text variant="caption" color="light-beige">Все права защищены © 2026</Text>
        <Text variant="caption" color="light-beige">
          Дизайн разработала Матвеева Екатерина
        </Text>
      </div>
    </footer>
  );
};
