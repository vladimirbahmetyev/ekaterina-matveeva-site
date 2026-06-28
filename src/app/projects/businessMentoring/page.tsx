"use client";

import {
  PresentationCard,
  PresentationCardProps,
} from "@/app/projects/businessMentoring/components/PresentationCard";
import { Info } from "@/app/projects/components/Info";
import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import { useState } from "react";

const presentationCards: PresentationCardProps[] = [
  {
    imgUrl: "/img/projects/businessMentoring/alex_1.webp",
    title: "Лендинг для сбора заявок на индивидуальное обучение (консалтинг)",
    link: "https://alexyanovsky.pro/indiv_work",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_2.webp",
    title: "Лендинг для сбора заявок на интенсив по бизнесу с AI",
    link: "https://alexyanovsky.com/ai_business/",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_3.webp",
    title: "Лендинг для сбора заявок на интенсив по масштабированию бизнеса",
    link: "https://alexyanovsky.com/mbr_strategy/",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_4.webp",
    title: "Лендинг для сбора заявок на онлайн-курс “Предприниматель”",
    link: "https://alexyanovsky.com/entrepreneur_new/",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_5.webp",
    title: "Лендинг для анонса мероприятия в Майами",
    link: "https://alexyanovsky.com/miami_may/",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_6.webp",
    title: "Информационный сайт консалтинговой компании ",
    link: "https://biz-education.pro",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_7.webp",
    title: "Лендинг афиша выезного бизнес-тренинга в Турции”",
    link: "https://alexyanovsky.com/may_trening_turkey2025/",
  },

  {
    imgUrl: "/img/projects/businessMentoring/alex_8.webp",
    title: "Лендинг для сбора заявок в онлайн-сообщество “Алекс Клуб”",
    link: "https://alexyanovsky.com/alex_club_site/",
  },

  {
    imgUrl: "/img/projects/businessMentoring/alex_9.webp",
    title: "Онлайн-распродажа записейТОП-программ Алекса Яновского",
    link: "https://alexyanovsky.com/summer_sales/",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_10.webp",
    title: "Онлайн-распродажа инструментов для управления бизнесом",
    link: "https://alexyanovsky.com/bonus_7steps/",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_11.webp",
    title: "Лендинг афиша выезного бизнес-тренинга в Ташкенте",
    link: "https://alexyanovsky.com/vip_trening2025/",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_12.webp",
    title: "Лендинг для сбора заявок на онлайн-курс “Мастер группа”",
    link: "https://alexyanovsky.com/mastergr/",
  },
];

export default function BusinessMentoring() {
  const [isAllShown, setIsAllShown] = useState(false);
  const handleViewClick = () => setIsAllShown((prev) => !prev);
  const cardsToDraw = isAllShown
    ? presentationCards
    : presentationCards.slice(0, 3);
  return (
    <div className="flex flex-col gap-10 px-2.5 md:px-30">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-3">
        {cardsToDraw.map((val) => (
          <PresentationCard {...val} key={val.title} />
        ))}
      </div>
      <div
        className="w-full flex justify-center border-1 border-[#B6B2A8] rounded-full py-4 bg-[#F9F5EC] cursor-pointer"
        onClick={() => handleViewClick()}
      >
        <Text variant="text" color="dark-beige">
          {!isAllShown
            ? `Смотреть другие проекты ( +${presentationCards.length - 3})`
            : "Свернуть кейсы"}
        </Text>
      </div>
      <Info
        title="Вводные данные"
        description={
          "Я сотрудничаю с маркетинговым отделом Алекса Яновского на постоянной основе, разрабатывая цифровые и визуальные материалы для продвижения образовательных проектов, мероприятий и онлайн-продуктов. Моя задача — создавать дизайн, который решает маркетинговые цели, используя комплексный подход к дизайну."
        }
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-5">
        <Image
          src="/img/projects/businessMentoring/alex_case_dk_1.webp"
          alt=""
          width={590}
          height={590}
        />
        <Image
          src="/img/projects/businessMentoring/alex_case_dk_2.webp"
          alt=""
          width={590}
          height={590}
        />
      </div>
      <Info
        title={"Основные направления работы включают"}
        description={
          " — разработку лендингов для сбора заявок, акций и продвижения мероприятий; — создание баннеров и рекламных материалов для digital- и офлайн-кампаний; — оформление YouTube-канала (обложки для видео и эфиров); — дизайн постов, сторис и обложек рилсов для Instagram и Telegram; — создание презентаций, брендированных аватаров; — генерацию визуального контента с помощью нейросетей."
        }
      />
      <Image
        src="/img/projects/businessMentoring/alex_case_dk_3.webp"
        alt=""
        width={590}
        height={590}
        className="w-full"
      />
      <Info
        title={
          "Я разрабатываю лендинги совместно с верстальщиком и маркетологом,готовя дизайн-макеты, которые обеспечивают конверсию."
        }
        description={
          "Работа с командой проходит в формате ежедневного взаимодействия с маркетологами, копирайтерами и руководителями проектов. Каждый макет проходит несколько этапов согласований с арт-директором и генеральным директором, что требует высокой скорости, аккуратности и умения адаптироваться к разным задачам."
        }
      />
      <Image
        src="/img/projects/businessMentoring/alex_case_dk_4.webp"
        alt=""
        width={590}
        height={590}
        className="w-full"
      />
      <Info
        title={
          "Помимо сайтов, я создаю визуальные концепции для рекламы: баннеры, дизайн постов в соцсетях, превью для видео, презентации для выступлений и лекций и многое другое."
        }
        description={
          "Применяю нейросети для генерации изображений по мере необходимости, что позволяет быстрее воплощать идеи и создавать уникальные визуалы для маркетинга. "
        }
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-5">
        <Image
          src="/img/projects/businessMentoring/alex_case_dk_5.webp"
          alt=""
          width={590}
          height={590}
        />
        <Image
          src="/img/projects/businessMentoring/alex_case_dk_6.webp"
          alt=""
          width={590}
          height={590}
        />
      </div>
      <Info
        title={
          "За время работы я создала сотни лендингов, тысычи рекламных макетов и визуальных материалов, которые регулярно используются в продвижении проектов, запуске продаж и освещении мероприятий."
        }
        description={
          "Благодаря комплексному подходу к проекту, моя работа охватывает дизайн и маркетинг. Это позволяет мне быть не просто исполнителем, а партнером в развитии бренда — тем, кто помогает компании выстраивать сильный, узнаваемый и конкурентоспособный образ в цифровой среде."
        }
      />
    </div>
  );
}
