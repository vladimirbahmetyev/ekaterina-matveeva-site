"use client";

import { FC, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Text } from "@/app/ui/typography/Text";
import { Heading } from "@/app/ui/typography/Heading";
import Image from "next/image";

interface ServiceProps {
  title?: string;
  description?: string;
  price?: number | "depends";
  bordered?: boolean;
}

const servicesData: ServiceProps[] = [
  {
    title: "Лендинг",
    description:
      "Одностраничный сайт, который ведет пользователя к целевому действию: заявке, подписке или покупке. Подходит для продажи курса, презентации услуги, продукта, мероприятия или сбора контактов.",
    price: 30,
  },
  {
    title: "Многостраничный сайт",
    description:
      "Сайт, состоящий из нескольких страниц и имеющий более сложную структуру, чем лендинг. Идеален для бизнесов, которые продают нескольких товаров или услуг.",
    price: 60,
  },
  {
    title: "Интернет-магазин",
    description:
      "Сайт для продажи товаров. Включает в себя каталог товаров, корзину, платежную систему и сервисы доставки.",
    price: 100,
  },
  {
    title: "Только дизайн-макет",
    description:
      "Разработка дизайна всех страниц и адаптивных версий к ним в Figma без посадки на Tilda. Работа в паре с программистом. Формат подходит для масштабных сайтов, платформ, приложений, требующихболее сложной разработки.",
    price: 30,
  },
  {
    title: "Дизайн презентаций\n" + "и др.материалов",
    description:
      "Кроме сайта, я могу подготовить для вас презентации, баннеры, оформить соцсети и множество других дизайн-услуг.",
    price: "depends",
  },
];

const Service: FC<ServiceProps> = ({ title, bordered, price, description }) => {
  return (
    <div
      className={`flex gap-5 flex-col pb-4 ${bordered ? "border-b-1 border-[#E6E6E6]" : ""}`}
    >
      <div className="flex justify-between w-full">
        <Text variant="h3" color="dark-beige">
          {title}
        </Text>
        {price === "depends" ? (
          <Text variant="h3" color="dark-beige" className="font-semibold">
            зависит от запроса
          </Text>
        ) : (
          <Text variant="h3" color="dark-beige" className="font-semibold">
            от {price} тыс.рублей
          </Text>
        )}
      </div>
      <Text variant="text" color="beige" className="lg:max-w-1/2">
        {description}
      </Text>
    </div>
  );
};

export const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const timerToClose = useRef(null);
  const popupRootRef = useRef(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const onPopupLeave = () => {
    timerToClose.current = setTimeout(() => setIsPopupOpen(false), 200);
  };

  const onPopupEnter = () => {
    clearTimeout(timerToClose.current);
    setIsPopupOpen(true);
  };

  const onInfoClick = (evt) => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    function handleDocumentClick(evt) {
      if (!popupRootRef.current?.contains(evt.target)) {
        setIsPopupOpen(false);
      }
    }
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <div
      id="price"
      className="flex flex-col gap-6 px-2.5 lg:px-30 mb-12 mt-10 lg:w-full"
    >
      <div className="flex flex-col items-center gap-2 mb-8 lg:mb-14">
        <div className="flex gap-5 items-center">
          <Heading>Услуги и стоимость</Heading>
          <div
            className="relative"
            onMouseEnter={onPopupEnter}
            onMouseLeave={onPopupLeave}
            onClick={onInfoClick}
            ref={popupRootRef}
          >
            <Image src="/svg/info.svg" alt="info" width={37} height={37} />
            <CSSTransition
              in={isPopupOpen}
              timeout={300}
              classNames="popup"
              mountOnEnter
              unmountOnExit
              nodeRef={nodeRef}
            >
              <div
                className="min-w-70 aspect-277/330 lg:min-w-100 absolute top-[100%] right-[100%] lg:aspect-392/328 border-1 border-[#B6B2A8] p-3 rounded-2xl z-10 bg-white rounded-tr-[0px]!"
                ref={nodeRef}
              >
                <Text color="heading" variant="body-text">
                  Каждый проект уникален и имеет свои задачи. Поэтому точную
                  сумму я смогу назвать только после знакомства с вашим
                  проектом.
                </Text>
                <br />
                <Text color="heading" variant="body-text">
                  В цену не входит: <br />
                  1. Подписка на конструктор Тильда (от 750р. в месяц).
                  <br />
                  2. Покупка домена (стоимость устанавливают регистраторы
                  доменных имён).
                  <br />
                  3. Платные сервисы, которые вы захотите подключить.
                  <br />
                  4. Лицензии на платные шрифты, фото и видео (по желанию).
                  <br />
                  5. Разработка логотипа (я могу поделиться контактом
                  проверенного графического дизайнера).
                </Text>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-15 px-4">
        {servicesData.map((service, index) => (
          <Service
            {...service}
            key={service.title}
            bordered={index !== servicesData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
