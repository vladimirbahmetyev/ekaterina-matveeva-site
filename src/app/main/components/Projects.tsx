'use client'

import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";
import { ProjectCard, ProjectCardProps } from "@/app/ui/card/ProjectCard";
import { useState } from "react";


const filterTags = [
  {
    label: 'Все',
    value: 'all'
  },
  {
    label: 'Магазин',
    value: 'shop'
  },
  {
    label: 'Мероприятие',
    value: 'event'
  },
  {
    label: 'Медиа:  Презентации, креативы',
    value: 'media'
  },
  {
    label: 'Мобильные приложения',
    value: 'mobile'
  },
  {
    label: 'Онлайн-курсы',
    value: 'courses'
  },
  {
    label: 'Другое',
    value: 'other'
  },
]

export const projects: ProjectCardProps[] = [
  {
    imgUrl: "/img/main/projects/mobile_home_case_1_presentations.png",
    title: "Создание графических материалов для вашего проекта ",
    link: "/graphMaterials",
    tags: ["Презентации", "PDF-гайды", "Оформление соцсетей"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case_2_lips.png",
    title: "Лендинг для продажи онлайн-курса по перманентному макияжу губ",
    link: "/projects/aboutLips",
    tags: ["Тильда", "Веб-дизайн", "Лендинг"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case3_alex.png",
    title: "Множество лендингов для продажи бизнес-наставничества (8+ сайтов)",
    link: "/projects/businessMentoring",
    tags: ["Тильда", "Веб-дизайн", "Многостраничный сайт"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case_4_cosmetics.png",
    title: "Интернет-магазин японской примиум косметики SK-II",
    link: "/projects/cosmetics",
    tags: ["Тильда", "Веб-дизайн", "Интернет-магазин"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case_5_conference.png",
    title: "Сайт для анонса мероприятия и сбора заявок на конференцию",
    link: "/projects/womenConference",
    tags: ["Тильда", "Веб-дизайн", "Лендинг"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case6_yandex.png",
    title: "Система учета работы сотрудников на складе  Яндекс Маркета" + "",
    link: "/projects/germes",
    tags: ["Редизайн", "UI/UX дизайн", "Многостраничный сайт"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case7_kudaygodno.png",
    title: "Сервис по подбору туров и путешевсткий КудаУгодно",
    link: "/projects/whereYouWant",
    tags: ["UI/UX дизайн", "Многостраничный сайт"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case8_mendi.png",
    title: "Приложение для отслеживания приёма лекарств Mendi",
    link: "/projects/mendi",
    tags: ["UI/UX дизайн", "Приложение"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case9_skillswap.png",
    title: "Приложение для прохождения онлайн- мастер-классов SkillSwap",
    link: "/projects/skillSwap",
    tags: ["Приложение", "UI/UX дизайн"],
  },
];


export const Projects = () => {
  const [isAllOpen, setIsAllOpen] = useState(false)
  const handleViewClick = () => setIsAllOpen((prev) => !prev)
  
  const [selectedTag, setSelectedTag] = useState('all')
  const handleTagClick = (newVal: string) => setSelectedTag(newVal) 

  const projectsToDraw = isAllOpen ? projects : projects.slice(0, 3)

  return (
    <div className="flex flex-col items-center gap-2 md:px-30 md:mt-10 pb-10">
      <Heading variant="h2" className="mb-2">Рабочие проекты</Heading>
      <Text className="mb-6 mb-10" variant="h4" color="beige">
        Портфолио с дизайн-кейсами
      </Text>
      <div className="flex gap-2 mb-10 flex-wrap">
        {filterTags.map(val => {
          return (
          <div onClick={() => handleTagClick(val.value)}  className={`border-1 border-[#434343] rounded-full py-3 px-4 cursor-pointer ${selectedTag === val.value ? 'text-white! bg-[#434343]' : ''}`} key={val.value}>
              <Text variant="h4" color={selectedTag === val.value ? 'white' : "heading"} className="text-nowrap">
                {val.label}
              </Text>
          </div>
          )
        }) }
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-5">
        {projectsToDraw.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
      <div className="w-full flex justify-center border-1 border-[#B6B2A8] rounded-full py-4 bg-[#F9F5EC] cursor-pointer" onClick={() => handleViewClick()}>
        <Text variant="text" color="dark-beige">
          {!isAllOpen ? `Смотреть другие проекты ( +${projects.length - 3})` : 'Свернуть кейсы'}
        </Text>
      </div>
    </div>
  );
};
