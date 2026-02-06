"use client";

import { Text } from "@/app/ui/typography/Text";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { ProjectCard, ProjectCardProps } from "@/app/ui/card/ProjectCard";
import Image from "next/image";

import {
  MaterialsPopupProvider,
  registeredPopups,
} from "@/app/graphMaterials/MaterialsPopupProvider";
import { Popup } from "@/app/graphMaterials/Popup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/app/ui/buttons/Button";
import { FC } from "react";

const Material: (ProjectCardProps & { popupId: registeredPopups })[] = [
  {
    imgUrl: "/img/graphMaterials/main/presentations_1.png",
    title: "Баннеры, креативы для рекламы, превью для видео",
    tags: ["Соцсети", "Реклама", "Маркетинг"],
    popupId: "alex",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_2.png",
    title: "Презентация для выступления  на мероприятии",
    tags: ["Аренда костюмов", "Дизайн одежды", "Стиль жизни"],
    popupId: "wings",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_3.png",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["Бьюти", "Офлайн-курсы", "Уход за собой"],
    popupId: "presentation_jul",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_4.png",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["Стиль жизни", "Уход за собой", "Онлайн-курсы"],
    popupId: "presentation_massage",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_5.png",
    title: "Презентация для рекламы мероприятия",
    tags: ["Мероприятия", "Нетворкинг", "Афиша"],
    popupId: "presentation_conference",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_6.png",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["SMM", "Онлайн-курсы", "Маркетинг"],
    popupId: "presentation_smm",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_7.png",
    title: "Презентация коммерческого предложения",
    tags: ["Тендеры", "Онлайн-курс", "Заработок"],
    popupId: "commercial",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_8.png",
    title: "Карточки для объявления спикеров на конференции",
    tags: ["Мероприятия", "SMM", "Афиша"],
    popupId: "speakers",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_9.png",
    title: "Гайд для онлайн-школы сербского языка для рускоговорящих",
    tags: ["Гайд", "Языковая школа", "Лид-магнит"],
    popupId: "languageSchool",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_10.png",
    title: "Инфографика и буклеты для онлайн-курса",
    tags: ["Бьюти", "PDF-файлы", "Оналайн-курсы"],
    popupId: "lips",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_11.png",
    title: "Оформление группы ВКонтакте",
    tags: ["Соцсети", "ВКонтакте", "Бизнес"],
    popupId: "vk",
  },
] as const;

const popupSwiperData: Record<
  registeredPopups,
  `/img/graphMaterials/popup/${registeredPopups}/${string}`[]
> = {
  alex: [
    "/img/graphMaterials/popup/alex/mb_alex_pr_1.png",
    "/img/graphMaterials/popup/alex/mb_alex_pr_2.png",
    "/img/graphMaterials/popup/alex/mb_alex_pr_3.png",
    "/img/graphMaterials/popup/alex/mb_alex_pr_4.png",
    "/img/graphMaterials/popup/alex/mb_alex_pr_5.png",
  ],
  commercial: [
    "/img/graphMaterials/popup/commercial/1.png",
    "/img/graphMaterials/popup/commercial/2.png",
    "/img/graphMaterials/popup/commercial/3.png",
  ],
  languageSchool: [
    "/img/graphMaterials/popup/languageSchool/1.png",
    "/img/graphMaterials/popup/languageSchool/2.png",
    "/img/graphMaterials/popup/languageSchool/3.png",
    "/img/graphMaterials/popup/languageSchool/4.png",
  ],
  lips: [
    "/img/graphMaterials/popup/lips/1.png",
    "/img/graphMaterials/popup/lips/2.png",
    "/img/graphMaterials/popup/lips/3.png",
  ],
  presentation_conference: [
    "/img/graphMaterials/popup/presentation_conference/1.png",
    "/img/graphMaterials/popup/presentation_conference/2.png",
    "/img/graphMaterials/popup/presentation_conference/3.png",
    "/img/graphMaterials/popup/presentation_conference/4.png",
    "/img/graphMaterials/popup/presentation_conference/5.png",
    "/img/graphMaterials/popup/presentation_conference/6.png",
    "/img/graphMaterials/popup/presentation_conference/7.png",
    "/img/graphMaterials/popup/presentation_conference/8.png",
    "/img/graphMaterials/popup/presentation_conference/9.png",
    "/img/graphMaterials/popup/presentation_conference/10.png",
  ],
  presentation_jul: [
    "/img/graphMaterials/popup/presentation_jul/1.png",
    "/img/graphMaterials/popup/presentation_jul/2.png",
    "/img/graphMaterials/popup/presentation_jul/3.png",
    "/img/graphMaterials/popup/presentation_jul/4.png",
    "/img/graphMaterials/popup/presentation_jul/5.png",
  ],
  presentation_massage: [
    "/img/graphMaterials/popup/presentation_massage/1.png",
    "/img/graphMaterials/popup/presentation_massage/2.png",
    "/img/graphMaterials/popup/presentation_massage/3.png",
    "/img/graphMaterials/popup/presentation_massage/4.png",
    "/img/graphMaterials/popup/presentation_massage/5.png",
    "/img/graphMaterials/popup/presentation_massage/6.png",
    "/img/graphMaterials/popup/presentation_massage/7.png",
    "/img/graphMaterials/popup/presentation_massage/8.png",
  ],
  presentation_smm: [
    "/img/graphMaterials/popup/presentation_smm/1.png",
    "/img/graphMaterials/popup/presentation_smm/2.png",
    "/img/graphMaterials/popup/presentation_smm/3.png",
    "/img/graphMaterials/popup/presentation_smm/4.png",
    "/img/graphMaterials/popup/presentation_smm/5.png",
    "/img/graphMaterials/popup/presentation_smm/6.png",
    "/img/graphMaterials/popup/presentation_smm/7.png",
  ],
  speakers: ["/img/graphMaterials/popup/speakers/mb_card1.png"],
  vk: ["/img/graphMaterials/popup/vk/1.png"],
  wings: [
    "/img/graphMaterials/popup/wings/1.png",
    "/img/graphMaterials/popup/wings/2.png",
    "/img/graphMaterials/popup/wings/3.png",
    "/img/graphMaterials/popup/wings/4.png",
    "/img/graphMaterials/popup/wings/5.png",
    "/img/graphMaterials/popup/wings/6.png",
    "/img/graphMaterials/popup/wings/7.png",
    "/img/graphMaterials/popup/wings/8.png",
    "/img/graphMaterials/popup/wings/9.png",
    "/img/graphMaterials/popup/wings/10.png",
    "/img/graphMaterials/popup/wings/11.png",
  ],
};

