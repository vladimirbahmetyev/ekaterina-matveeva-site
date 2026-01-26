"use client";

import { Text } from "@/app/ui/typography/Text";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { OrderButton } from "@/app/ui/buttons/OrderButton";
import { ProjectCard, ProjectCardProps } from "@/app/ui/card/ProjectCard";
import Image from "next/image";

import {
  MaterialsPopupProvider,
  registeredPopups,
} from "@/app/graphMaterials/MaterialsPopupProvider";
import { Popup } from "@/app/graphMaterials/Popup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

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
          <OrderButton />
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
        <Image
          src="/img/graphMaterials/popup/alex.png"
          alt=""
          width={400}
          height={400}
          className="w-full"
        />
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
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              className="mt-5"
              modules={[Navigation]}
            >
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/1.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/2.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/3.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/4.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/5.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/6.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/7.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/8.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/9.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/10.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/wings/11.png"
                  width={1100}
                  height={630}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Popup>
      <Popup popupId="presentation_jul">Test popup</Popup>
      <Popup popupId="presentation_massage">Test popup</Popup>
      <Popup popupId="commercial">Test popup</Popup>
      <Popup popupId="conference">Test popup</Popup>
      <Popup popupId="presentation_smm">Test popup</Popup>
      <Popup popupId="speakers">Test popup</Popup>
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
          <OrderButton />
          <div>
            <Swiper>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/languageSchool/1.png"
                  alt=""
                  width={1100}
                  height={630}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/languageSchool/2.png"
                  alt=""
                  width={1100}
                  height={630}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/languageSchool/3.png"
                  alt=""
                  width={1100}
                  height={630}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/languageSchool/4.png"
                  alt=""
                  width={1100}
                  height={630}
                />
              </SwiperSlide>
            </Swiper>
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
          <OrderButton />
          <div>
            <Swiper>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/lips/1.png"
                  alt=""
                  width={1100}
                  height={630}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/lips/2.png"
                  alt=""
                  width={1100}
                  height={630}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/graphMaterials/popup/lips/3.png"
                  alt=""
                  width={1100}
                  height={630}
                />
              </SwiperSlide>
            </Swiper>
          </div>
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
          <OrderButton />
          <div>
            <Image
              src="/img/graphMaterials/popup/vk/1.png"
              alt=""
              width={1100}
              height={630}
            />
          </div>
        </div>
      </Popup>
    </MaterialsPopupProvider>
  );
}
