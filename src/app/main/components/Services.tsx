import { FC } from "react";
import { Text } from "@/app/ui/typography/Text";
import { Heading } from "@/app/ui/typography/Heading";

interface ServiceProps {
  title?: string;
  description?: string;
  price?: number | "depends";
  bordered?: boolean;
}

const servicesData: ServiceProps[] = [
  {
    title: "Одностраничный сайт (лендинг)",
    description:
      "Сайт, который ведет пользователя к целевому действию: заявке, подписке или покупке. Подходит для продажи курса, презентации услуги, продукта, мероприятия или сбора контактов.",
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
    price: 30,
  },
];

const Service: FC<ServiceProps> = ({ title, bordered, price, description }) => {
  return (
    <div
      className={`flex gap-3 flex-col pb-4 ${bordered ? "border-b-1 border-[#E6E6E6]" : ""}`}
    >
      <div className="flex justify-between w-full">
        <Text className="font-semibold">{title}</Text>
        {price === "depends" ? (
          <Text className="font-semibold">зависит от запроса</Text>
        ) : (
          <Text className="font-semibold">от {price} тыс.рублей</Text>
        )}
      </div>
      <Text className="text-[#B6B2A8] font-semibold">{description}</Text>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="flex flex-col gap-6 px-2.5 mb-12">
      <div className="flex flex-col items-center gap-2 mb-8">
        <Heading>Услуги и стоимость</Heading>
        <Text className="text-center font-semibold text-[#B6B2A8]">
          Каждый проект уникален и имеет свои задачи. Поэтому точную сумму я
          смогу назввать только после знакомства с вашим проектом.
        </Text>
      </div>

      {servicesData.map((service, index) => (
        <Service
          {...service}
          key={service.title}
          bordered={index !== servicesData.length - 1}
        />
      ))}
    </div>
  );
};
