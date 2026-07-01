"use client";

import { FC, useRef, useState } from "react";
import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { tr } from "motion/react-client";

interface SwiperCardProps {
  imgUrl?: string;
  step?: string;
  title?: string;
  text?: string;
}

const SwiperCard: FC<SwiperCardProps> = ({ imgUrl, step, text, title }) => {
  return (
    <div className="bg-[#F9F5EC] rounded-xl  min-h-[600px] lg:min-h-[603px]">
      {imgUrl && (
        <Image
          className="w-full"
          src={imgUrl}
          alt=""
          width={250}
          height={140}
        />
      )}
      <div className="p-5 lg:p-8">
        <div className="flex flex-col gap-4">
          <Text variant="footnote" color="light-beige">
            {step}
          </Text>
          <Text variant="h4" color="heading">
            {title}
          </Text>
          <Text
            variant="text"
            color="dark-beige"
            className="whitespace-pre-wrap"
          >
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
};

export const Steps: FC = () => {
  const swiper = useRef<null | SwiperType>(null);
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const onSwipe = () => {
    const { isEnd, isBeginning } = swiper.current ?? {};
    setIsLast(isEnd ?? false);
    setIsFirst(isBeginning ?? true);
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
    <div
      id="steps"
      className="max-w-full flex flex-col items-center gap-2 my-10 lg:my-15 lg:pt-10"
    >
      <Heading className="mb-2">Этапы работы</Heading>
      <div className="max-w-full pl-2.5">
        <div className="flex flex-col lg:flex-row items-center gap-2 justify-center lg:px-30 w-full relative">
          <Text className="text-center max-w-[40ch]" variant="h4" color="beige">
            Благодаря которым сотрудничество будет понятным и безопасным
          </Text>
          <div className="flex gap-2 items-center lg:absolute right-[120px] top-0">
            <div
              className="rotate-180 cursor-pointer"
              onClick={() => onArrowClick("prev")}
            >
              <div className={`arrow-mask ${isFirst ? "!bg-[#AEAEAE]" : ""}`} />
            </div>
            <div
              className=" cursor-pointer"
              onClick={() => onArrowClick("next")}
            >
              <div className={`arrow-mask ${isLast ? "!bg-[#AEAEAE]" : ""}`} />
            </div>
          </div>
        </div>
        <Swiper
          className="mt-3 lg:mt-6 relative !pb-12"
          slidesPerView={1.1}
          spaceBetween={8}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
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
          <SwiperSlide className="w-full">
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step1.webp"}
              step="Этап 1 из 5"
              title="Брифинг, коммерческое предложение, договор."
              text={`Чтобы узнать подробности и задачи, я предлагаю созвониться или заполнить электронный бриф самостоятельно.\n\nПосле этого, я сделаю для вас индивидуальный документ с расчетом сроков работ и стоимости в нескольких вариантах.\n\nВы выбираете подходящий тариф и я высылаю договор.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step2.webp"}
              step="Этап 2 из 5"
              title="Аналитика, структура сайта, референсы"
              text={`Я знакомлюсь с вашей нишей, погружаюсь в проект.\n\nПровожу исследование конкурентов, анализ целевой аудитории и её потребности.\n\nНа основе результатов исследованния состовляю мудборд и собираю референсы.\n\nЗнакомлюсь с вашими ожиданиями по дизайну.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step3.webp"}
              step="Этап 3 из 5"
              title="Концепция дизайна, создание макетов"
              text={`Создаю несколько вариантов оформления сайта, на примере первых блоков.\n\nПровожу презентацию с демонстрацией вариантов, аргументацией решений.\n\nСоздаю макеты всех страниц в выбранной стилистике, презентую, вношу правки.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step4.webp"}
              step="Этап 4 из 5"
              title="Вёрстка сайта"
              text={`Перехожу к технической настройке сайта на платформе Tilda: переношу макеты, настраиваю переходы по ссылкам, добавляю анимацию.\n\nАдаптирую дизайн под все типы устройств.\n\nДелаю seo-настройки, подключаю домен, формы, оплаты, CRM и другие технические настройки.`}
            ></SwiperCard>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard
              imgUrl={"/img/main/swiper/mobile_home_step5.webp"}
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
