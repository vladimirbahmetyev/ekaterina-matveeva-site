"use client";

import { FC, useRef, useState } from "react";
import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface SwiperCardProps {
  imgUrl?: string;
  step?: string;
  title?: string;
  text?: string;
}

const SwiperCard: FC<SwiperCardProps> = ({ imgUrl, step, text, title }) => {
  return (
    <div className="bg-[#F9F5EC] rounded-xl">
      {imgUrl && (
        <Image
          className="w-full"
          src={imgUrl}
          alt=""
          width={250}
          height={140}
        />
      )}
      <div className="p-5 min-h-[73vw]">
        <div className="flex flex-col gap-3">
          <Text className="text-[10px] text-[#B6B2A8] font-medium">{step}</Text>
          <Text className="font-semibold text-[#35322A] leading-[110%]">
            {title}
          </Text>
          <Text className="font-medium leading-[110%] whitespace-pre-wrap">
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
};

export const Steps: FC = () => {
  const swiper = useRef(null);
  const [isFirst, setIsFirst] = useState(true);
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
    <div className="max-w-full flex flex-col items-center pl-2.5 gap-2 my-10">
      <Heading>Этапы работы</Heading>
      <Text className="text-center text-[#B6B2A8] font-semibold">
        Благодаря которым сотрудничество будет понятным и безопасным
      </Text>
      <div className="max-w-full pl-2.5">
        <div className="flex gap-2 justify-center w-full">
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
          className="mt-3 relative"
          slidesPerView={1.4}
          spaceBetween={8}
          modules={[Navigation]}
          onSwiper={(swiperInstance) => {
            swiper.current = swiperInstance;
          }}
          onTransitionEnd={() => onSwipe()}
        >
          <SwiperSlide className="w-full">
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step1.png"}
              step="Этап 1 из 5"
              title="Брифинг, коммерческое предложение, договор."
              text={`Чтобы узнать подробности и задачи, я предлагаю созвониться или заполнить электронный бриф самостоятельно.\n\nПосле этого, я сделаю для вас индивидуальный документ с расчетом сроков работ и стоимости в нескольких вариантах.\n\nВы выбираете подходящий тариф и я высылаю договор.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step2.png"}
              step="Этап 2 из 5"
              title="Аналитика, структура сайта, референсы"
              text={`Я знакомлюсь с вашей нишей, погружаюсь в проект.\n\nПровожу исследование конкурентов, анализ целевой аудитории и её потребности.\n\nНа основе результатов исследованния состовляю мудборд и собираю референсы.\n\nЗнакомлюсь с вашими ожиданиями по дизайну.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step3.png"}
              step="Этап 3 из 5"
              title="Концепция дизайна, создание макетов"
              text={`Создаю несколько вариантов оформления сайта, на примере первых блоков.\n\nПровожу презентацию с демонстрацией вариантов, аргументацией решений.\n\nСоздаю макеты всех страниц в выбранной стилистике, презентую, вношу правки.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step4.png"}
              step="Этап 4 из 5"
              title="Вёрстка сайта"
              text={`Перехожу к технической настройке сайта на платформе Tilda: переношу макеты, настраиваю переходы по ссылкам, добавляю анимацию.\n\nАдаптирую дизайн под все типы устройств.\n\nДелаю seo-настройки, подключаю домен, формы, оплаты, CRM и другие технические настройки.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step5.png"}
              step="Этап 5 из 5"
              title="Поддержка проекта"
              text={`После завершения работы я оказываю тех.поддержку в течении 1-2 недели.\n\nВ дальнейшем, я не пропадаю, а остаюсь на связи чтобы помочь решить возможные вопросы по сайту или подготовить другие дизайн-материалы для вашего продукта, например: презентации, PDF-файлы для рассылок, чек-листы, баннеры для рекламы, оформление группы ВК и др.`}
            ></SwiperCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
