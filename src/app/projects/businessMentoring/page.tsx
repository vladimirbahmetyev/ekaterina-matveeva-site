import {
  PresentationCard,
  PresentationCardProps,
} from "@/app/projects/businessMentoring/components/PresentationCard";
import { Info } from "@/app/projects/components/Info";
import Image from "next/image";

const presentationCards: PresentationCardProps[] = [
  {
    imgUrl: "/img/projects/businessMentoring/alex_1.png",
    title: "Лендинг для сбора заявок на онлайн-курс “Предприниматель”",
    link: "google.com",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_2.png",
    title: "Лендинг афиша выезного бизнес-тренинга в Турции”",
    link: "google.com",
  },

  {
    imgUrl: "/img/projects/businessMentoring/alex_3.png",
    title: "Лендинг для сбора заявок в онлайн-сообщество “Алекс Клуб”",
    link: "google.com",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_4.png",
    title: "Онлайн-распродажа записей ТОП-программ Алекса Яновского",
    link: "google.com",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_5.png",
    title: "Лендинг для сбора заявок на онлайн-курс “Мастер группа”",
    link: "google.com",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_6.png",
    title: "Онлайн-распродажа инструментов для управления бизнесом",
    link: "google.com",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_7.png",
    title: "Лендинг афиша выезного бизнес-тренинга в Ташкенте",
    link: "google.com",
  },
  {
    imgUrl: "/img/projects/businessMentoring/alex_8.png",
    title: "Лендинг для сбора заявок на онлайн-курс “Масштабирование”",
    link: "google.com",
  },
];

export default function BusinessMentoring() {
  return (
    <div className="flex flex-col gap-10 px-2.5">
      {presentationCards.map((val) => (
        <PresentationCard {...val} key={val.title} />
      ))}
      <Info
        title="Вводные данные"
        description={
          "Я сотрудничаю с маркетинговым отделом Алекса Яновского на постоянной основе, разрабатывая цифровые и визуальные материалы для продвижения образовательных проектов, мероприятий и онлайн-продуктов. Моя задача — создавать дизайн, который решает маркетинговые цели, используя комплексный подход к дизайну."
        }
      />
      <Image
        src="/img/projects/businessMentoring/alex_9.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/businessMentoring/alex_10.png"
        alt=""
        width={590}
        height={590}
      />
      <Info
        title={"Основные направления работы включают"}
        description={
          " — разработку лендингов для сбора заявок, акций и продвижения мероприятий;  — создание баннеров и рекламных материалов для digital- и офлайн-кампаний;  — оформление YouTube-канала (обложки для видео и эфиров);  — дизайн постов, сторис и обложек рилсов для Instagram и Telegram;  — создание презентаций, брендированных аватаров;  — генерацию визуального контента с помощью нейросетей."
        }
      />
      <Image
        src="/img/projects/businessMentoring/alex_11.png"
        alt=""
        width={590}
        height={590}
      />
      <Info
        title={
          "Я разрабатываю лендинги совместно с верстальщиком и маркетологом, готовя дизайн-макеты, которые обеспечивают конверсию."
        }
        description={
          "Работа с командой проходит в формате ежедневного взаимодействия с маркетологами, копирайтерами и руководителями проектов. Каждый макет проходит несколько этапов согласований с арт-директором и генеральным директором, что требует высокой скорости, аккуратности и умения адаптироваться к разным задачам."
        }
      />
      <Image
        src="/img/projects/businessMentoring/alex_12.png"
        alt=""
        width={590}
        height={590}
      />
      <Info
        title={
          "Помимо сайтов, я создаю визуальные концепции для рекламы: баннеры, дизайн постов в соцсетях, превью для видео, презентации для выступлений и лекций и многое другое."
        }
        description={
          "Применяю нейросети для генерации изображений по мере необходимости, что позволяет быстрее воплощать идеи и создавать уникальные визуалы для маркетинга. "
        }
      />
      <Image
        src="/img/projects/businessMentoring/alex_13.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/businessMentoring/alex_14.png"
        alt=""
        width={590}
        height={590}
      />
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
