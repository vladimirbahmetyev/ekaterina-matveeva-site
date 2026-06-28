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
import { FC, ReactElement, useState } from "react";
import { OrderButton } from "../ui/buttons/OrderButton";

const Material: (ProjectCardProps & { popupId: registeredPopups })[] = [
  {
    imgUrl: "/img/graphMaterials/main/presentations_1.webp",
    title: "Баннеры, креативы для рекламы, превью для видео",
    tags: ["Соцсети", "Реклама", "Маркетинг"],
    popupId: "alex",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_2.webp",
    title: "Презентация для выступления  на мероприятии",
    tags: ["Аренда костюмов", "Дизайн одежды", "Стиль жизни"],
    popupId: "wings",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_3.webp",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["Бьюти", "Офлайн-курсы", "Уход за собой"],
    popupId: "presentation_jul",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_4.webp",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["Стиль жизни", "Уход за собой", "Онлайн-курсы"],
    popupId: "presentation_massage",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_5.webp",
    title: "Презентация для рекламы мероприятия",
    tags: ["Мероприятия", "Нетворкинг", "Афиша"],
    popupId: "presentation_conference",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_6.webp",
    title: "Презентация для выступления\n" + "на конференции",
    tags: ["SMM", "Онлайн-курсы", "Маркетинг"],
    popupId: "presentation_smm",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_7.webp",
    title: "Презентация коммерческого предложения",
    tags: ["Тендеры", "Онлайн-курс", "Заработок"],
    popupId: "commercial",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_8.webp",
    title: "Карточки для объявления спикеров на конференции",
    tags: ["Мероприятия", "SMM", "Афиша"],
    popupId: "speakers",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_9.webp",
    title: "Гайд для онлайн-школы сербского языка для рускоговорящих",
    tags: ["Гайд", "Языковая школа", "Лид-магнит"],
    popupId: "languageSchool",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_10.webp",
    title: "Инфографика и буклеты для онлайн-курса",
    tags: ["Бьюти", "PDF-файлы", "Оналайн-курсы"],
    popupId: "lips",
  },
  {
    imgUrl: "/img/graphMaterials/main/presentations_11.webp",
    title: "Оформление группы ВКонтакте",
    tags: ["Соцсети", "ВКонтакте", "Бизнес"],
    popupId: "vk",
  },
] as const;

export const popupSwiperData: Record<
  registeredPopups,
  {
    desktop: `/img/graphMaterials/popup/${registeredPopups}/${string}`[];
    mobile?: `/img/graphMaterials/popup/${registeredPopups}/${string}`[];
  }
