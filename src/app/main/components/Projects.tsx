"use client";

import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";
import { ProjectCard, ProjectCardProps } from "@/app/ui/card/ProjectCard";
import { useState } from "react";

const filterTags = [
  {
    label: "Все",
    value: "all",
  },
  {
    label: "Магазин",
    value: "shop",
  },
  {
    label: "Мероприятие",
    value: "event",
  },
  {
    label: "Медиа:  Презентации, креативы",
    value: "media",
  },
  {
    label: "Мобильные приложения",
    value: "mobile",
  },
  {
    label: "Онлайн-курсы",
    value: "courses",
  },
  {
    label: "Другое",
    value: "other",
  },
];

export const projects: ProjectCardProps[] = [
  {
    imgUrl: "/img/main/projects/mobile_home_case1.webp",
    title: "Создание графических материалов для вашего проекта ",
    smallTitle: "Графические материалы ",
    link: "/graphMaterials",
    tags: ["Презентации", "PDF-гайды", "Оформление соцсетей"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case2.webp",
    title: "Лендинг для продажи онлайн-курса по перманентному макияжу губ",
    link: "/projects/aboutLips",
    tags: ["Тильда", "Веб-дизайн", "Лендинг"],
    smallTitle: "Лендинг для онлайн-курсов",
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case3.webp",
    title: "Множество лендингов для продажи бизнес-наставничества (8+ сайтов)",
    link: "/projects/businessMentoring",
    tags: ["Тильда", "Веб-дизайн", "Многостраничный сайт"],
    smallTitle: "Множество лендингов для продажи бизнес-наставничества",
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case4.webp",
    title: "Интернет-магазин японской примиум косметики SK-II",
    link: "/projects/cosmetics",
    tags: ["Тильда", "Веб-дизайн", "Интернет-магазин"],
    smallTitle: "Интернет-магазин косметики",
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case5.webp",
    title: "Сайт для анонса мероприятия и сбора заявок на конференцию",
    link: "/projects/womenConference",
    tags: ["Тильда", "Веб-дизайн", "Лендинг"],
    smallTitle: "Лендинг для сбора заявок на форум",
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case6.webp",
    title: "Система учета работы сотрудников на складе  Яндекс Маркета" + "",
    link: "/projects/germes",
    tags: ["Редизайн", "UI/UX дизайн", "Многостраничный сайт"],
    smallTitle: "Система учёты работы на складе Яндекс Маркета",
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case7.webp",
    title: "Сервис по подбору туров и путешевсткий КудаУгодно",
    link: "/projects/whereYouWant",
    tags: ["UI/UX дизайн", "Многостраничный сайт"],
    smallTitle: "Сайт по подбору туров и путешествий",
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case8.webp",
    title: "Приложение для отслеживания приёма лекарств Mendi",
    link: "/projects/mendi",
    tags: ["UI/UX дизайн", "Приложение"],
    smallTitle: "Приложение (iOS) трекер отслеживания медикаментов",
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case9.webp",
    title: "Приложение для прохождения онлайн- мастер-классов SkillSwap",
    link: "/projects/skillSwap",
    tags: ["Приложение", "UI/UX дизайн"],
    smallTitle: "Приложение (iOS) для прохождения мастер-классов ",
  },
];

export const Projects = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const handleViewClick = () => {
    if (isAllOpen) {
      document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsAllOpen((prev) => !prev);
  };

  const [selectedTag, setSelectedTag] = useState("all");
  const handleTagClick = (newVal: string) => setSelectedTag(newVal);

  const projectsToDraw = isAllOpen ? projects : projects.slice(0, 3);

  return (
    <div
      id="cases"
      className="flex flex-col items-center gap-2 md:px-30 md:mt-10 pb-10 px-4"
    >
      <Heading variant="h2" className="mb-2">
        Рабочие проекты
      </Heading>
      <Text className="mb-6 mb-10" variant="h4" color="beige">
        Портфолио с дизайн-кейсами
      </Text>
      <div className="flex justify-center md:justify-start gap-2 mb-10 flex-wrap">
        {filterTags.map((val) => {
          return (
            <div
              onClick={() => handleTagClick(val.value)}
              className={`border-1 border-[#434343] rounded-full py-3 px-4 cursor-pointer ${selectedTag === val.value ? "text-white! bg-[#434343]" : ""}`}
              key={val.value}
            >
              <Text
                variant="h4"
                color={selectedTag === val.value ? "white" : "heading"}
                className="text-nowrap"
              >
                {val.label}
              </Text>
            </div>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projectsToDraw.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
      <div
        className="w-full flex justify-center border-1 border-[#B6B2A8] rounded-full py-4 bg-[#F9F5EC] cursor-pointer"
        onClick={() => handleViewClick()}
      >
        <Text variant="text" color="dark-beige">
          {!isAllOpen
            ? `Смотреть другие проекты ( +${projects.length - 3})`
            : "Свернуть кейсы"}
        </Text>
      </div>
    </div>
  );
};
