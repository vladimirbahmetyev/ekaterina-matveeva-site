"use client";

import { OrderButton } from "@/app/ui/buttons/OrderButton";
import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";
import { useState, useEffect } from "react";

import Image from "next/image";
export const Footer = () => {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    setIs404(document.body.hasAttribute("data-404"));
    const observer = new MutationObserver(() => {
      setIs404(document.body.hasAttribute("data-404"));
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);
  return (
    <footer
      id="contacts"
      className="flex flex-col items-center justify-center gap-6 relative z-20"
    >
      {!is404 && (
        <div className="flex flex-col items-center justify-center px-2.5 w-full lg:mb-[-60px]">
          <Heading className="mb-5">Екатерина Матвеева</Heading>
          <Image
            className="rounded-xl mb-5"
            src="/img/footer/photo.webp"
            alt="logo"
            width={192}
            height={193}
          />
          <Text variant="text" color="heading" className="mb-5">
            Я на связи пн-пт 8:00-18:00 мск
          </Text>
          <div className="py-4">
            <OrderButton />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-3 items-center lg:justify-between lg:w-full lg:px-30 relative">
        <div className="lg:order-2">
          <a className="flex justify-center lg:justify-start gap-2 items-center mb-3">
            <Text variant="h4" color="dark-beige">
              Скачать резюме{" "}
            </Text>
            <Image src="/svg/external.svg" alt="" width={15} height={15} />
          </a>
          <a href="mailto:matveevae.work@gmail.com">
            <Text
              variant="h4"
              color="dark-beige"
              className="justify-center lg:justify-start"
            >
              matveevae.work@gmail.com
            </Text>
          </a>
        </div>
        <div className="lg:order-1">
          <a
            href="https://vk.com/prezakatya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              variant="h4"
              color="dark-beige"
              className="mb-3 flex justify-center lg:justify-start"
            >
              Вконтакте
            </Text>
          </a>
          <a
            href="https://www.instagram.com/preza.katya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              variant="h4"
              color="dark-beige"
              className="mb-5 flex justify-center lg:justify-start"
            >
              Instagram*
            </Text>
          </a>
          <Text
            variant="footnote"
            color="light-beige"
            className="text-center flex justify-center lg:justify-start"
          >
            *признан экстремистской организацией в РФ
          </Text>
        </div>
        <Image
          src="/svg/heart.svg"
          alt=""
          width={42}
          height={56}
          className="absolute right-[110%] bottom-[20%] lg:hidden"
        />
      </div>
      <div className="flex justify-between gap-3 px-2.5 lg:px-30 py-3 lg:py-5 border-t-[#F2F1F1] border-t-1 w-full">
        <Text
          variant="caption"
          color="light-beige"
          className="flex items-center"
        >
          Все права защищены © 2026
        </Text>
        <Text
          variant="caption"
          color="light-beige"
          className="max-w-[40%] lg:max-w-[auto]"
        >
          Дизайн разработала Матвеева Екатерина
        </Text>
      </div>
    </footer>
  );
};