> = {
  alex: {
    desktop: [
      "/img/graphMaterials/popup/alex/desk_alex_pr_1.webp",
      "/img/graphMaterials/popup/alex/desk_alex_pr_2.webp",
      "/img/graphMaterials/popup/alex/desk_alex_pr_3.webp",
      "/img/graphMaterials/popup/alex/desk_alex_pr_4.webp",
      "/img/graphMaterials/popup/alex/desk_alex_pr_5.webp",
    ],
    mobile: [
      "/img/graphMaterials/popup/alex/mb_alex_pr_1.webp",
      "/img/graphMaterials/popup/alex/mb_alex_pr_2.webp",
      "/img/graphMaterials/popup/alex/mb_alex_pr_3.webp",
      "/img/graphMaterials/popup/alex/mb_alex_pr_4.webp",
      "/img/graphMaterials/popup/alex/mb_alex_pr_5.webp",
      "/img/graphMaterials/popup/alex/mb_alex_pr_6.webp",
    ],
  },
  commercial: {
    desktop: [
      "/img/graphMaterials/popup/commercial/1.webp",
      "/img/graphMaterials/popup/commercial/2.webp",
      "/img/graphMaterials/popup/commercial/3.webp",
    ],
  },
  languageSchool: {
    desktop: ["/img/graphMaterials/popup/languageSchool/guide_desktop.webp"],
    mobile: [
      "/img/graphMaterials/popup/languageSchool/1.webp",
      "/img/graphMaterials/popup/languageSchool/2.webp",
      "/img/graphMaterials/popup/languageSchool/3.webp",
      "/img/graphMaterials/popup/languageSchool/4.webp",
    ],
  },
  lips: {
    desktop: [
      "/img/graphMaterials/popup/lips/1.webp",
      "/img/graphMaterials/popup/lips/2.webp",
      "/img/graphMaterials/popup/lips/3.webp",
    ],
  },
  presentation_conference: {
    desktop: [
      "/img/graphMaterials/popup/presentation_conference/1.webp",
      "/img/graphMaterials/popup/presentation_conference/2.webp",
      "/img/graphMaterials/popup/presentation_conference/3.webp",
      "/img/graphMaterials/popup/presentation_conference/4.webp",
      "/img/graphMaterials/popup/presentation_conference/5.webp",
      "/img/graphMaterials/popup/presentation_conference/6.webp",
      "/img/graphMaterials/popup/presentation_conference/7.webp",
      "/img/graphMaterials/popup/presentation_conference/8.webp",
      "/img/graphMaterials/popup/presentation_conference/9.webp",
      "/img/graphMaterials/popup/presentation_conference/10.webp",
    ],
  },
  presentation_jul: {
    desktop: [
      "/img/graphMaterials/popup/presentation_jul/1.webp",
      "/img/graphMaterials/popup/presentation_jul/2.webp",
      "/img/graphMaterials/popup/presentation_jul/3.webp",
      "/img/graphMaterials/popup/presentation_jul/4.webp",
      "/img/graphMaterials/popup/presentation_jul/5.webp",
    ],
  },
  presentation_massage: {
    desktop: [
      "/img/graphMaterials/popup/presentation_massage/1.webp",
      "/img/graphMaterials/popup/presentation_massage/2.webp",
      "/img/graphMaterials/popup/presentation_massage/3.webp",
      "/img/graphMaterials/popup/presentation_massage/4.webp",
      "/img/graphMaterials/popup/presentation_massage/5.webp",
      "/img/graphMaterials/popup/presentation_massage/6.webp",
      "/img/graphMaterials/popup/presentation_massage/7.webp",
      "/img/graphMaterials/popup/presentation_massage/8.webp",
    ],
  },
  presentation_smm: {
    desktop: [
      "/img/graphMaterials/popup/presentation_smm/1.webp",
      "/img/graphMaterials/popup/presentation_smm/2.webp",
      "/img/graphMaterials/popup/presentation_smm/3.webp",
      "/img/graphMaterials/popup/presentation_smm/4.webp",
      "/img/graphMaterials/popup/presentation_smm/5.webp",
      "/img/graphMaterials/popup/presentation_smm/6.webp",
      "/img/graphMaterials/popup/presentation_smm/7.webp",
    ],
  },
  speakers: {
    desktop: ["/img/graphMaterials/popup/speakers/speakers_desktop.webp"],
    mobile: ["/img/graphMaterials/popup/speakers/speakers_mobile.webp"],
  },
  vk: {
    desktop: ["/img/graphMaterials/popup/vk/1.webp"],
    mobile: ["/img/graphMaterials/popup/vk/1_mobile.webp"],
  },
  wings: {
    desktop: [
      "/img/graphMaterials/popup/wings/1.webp",
      "/img/graphMaterials/popup/wings/2.webp",
      "/img/graphMaterials/popup/wings/3.webp",
      "/img/graphMaterials/popup/wings/4.webp",
      "/img/graphMaterials/popup/wings/5.webp",
      "/img/graphMaterials/popup/wings/6.webp",
      "/img/graphMaterials/popup/wings/7.webp",
      "/img/graphMaterials/popup/wings/8.webp",
      "/img/graphMaterials/popup/wings/9.webp",
      "/img/graphMaterials/popup/wings/10.webp",
      "/img/graphMaterials/popup/wings/11.webp",
    ],
  },
};

