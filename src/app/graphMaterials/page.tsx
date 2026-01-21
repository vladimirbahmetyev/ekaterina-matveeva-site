import { Text } from "@/app/ui/typography/Text";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { OrderButton } from "@/app/ui/buttons/OrderButton";
import { ProjectCard, ProjectCardProps } from "@/app/ui/card/ProjectCard";

const Material: ProjectCardProps[] = [
  {
    imgUrl: "/img/graphMaterials/main/presentations_1.png",
    title: "Баннеры, креативы для рекламы, превью для видео",
    tags: ["Соцсети", "Реклама", "Маркетинг"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_2.png",
    title: "Презентация для выступления  на мероприятии",
    tags: ["Аренда костюмов", "Дизайн одежды", "Стиль жизни"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_3.png",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["Бьюти", "Офлайн-курсы", "Уход за собой"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_4.png",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["Стиль жизни", "Уход за собой", "Онлайн-курсы"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_5.png",
    title: "Презентация для рекламы мероприятия",
    tags: ["Мероприятия", "Нетворкинг", "Афиша"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_6.png",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["SMM", "Онлайн-курсы", "Маркетинг"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_7.png",
    title: "Презентация коммерческого предложения",
    tags: ["Тендеры", "Онлайн-курс", "Заработок"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_8.png",
    title: "Карточки для объявления спикеров на конференции",
    tags: ["Мероприятия", "SMM", "Афиша"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_9.png",
    title: "Гайд для онлайн-школы сербского языка для рускоговорящих",
    tags: ["Гайд", "Языковая школа", "Лид-магнит"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_10.png",
    title: "Инфографика и буклеты для онлайн-курса",
    tags: ["Бьюти", "PDF-файлы", "Оналайн-курсы"],
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_11.png",
    title: "Оформление группы ВКонтакте",
    tags: ["Соцсети", "ВКонтакте", "Бизнес"],
  },
];

export default function GraphMaterials() {
  return (
    <div className="flex flex-col px-2.5 py-10">
      <div className="flex flex-col gap-5 pb-5">
        <div className="flex flex-col gap-6">
          <NavigationButton text="Назад" back />
          <Text className="text-[#35322A] font-semibold">
            Создание графических материалов для вашего проекта{" "}
          </Text>
          <Text className="font-[#777162]">
            Здесь собраны последние кейсы с разработкой презентаций, гайдов,
            оформление соцсетей, PDF-материалов для рассылки, обложки, банеры,
            креативы и т.п.
          </Text>
        </div>
        <OrderButton />
      </div>

      {Material.map((project) => (
        <ProjectCard {...project} key={project.title + project.imgUrl} />
      ))}
    </div>
  );
}
