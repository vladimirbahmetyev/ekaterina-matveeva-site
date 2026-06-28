"use client";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";
import { projects } from "@/app/main/components/Projects";

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const rootUrls = [
  {
    label: "Подход и ценности",
    id: "approach",
  },
  {
    label: "Этапы работы",
    id: "steps",
  },
  {
    label: "Дизайн-кейсы",
    id: "cases",
  },
  {
    label: "Стоимость работы",
    id: "price",
  },
  {
    label: "Контакты",
    id: "contacts",
  },
];

type navigationSubroute = "cases" | "contacts";

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [subroute, setSubroute] = useState<navigationSubroute | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  const handleBackTap = () => {
    setSubroute(null);
  };

  const handleSubrouteClick = (id: string) => {
    if (id === "contacts" || id === "cases") {
      setSubroute(id);
    } else {
      setIsOpen(false);
      router.push(`/#${id}`);
    }
  };
  const handleProjectClick = () => {
    setIsOpen(false);
    setSubroute(null);
  };
  return (
    <>
      <div className="md:hidden">
        <div className="fixed z-30 top-0 w-full flex items-center py-3.5 justify-between px-5 bg-[#F9F5EC]">
          <Link href="/#top">
            <Text variant="body-text" color="beige">
              Web · UI/UX designer
            </Text>
          </Link>
          <Image
            className="cursor-pointer"
            src={"/svg/burger.svg"}
            alt=""
            width={40}
            height={40}
            onClick={() => setIsOpen(true)}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ left: "100%" }}
              animate={{ left: 0 }}
              exit={{ left: "100%" }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 40,
              }}
              className="fixed w-screen h-screen bg-white top-0 left-0 z-30 mb-3"
            >
              <div className="px-5 py-5 bg-[#434343] flex items-center justify-between">
                <Text color="white" preserveFormatting variant={"text"}>
                  {"Web · UI/UX designer"}
                </Text>
                <Image
                  src={"/svg/close-nav.svg"}
                  width={40}
                  height={40}
                  alt=""
                  onClick={() => setIsOpen(false)}
                />
              </div>
              {rootUrls.map((val) => (
                <div
                  className="cursor-pointer flex justify-between items-center px-5 py-3.5 border-b-1 border-[#EBE6DB] mt-5"
                  key={val.id}
                  onClick={() => handleSubrouteClick(val.id)}
                >
                  <Text variant="text" color="beige">
                    {val.label}
                  </Text>
                  {["cases", "contacts"].includes(val.id) && (
                    <Image
                      src="/svg/navigation-shevron.svg"
                      width={24}
                      height={24}
                      alt=""
                    />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {subroute && (
            <motion.div
              initial={{ left: "100%" }}
              animate={{ left: 0 }}
              exit={{ left: "100%" }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 40,
              }}
              className="fixed w-screen h-screen bg-white z-40 top-0 left-0"
            >
              <div
                className="bg-[#434343] px-5 py-3"
                onClick={() => handleSubrouteClick("main")}
              >
                <div
                  className="flex py-3.5 gap-4 items-center"
                  onClick={handleBackTap}
                >
                  <Image
                    src="/svg/arrow-back.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <Text color="white" variant="text">
                    Назад
                  </Text>
                </div>
              </div>
              <div className="overflow-y-auto h-full ">
                {subroute === "cases" ? (
                  <div>
                    <Text
                      className="mt-5 mb-4 ml-5"
                      variant="h3"
                      color="heading"
                    >
                      Дизайн-кейсы
                    </Text>
                    {projects.map((value) => (
                      <Link
                        href={`${value.link}#top`}
                        key={value.title}
                        className="flex gap-3 items-center w-full px-5 py-3 border-b-1 border-[#EBE6DB]"
                        onClick={handleProjectClick}
                      >
                        <Image
                          src={value.imgUrl}
                          alt=""
                          width={76}
                          height={94}
                          loading={"eager"}
                          unoptimized
                        />
                        <div>
                          <Text
                            className="mb-3"
                            variant="h3"
                            color="dark-beige"
                          >
                            {value.smallTitle}
                          </Text>
                          <div className="flex gap-1 flex-wrap">
                            {value.tags.map((val) => (
                              <Text
                                variant="footnote"
                                color="dark-beige"
                                className="border-1 border-[#C2BCAF] flex px-2 py-1 rounded-full justify-center items-center"
                                key={val}
                              >
                                {val}
                              </Text>
                            ))}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="w-full min-h-30!" />
                  </div>
                ) : (
                  <div className="p-5 overflow-scroll h-screen">
                    <Text variant="h3" color="dark-beige">
                      Контакты
                    </Text>
                    <Text variant="text" color="beige" className="mb-5">
                      Я на связи пн-пт 8:00-18:00 мск
                    </Text>
                    <div className="grid grid-cols-1 gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/prezakatya"
                        className="border-1 border-[#FFCB6B] px-3 py-5 rounded-xl"
                      >
                        <Text
                          className="mb-8"
                          variant="body-text"
                          color="beige"
                        >
                          Телеграм
                        </Text>
                        <Text className="mb-2" variant="h3" color="heading">
                          @prezakatya
                        </Text>
                        <Text variant="body-text" color="beige">
                          – предпочитаемый способ связи
                        </Text>
                      </a>
                      <div className="px-3 py-5 bg-[#F9F5EC] rounded-xl">
                        <Text
                          variant="body-text"
                          color="beige"
                          className="mb-5"
                        >
                          Подробнее обо мне
                        </Text>
                        <Text variant="h3" color="heading">
                          Резюме
                        </Text>
                      </div>
                      <a
                        href="mailto:matveevae.work@gmail.com"
                        className="px-3 py-5 bg-[#F9F5EC] rounded-xl"
                      >
                        <Text
                          variant="body-text"
                          color="beige"
                          className="mb-5"
                        >
                          Почта
                        </Text>
                        <Text variant="h3" color="heading">
                          matveevae.work@gmail.com
                        </Text>
                      </a>
                      <a
                        href="https://vk.com/prezakatya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-5 bg-[#F9F5EC] rounded-xl"
                      >
                        <Text
                          variant="body-text"
                          color="beige"
                          className="mb-5"
                        >
                          Вконтакте
                        </Text>
                        <Text variant="h3" color="heading">
                          vk.com/prezakatya
                        </Text>
                      </a>
                      <a
                        href="https://www.instagram.com/preza.katya/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-5 bg-[#F9F5EC] rounded-xl"
                      >
                        <Text
                          variant="body-text"
                          color="beige"
                          className="mb-2"
                        >
                          Instagram*{" "}
                        </Text>
                        <Text variant="footnote" color="beige" className="mb-5">
                          *признан экстремистской организацией в РФ
                        </Text>
                        <Text variant="h3" color="heading">
                          Instagram*
                        </Text>
                      </a>
                      <div className="min-h-20 w-full" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </div>
      <div className="min-h-18 w-full md:block hidden" />
      <div className="top-0 fixed z-100 hidden md:flex px-30 w-full justify-between bg-[#F9F5EC] py-6">
        {rootUrls.map((val) => (
          <a href={`/#${val.id}`} key={val.id}>
            <Text variant="text" color="beige">
              {val.label}
            </Text>
          </a>
        ))}
      </div>
    </>
  );
};