export const HiddableText: FC<{
  preview: ReactElement;
  main: ReactElement;
}> = ({ preview, main }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="mb-5">
      {preview}
      {!isShown ? (
        <div onClick={() => setIsShown(true)} className="cursor-pointer">
          <Text variant="text" color="yellow" className="underline! mt-5">
            Показать еще
          </Text>
        </div>
      ) : (
        <>
          {main}
          <div onClick={() => setIsShown(false)} className="cursor-pointer">
            <Text variant="text" color="yellow" className="underline! mt-5">
              Свернуть
            </Text>
          </div>
        </>
      )}
    </div>
  );
};

export const PopupSwiper: FC<{ slides: string[]; classNames?: string }> = ({
  slides,
  classNames,
}) => {
  return (
    <div className={classNames}>
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide}>
            <Image
              src={slide}
              alt={""}
              width={1134}
              height={469}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function GraphMaterials() {
  return (
    <MaterialsPopupProvider>
      <div className="flex flex-col px-2.5 py-10 md:px-30">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="flex flex-col gap-6">
            <NavigationButton text="На главную" back />
            <Text variant="h3" color="heading">
              Создание графических материалов для вашего проекта{" "}
            </Text>
            <Text variant="text" color="beige">
              Здесь собраны последние кейсы с разработкой презентаций, гайдов,
              оформление соцсетей, PDF-материалов для рассылки, обложки, банеры,
              креативы и т.п.
            </Text>
          </div>
          <div className="md:justify-self-end">
            <OrderButton />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-15">
          {Material.map((project) => (
            <ProjectCard
              {...project}
              key={project.title + project.imgUrl}
              popupId={project.popupId}
            />
          ))}
        </div>
      </div>
      <Popup popupId="alex" classNames="aspect-1200/500!">
        <Text className="mb-5" variant="h4" color="heading">
          Баннеры, креативы для рекламы, превью для видео
        </Text>
        <Text className="mb-5" variant="text" color="heading">
          Ко мне можно обратиться за разработкой различных баннеров для
          соцсетей, креативов для рекламы, созданием превью для видео.
        </Text>
        <Button
          className="mb-5 inline-flex"
          text={"Узнать про кейс подробнее"}
          link="/projects/businessMentoring"
        />
        <PopupSwiper
          slides={popupSwiperData["alex"].desktop}
          classNames="hidden md:block"
        />
        <PopupSwiper
          slides={popupSwiperData["alex"].mobile || []}
          classNames="md:hidden"
        />
      </Popup>
      <Popup popupId="wings">
        <div className="flex flex-col gap-6">
          <Text variant="h3" color={"heading"}>
            Презентация авторских дизайнерских костюмов с историей
          </Text>
          <HiddableText
            preview={
              <Text
                variant="text"
                color="beige"
                preserveFormatting
              >{`Листайте галерею, чтобы рассмотреть слайды презентации.
Презентация была выполнена для выступления на конференции для дизайнера креативных образов.`}</Text>
            }
            main={
              <Text variant="text" color="beige" preserveFormatting>
                {`
Цель выступления: прорекламировать услуги арендыдизайнерских
крыльев для проведения фотосессий, праздников и других
мероприятий.

Для комфортного выступления спикера, мной
былаподготовлена не только визуальная часть презентации, но и
написантекст для выступления.`}
              </Text>
            }
          />
          <div className="w-full">
            <PopupSwiper slides={popupSwiperData["wings"].desktop} />
          </div>
        </div>
      </Popup>
      <Popup popupId="presentation_jul">
        <div>
          <Text variant="h3" color="heading" className="mb-6">
            Продающая презентация косметолога через личный бренд
          </Text>
          <HiddableText
            preview={
              <Text color="heading" variant="text" preserveFormatting>
                {`Презентация для выступления на конференции для косметолога и тренера
перманентного макияжа. 
`}
              </Text>
            }
            main={
              <Text color="heading" variant="text" preserveFormatting>
                {`Основная цель — заинтересовать и пригласить участников конференции на офлайн-курс по освоению новой профессии.
Дополнительная цель — увеличить запись на услуги заказчика в салоне.
В итоге, обе цели были достигнуты. 

Что было сделано:
1. Сбор информации, необходимой для презентации, из соцсетей заказчика;
2. Составление сторитейлинга для презентации;
3. Доработка материалов для презентации (скриншоты с chatGPT);
4. Обработка видео для добавления в презентацию;
5. Оформление 22 слайдов. 

Текст презентации был составлен мной с нуля после созвона с заказчиком.`}
              </Text>
            }
          />
          <PopupSwiper
            slides={popupSwiperData["presentation_jul"].desktop}
            classNames="md:w-6/10 mx-auto"
          />
        </div>
      </Popup>
      <Popup popupId="presentation_massage">
        <Text variant="h3" color="heading" className="mb-6">
          Экспертная презентация онлайн-курса по массажу
        </Text>
        <HiddableText
          preview={
            <Text color="heading" variant="text" preserveFormatting>
              {`Листайте галерею, чтобы рассмотреть слайды презентации.`}
            </Text>
          }
          main={
            <Text color="heading" variant="text" preserveFormatting>
              {`Презентация
была выполнена для выступления на конференции для массажиста и
организатора женского клуба. 
Цель выступления: продажа мест на онлайн-курсе по самомассажу. 

Что было сделано:
1. Сбор информации, необходимой для презентации, из соцсетей заказчика;
2. Составление сторитейлинга для презентации;
3. Выбор и согласование стиля и цвета
изходя из имеющихся фото заказчика;
4. Работа с нейросетями для улучшения фото;`}
            </Text>
          }
        />
        <PopupSwiper slides={popupSwiperData["presentation_massage"].desktop} />
      </Popup>
      <Popup popupId="commercial">
        <div>
          <Text className="mb-6" variant="h3" color="heading">
            Коммерческое предложение образовательного продукта
          </Text>
          <HiddableText
            preview={
              <Text color="heading" variant="text" preserveFormatting>
                {`Листайте галерею, чтобы рассмотреть слайды презентации.`}
              </Text>
            }
            main={
              <Text color="heading" variant="text" preserveFormatting>
                {`Презентация была выполнена для выступления. 
Цель: продажа мест на онлайн-курсе по тендерам. 

Что было сделано:
1. Систематизация и доработка исходного текста;
2. Обработка фото, увеличение качества;
3. Добавление графических элементов;`}
              </Text>
            }
          />
          <PopupSwiper slides={popupSwiperData["commercial"].desktop} />
        </div>
      </Popup>
      <Popup popupId="presentation_conference">
        <div>
          <Text variant="h3" color="heading" className="mb-6">
            Презентация для привлечения аудитории на мероприятие
          </Text>
          <HiddableText
            preview={
              <Text color="heading" variant="text" preserveFormatting>
                {`Листайте галерею, чтобы рассмотреть слайды презентации.`}
              </Text>
            }
            main={
              <Text color="heading" variant="text" preserveFormatting>
                {`Презентация была выполнена для выступления на конференции для организатора мероприятий. 

Цель: заинтересовать и прорекламировать участникам планируемое мероприятие в другом городе.

Для комфортного выступления спикера, мной была подготовлена не только визуальная часть презентации, но и написан текст для выступления.`}
              </Text>
            }
          />
          <PopupSwiper
            slides={popupSwiperData["presentation_conference"].desktop}
          />
        </div>
      </Popup>
      <Popup popupId="presentation_smm">
        <Text variant="h3" className="mb-6 " color="heading">
          Экспертная презентация по продвижению в соцсетях
        </Text>
        <HiddableText
          preview={
            <Text color="heading" variant="text" preserveFormatting>
              {`Листайте галерею, чтобы рассмотреть слайды презентации.`}
            </Text>
          }
          main={
            <Text color="heading" variant="text" preserveFormatting>
              {`Презентация была выполнена для выступления на конференции для маркетолога.
Выступление было направлено на продажу курса по продвижению в ВК. 
Кроме продаж, важно было раскрыть полезную информацию о трендах маркетинга.
Презентация создана на основе текста, написанного заказчиком. 

Что было сделано:
1. Систематизация и доработка исходного текста;
2. Обработка фото, увеличение качества;
3. Добавление графических элементов;`}
            </Text>
          }
        />
        <PopupSwiper slides={popupSwiperData["presentation_smm"].desktop} />
      </Popup>
      <Popup popupId="speakers">
        <div>
          <Text variant="h3" color="heading" className="mb-6">
            Карточки для объявления спикеров на конференции
          </Text>
          <HiddableText
            preview={
              <Text color="heading" variant="text" preserveFormatting>
                {`Я разработала универсальный шаблон карточек для спикеров на
конференции. Карточки использовались для рекламы спикеров в соцсетях как организаторами конференции, так и самими спикерами в своих соцсетях.`}
              </Text>
            }
            main={
              <Text color="heading" variant="text" preserveFormatting>
                {`
Концепцию я построила вокруг идеи нетворкинга и знакомства участников: карточки выполнены в стиле досье — визуально напоминают папку с документами, где указаны фото, тема выступления и регалии спикера. Такой подход символизирует «личное знакомство» с каждым участником, подчеркивает открытость и атмосферу обмена опытом, а также визуально выделяет контент конференции в соцсетях.`}
              </Text>
            }
          />
          <PopupSwiper
            classNames="hidden md:block"
            slides={popupSwiperData["speakers"].desktop}
          />
          <PopupSwiper
            classNames="md:hidden"
            slides={popupSwiperData["speakers"].mobile}
          />
        </div>
      </Popup>
      <Popup popupId="languageSchool">
        <div className="flex flex-col gap-6">
          <Text variant="h3" color="heading" className="mb-6">
            Гайд для онлайн-школы сербского языка для русcкоговорящих
          </Text>
          <Text color="heading" variant="text" preserveFormatting>
            {`Разработала дизайн гайда для школы сербского языка. Разработано более 20 страниц гайда.
Гайд создан для рассылки в соцсетях в качестве лид-магнита.`}
          </Text>
          <div>
            <PopupSwiper
              classNames="md:block hidden"
              slides={popupSwiperData["languageSchool"].desktop}
            />
            <PopupSwiper
              classNames="md:hidden"
              slides={popupSwiperData["languageSchool"].mobile}
            />
          </div>
        </div>
      </Popup>
      <Popup popupId="lips">
        <div className="flex flex-col gap-6">
          <Text variant="h3" color="heading" className="mb-6">
            Инфографика и буклет для онлайн-курса
          </Text>
          <HiddableText
            preview={
              <Text color="heading" variant="text" preserveFormatting>
                {`Листайте, чтобы посмотерть все работы.`}
              </Text>
            }
            main={
              <Text color="heading" variant="text" preserveFormatting>
                {`Для курса по перманентому макияжу губ были разработаны различные схемы для предоставления их студентам курса. Кроме схем, был разработан буклет, для разздачи клиентам после процедуры.`}
              </Text>
            }
          />
          <PopupSwiper
            slides={popupSwiperData["lips"].desktop}
            classNames="w-2/3 mx-auto"
          />
        </div>
      </Popup>
      <Popup popupId="vk">
        <div className="flex flex-col gap-6">
          <Text variant="h3" color="heading">
            Оформление групп ВКонтакте
          </Text>
          <Text color="heading" variant="text" preserveFormatting>
            {`✓ Подбор шрифтовой пары и цветового сочетания, разработка фирменного стиля, при необходимости;
✓ Дизайн обложки для группы в двух версиях: мобильная и десктопная;
✓ Дизайн обложек для “услуг” и “меню”;
✓ Дизайн аватарки;
✓ Генерация изображений с помощью нейросетей;
✓ Установка всех материалов напрямую в группе, при необходимости.`}
          </Text>
          <PopupSwiper
            classNames="md:block hidden"
            slides={popupSwiperData["vk"].desktop}
          />
          <PopupSwiper
            classNames="md:hidden"
            slides={popupSwiperData["vk"].mobile || []}
          />
        </div>
      </Popup>
    </MaterialsPopupProvider>
  );
}