const PopupSwiper: FC<{ slides: string[] }> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide}>
          <Image src={slide} alt={""} width={400} height={200} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function GraphMaterials() {
  return (
    <MaterialsPopupProvider>
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
        </div>

        {Material.map((project) => (
          <ProjectCard
            {...project}
            key={project.title + project.imgUrl}
            popupId={project.popupId}
          />
        ))}
      </div>
      <Popup popupId="alex">
        <Text className="mb-3" variant="h4" color="heading">
          Баннеры, креативы для рекламы, превью для видео
        </Text>
        <Text className="mb-5">
          Ко мне можно обратиться за разработкой различных баннеров для
          соцсетей, креативов для рекламы, созданием превью для видео.
        </Text>
        <Button className="mb-5" text={"Узнать про кейс подробнее"} />
        <PopupSwiper slides={popupSwiperData["alex"]} />
      </Popup>
      <Popup popupId="wings">
        <div className="flex flex-col gap-6">
          <Text className="font-[24px] font-semibold" color={"black"}>
            Презентация авторских дизайнерских костюмов с историей
          </Text>
          <Text color={"black"} preserveFormatting>
            {`
Листайте галерею, чтобы рассмотреть слайды презентации.

Презентация была выполнена для выступления на конференции для дизайнера креативных образов. 

Цель выступления: прорекламировать услуги арендыдизайнерских крыльев для проведения фотосессий, праздников и других мероприятий. Для комфортного выступления спикера, мной былаподготовлена не только визуальная часть презентации, но и написантекст для выступления.`}
          </Text>
          <div className="w-full">
            <PopupSwiper slides={popupSwiperData["wings"]} />
          </div>
        </div>
      </Popup>
      <Popup popupId="presentation_jul">
        <div>
          <Text>Продающая презентация косметолога через личный бренд</Text>
          <Text>
            Презентация для выступления на конференции для косметолога и тренера
            перманентного макияжа. Основная цель — заинтересовать и пригласить
            участников конференции на офлайн-курс по освоению новой профессии.
            Дополнительная цель — увеличить запись на услуги заказчика в салоне.
            В итоге, обе цели были достигнуты. Что было сделано: 1. Сбор
            информации, необходимой для презентации, из соцсетей заказчика; 2.
            Составление сторитейлинга для презентации; 3. Доработка материалов
            для презентации (скриншоты с chatGPT); 4. Обработка видео для
            добавления в презентацию; 5. Оформление 22 слайдов. Текст
            презентации был составлен мной с нуля после созвона с заказчиком.
          </Text>
          <PopupSwiper slides={popupSwiperData["presentation_jul"]} />
        </div>
      </Popup>
      <Popup popupId="presentation_massage">
        <Text>Экспертная презентация онлайн-курса по массажу</Text>
        <Text>
          Листайте галерею, чтобы рассмотреть слайды презентации. Презентация
          была выполнена для выступления на конференции для массажиста и
          организатора женского клуба. Цель выступления: продажа мест на
          онлайн-курсе по самомассажу. Что было сделано: 1. Сбор информации,
          необходимой для презентации, из соцсетей заказчика; 2. Составление
          сторитейлинга для презентации; 3. Выбор и согласование стиля и цвета
          изходя из имеющихся фото заказчика; 4. Работа с нейросетями для
          улучшения фото;
        </Text>
        <PopupSwiper slides={popupSwiperData["presentation_massage"]} />
      </Popup>
      <Popup popupId="commercial">
        <div>
          <Text>Коммерческое предложение образовательного продукта</Text>
          <Text>
            Листайте галерею, чтобы рассмотреть слайды презентации. Презентация
            была выполнена для выступления. Цель: продажа мест на онлайн-курсе
            по тендерам. Что было сделано: 1. Систематизация и доработка
            исходного текста; 2. Обработка фото, увеличение качества; 3.
            Добавление графических элементов;
          </Text>
          <PopupSwiper slides={popupSwiperData["commercial"]} />
        </div>
      </Popup>
      <Popup popupId="presentation_conference">
        <div>
          <Text>Презентация для привлечения аудитории на мероприятие</Text>
          <Text>
            Листайте галерею, чтобы рассмотреть слайды презентации. Презентация
            была выполнена для выступления на конференции для организатора
            мероприятий. Цель: заинтересовать и прорекламировать участникам
            планируемое мероприятие в другом городе. Для комфортного выступления
            спикера, мной была подготовлена не только визуальная часть
            презентации, но и написан текст для выступления.
          </Text>
          <PopupSwiper slides={popupSwiperData["presentation_conference"]} />
        </div>
      </Popup>
      <Popup popupId="presentation_smm">
        <Text>Экспертная презентация по продвижению в соцсетях</Text>
        <Text>
          Листайте галерею, чтобы рассмотреть слайды презентации. Презентация
          была выполнена для выступления на конференции для
          маркетолога. Выступление было направлено на продажу курса по
          продвижению в ВК. Кроме продаж, важно было раскрыть полезную
          информацию о трендах маркетинга. Презентация создана на основе текста,
          написанного заказчиком. Что было сделано: 1. Систематизация и
          доработка исходного текста; 2. Обработка фото, увеличение качества; 3.
          Добавление графических элементов;
        </Text>
        <PopupSwiper slides={popupSwiperData["presentation_smm"]} />
      </Popup>
      <Popup popupId="speakers">
        <div>
          <Text>Карточки для объявления спикеров на конференции</Text>
          <Text>
            Я разработала универсальный шаблон карточек для спикеров на
            конференции. Карточки использовались для рекламы спикеров в соцсетях
            как организаторами конференции, так и самими спикерами в своих
            соцсетях. Концепцию я построила вокруг идеи нетворкинга и знакомства
            участников: карточки выполнены в стиле досье — визуально напоминают
            папку с документами, где указаны фото, тема выступления и регалии
            спикера. Такой подход символизирует «личное знакомство» с каждым
            участником, подчеркивает открытость и атмосферу обмена опытом, а
            также визуально выделяет контент конференции в соцсетях.
          </Text>
          <PopupSwiper slides={popupSwiperData["speakers"]} />
        </div>
      </Popup>
      <Popup popupId="languageSchool">
        <div className="flex flex-col gap-6">
          <Text className="font-semibold">
            Гайд для онлайн-школы сербского языка для русcкоговорящих
          </Text>
          <Text>
            Разработала дизайн гайда для школы сербского языка. Разработано
            более 20 страниц гайда. Гайд создан для рассылки в соцсетях в
            качестве лид-магнита.
          </Text>
          <div>
            <PopupSwiper slides={popupSwiperData["languageSchool"]} />
          </div>
        </div>
      </Popup>
      <Popup popupId="lips">
        <div className="flex flex-col gap-6">
          <Text className="font-semibold">
            Инфографика и буклет для онлайн-курса
          </Text>
          <Text>
            Листайте, чтобы посмотерть все работы. Для курса по перманентому
            макияжу губ были разработаны различные схемы для предоставления их
            студентам курса. Кроме схем, был разработан буклет, для разздачи
            клиентам после процедуры.
          </Text>
          <PopupSwiper slides={popupSwiperData["lips"]} />
        </div>
      </Popup>
      <Popup popupId="vk">
        {" "}
        <div className="flex flex-col gap-6">
          <Text className="font-semibold">Оформление групп ВКонтакте</Text>
          <Text preserveFormatting>
            {`
✓ Подбор шрифтовой пары и цветового сочетания, разработка фирменного
стиля, при необходимости;
✓ Дизайн обложки для группы в двух
версиях: мобильная и десктопная;
✓ Дизайн обложек для “услуг” и “меню”;
✓ Дизайн аватарки;
✓ Генерация изображений с помощью нейросетей;
✓ Установка всех материалов напрямую в группе, при необходимости.
          `}
          </Text>
          <PopupSwiper slides={popupSwiperData["vk"]} />
        </div>
      </Popup>
    </MaterialsPopupProvider>
  );
}
