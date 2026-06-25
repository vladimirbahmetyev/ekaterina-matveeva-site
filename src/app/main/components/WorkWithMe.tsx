"use client"

import { FC, useRef, useState } from "react";
import { Card } from "@/app/ui/card/Card";
import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import { Heading } from "@/app/ui/typography/Heading";
import { SwiperRef, SwiperSlide, Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const WorkWithMe: FC = () => {
  const swiper = useRef<null | SwiperRef>(null);
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const onSwipe = () => {
    setIsLast(swiper.current?.isEnd);
    setIsFirst(swiper.current?.isBeginning);
  };

  const onArrowClick = (direction: "next" | "prev") => {
    if (direction === "next") {
      swiper.current?.slideNext();
    } else {
      swiper.current?.slidePrev();
    }
    onSwipe();
  };
  return (
  <div className="flex flex-col px-0 md:px-30 gap-1 items-center mt-5 md:pt-15">
    <Heading variant="h2">Работа со мной</Heading>
    <Text className="px-5 md:px-0 text-center mb-0 md:mb-10" variant="h4" color='light-beige'>
      Это качественный результатс комфортом для всех
    </Text>
    <div
      className={
        "hidden md:grid grid-cols-1 md:grid-cols-4 grid-rows-6 md:grid-rows-2 gap-2 md:gap-5"
      }
    >
      <Card variant="filled" className={"md:col-start-2 col-span-2 md:row-start-1 relative"}>
        <div className="relative flex flex-col justify-between h-full">
          <Text className="max-w-[50%]" color="dark-beige" variant="h4">
            Применяю UX-исследования
          </Text>
          <div className="max-w-[75%] flex flex-col gap-2">
            <Text color='dark-beige' variant="text">Чтобы сделать интерфейс интуитивным и удобным</Text>
            <Text color='beige' variant="text">JTBD, персоны, интервью, опросы, анализ конкурентов и аудитории</Text>
          </div>
        </div>
          <Image
              className="absolute right-0 top-0"
              src={"/img/main/work/res.png"}
              width={273}
              height={313}
              alt=""
            />
      </Card>
      <Card variant="white" className="md:col-start-1 min-h-[313px]">
        <div className="flex flex-col justify-between h-full">
          <Text variant='h4' color='dark-beige'>
            Глубоко погружаюсь в проект
          </Text>
          <Text variant="text" color='beige'>
            Изучаю бизнес, аудиторию и цели, чтобы дизайн точно решал нужные
            задачи
          </Text>
        </div>
      </Card>
      <Card variant="orange" className="">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-3">
            <Image
                src={"/svg/group.svg"}
                alt=""
                width={37}
                height={37}
              />
            <Text variant="h4" color="dark-beige">
              Понимаю психологию пользователя
            </Text>
          </div>
          <Text variant="text" color="beige">
            Психологическое образование помогает мне проектировать интерфейсы,
            вызывающие доверие и эмоции у пользователей
          </Text>
        </div>
      </Card>
      <Card variant="filled" className={"md:col-start-3 col-span-2 relative overflow-hidden"}>
        <div className="flex flex-col justify-between h-full w-[50%]">
          <div className="flex  justify-between mb-1.5">
            <Text variant="h4" color="dark-beige">
              Комплексно подхожу к дизайну продукта
            </Text>
          </div>
          <Text variant="text" color='beige'>
            Разрабатываю не только сайты, но и презентации, оформляю соцсети,
            готовлю PDF-файлы— всё в едином стиле
          </Text>
        </div>
          <Image
            src={"/img/main/work/com.png"}
            width={275}
            height={335}
            alt=""
            className="absolute top-0 right-0"
          />
      </Card>
      <Card variant="white" className="md:col-start-2 md:row-start-2">
        <div className="flex flex-col justify-between h-full">
          <Text color='dark-beige' variant='h4'>
            Ответственно подхожу к своей работе
          </Text>
          <Text variant='text' color='beige'>
            Соблюдаю дедлайны, остаюсь на связи, держу в курсе этапов работы
          </Text>
        </div>
      </Card>
      <Card variant="filled" className="md:col-start-1 md:row-start-2 relative">
        <>
          <div className="flex flex-col justify-between h-full relative z-10">
            <Text color='dark-beige' variant='h4'>
              Работаю легально по договору
            </Text>
            <Text variant='text' color='beige'>
              Я зарегистрирована как самозанятая, выдаю чеки и работаю
              по договору, который защищает обе стороны
            </Text>{" "}
          </div>
          <Image
              src={"/img/main/work/stamp.png"}
              width={173}
              height={173}
              alt=""
              className="right-0 absolute top-14" 
          />
        </>
      </Card>
    </div>
    <div className="md:hidden relative max-w-[100vw] px-5">
      <div className="flex gap-2 items-center justify-center mb-3">
          <div
            className="rotate-180 cursor-pointer"
            onClick={() => onArrowClick("prev")}
          >
            <div className={`arrow-mask ${isFirst ? "!bg-[#AEAEAE]" : ""}`} />
          </div>
          <div className=" cursor-pointer" onClick={() => onArrowClick("next")}>
            <div className={`arrow-mask ${isLast ? "!bg-[#AEAEAE]" : ""}`} />
          </div>
        </div>
      <Swiper
          slidesPerView={1}
          spaceBetween={8}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
              slidesOffsetBefore: 120,
              slidesOffsetAfter: 120,
            },
          }}
          onSwiper={(swiperInstance) => {
            swiper.current = swiperInstance;
          }}
          onTransitionEnd={() => onSwipe()}
      >
        <SwiperSlide>
          <Card className="h-[430px]" variant="filled">
          <div className="relative flex flex-col justify-between h-full">
          <Text className="max-w-[50%]" color="dark-beige" variant="h4">
            Применяю UX-исследования
          </Text>
          <Image
              src={"/img/main/work/res.png"}
              width={200}
              height={228}
              alt=""
            />
          <div className="flex flex-col gap-2">
            <Text color='beige' variant="text">Чтобы сделать интерфейс интуитивным и удобным</Text>
            <Text color='beige' variant="text">JTBD, персоны, интервью, опросы, анализ конкурентов и аудитории</Text>
          </div>
        </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant="filled" className="h-[430px]"> 
            <div className="flex flex-col justify-between h-full">
              <div className="flex  justify-between mb-1.5">
                <Text variant="h4" color="dark-beige">
                  Комплексно подхожу к дизайну продукта
                </Text>
              </div>
              <Image
                src={"/img/main/work/com.png"}
                width={206}
                height={230}
                alt=""
                className="ml-auto mr-0"
              />
              <Text variant="text" color='beige'>
                Разрабатываю не только сайты, но и презентации, оформляю соцсети,
                готовлю PDF-файлы— всё в едином стиле
              </Text>
            </div>

          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="h-[430px]" variant="filled">
            <>
          <div className="flex flex-col justify-between h-full relative z-10">
            <Text color='dark-beige' variant='h4'>
              Работаю легально по договору
            </Text>
            <Text variant='text' color='beige'>
              Я зарегистрирована как самозанятая, выдаю чеки и работаю
              по договору, который защищает обе стороны
            </Text>{" "}
          </div>
          <Image
              src={"/img/main/work/stamp.png"}
              width={173}
              height={173}
              alt=""
              className="right-0 absolute top-14" 
          />
        </>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="h-[430px]" variant="filled">
            <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between gap-3">

            <Text variant="h4" color="dark-beige">
              Понимаю психологию пользователя
            </Text>
              <Image
                src={"/svg/group.svg"}
                alt=""
                width={61}
                height={51}
              />
          </div>
          <Text variant="text" color="beige">
            Психологическое образование помогает мне проектировать интерфейсы,
            вызывающие доверие и эмоции у пользователей
          </Text>
        </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="h-[430px]" variant="filled">
                    <div className="flex flex-col justify-between h-full">
          <Text color='dark-beige' variant='h4'>
            Ответственно подхожу к своей работе
          </Text>
          <Text variant='text' color='beige'>
            Соблюдаю дедлайны, остаюсь на связи, держу в курсе этапов работы
          </Text>
        </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
         <Card variant="filled" className="h-[430px]">
          <div className="flex flex-col justify-between h-full">
           <Text variant='h4' color='dark-beige'>
             Глубоко погружаюсь в проект
           </Text>
           <Text variant="text" color='beige'>
              Изучаю бизнес, аудиторию и цели, чтобы дизайн точно решал нужные
              задачи
           </Text>
        </div>
      </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
)
}

