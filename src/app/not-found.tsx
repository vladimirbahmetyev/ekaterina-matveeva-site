"use client";

import Link from "next/link";
import { OrderButton } from "./ui/buttons/OrderButton";
import { Heading } from "./ui/typography/Heading";
import { Text } from "./ui/typography/Text";
import Image from "next/image";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    document.body.setAttribute("data-404", "true");
    return () => document.body.removeAttribute("data-404");
  }, []);

  return (
    <div className="relative mb-5 md:mb-15 px-5">
      <Image
        width={1394}
        height={616}
        alt="bg"
        src="/img/404/404.webp"
        className="absolute -top-15 z-10 left-1/2 -translate-x-1/2 hidden md:block"
      />
      <Image
        width={360}
        height={637}
        alt="bg"
        src="/img/404/404_mb.webp"
        className="absolute z-10 left-1/2 -translate-x-1/2 md:hidden"
      />
      <div className="mt-25 md:mt-15 flex flex-col items-center gap-4 relative z-20 px-5 md:px-0">
        <Heading variant="h2">Страница не найдена :(</Heading>
        <Text variant="h3" color="beige" className="text-center">
          Возможно, когда-то она была, но сейчас её нет...
        </Text>
        <Image
          width={250}
          height={250}
          alt="cat"
          src={"/img/404/404_cat.webp"}
          className="py-1 md:py-5 w-37.5 md:w-62.5"
        />
        <Text variant="text" color="heading" className="md:mb-5">
          Я на связи пн-пт 8:00-18:00 мск
        </Text>
        <OrderButton />
        <Link
          href={"/#top"}
          className="bg-[#F9F5EC] rounded-full py-4 px-5 hidden md:flex items-center gap-3 "
        >
          <Image width={24} height={24} alt="back" src="/img/404/back.svg" />
          <Text color="beige">На главную</Text>
        </Link>
      </div>
    </div>
  );
}
