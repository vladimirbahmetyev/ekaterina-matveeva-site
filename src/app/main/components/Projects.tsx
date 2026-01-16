import { Heading } from "@/app/ui/typography/Heading";
import { Text } from "@/app/ui/typography/Text";
import { ProjectCard, ProjectCardProps } from "@/app/ui/card/ProjectCard";
const projects: ProjectCardProps[] = [
  {
    imgUrl: "/img/main/projects/mobile_home_case_1_presentations.png",
    title: "Создание графических материалов для вашего проекта ",
    link: "",
    tags: ["Презентации", "PDF-гайды", "Оформление соцсетей"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case_2_lips.png",
    title: "Лендинг для продажи онлайн-курса по перманентному макияжу губ",
    link: "",
    tags: ["Тильда", "Веб-дизайн", "Лендинг"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case3_alex.png",
    title: "Множество лендингов для продажи бизнес-наставничества (8+ сайтов)",
    link: "",
    tags: ["Тильда", "Веб-дизайн", "Многостраничный сайт"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case_4_cosmetics.png",
    title: "Интернет-магазин японской примиум косметики SK-II",
    link: "",
    tags: ["Тильда", "Веб-дизайн", "Интернет-магазин"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case_5_conference.png",
    title: "Сайт для анонса мероприятия и сбора заявок на конференцию",
    link: "",
    tags: ["Тильда", "Веб-дизайн", "Лендинг"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case6_yandex.png",
    title: "Сайт для анонса мероприятия и сбора заявок на конференцию",
    link: "",
    tags: ["Редизайн", "UI/UX дизайн", "Многостраничный сайт"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case7_kudaygodno.png",
    title: "Сервис по подбору туров и путешевсткий КудаУгодно",
    link: "",
    tags: ["UI/UX дизайн", "Многостраничный сайт"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case8_mendi.png",
    title: "Приложение для отслеживания приёма лекарств Mendi",
    link: "",
    tags: ["UI/UX дизайн", "Приложение"],
  },
  {
    imgUrl: "/img/main/projects/mobile_home_case9_skillswap.png",
    title: "Приложение для прохождения онлайн- мастер-классов SkillSwap",
    link: "",
    tags: ["Приложение", "UI/UX дизайн"],
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-2 px-2.5">
      <Heading>Рабочие проекты</Heading>
      <Text className="mb-6 mt-2 font-semibold text-xs text-[#B6B2A8]">
        Портфолио с дизайн-кейсами
      </Text>
      {projects.map((project) => (
        <ProjectCard {...project} key={project.title} />
      ))}
    </div>
  );
};
