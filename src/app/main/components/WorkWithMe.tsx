import { FC } from "react";
import { Card } from "@/app/ui/card/Card";
import { Text } from "@/app/ui/typography/Text";
import Image from "next/image";
import { Heading } from "@/app/ui/typography/Heading";

export const WorkWithMe: FC = () => (
  <div className="flex flex-col px-2.5 gap-1 items-center mt-5">
    <Heading className="text-5xl">Работа со мной</Heading>
    <Text className="text-center font-semibold text-[#B6B2A8] mb-3">
      Это качественный результат <br />с комфортом для всех
    </Text>
    <div className={"grid grid-cols-2 grid-rows-4 gap-2 grid-flow-row"}>
      <Card variant="filled" className={"col-span-2"}>
        <div className="flex  justify-between mb-1.5">
          <Text className="font-semibold text-[#777163]">
            Применяю UX-исследования
          </Text>
          <Image
            src={"/img/main/work/res.png"}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <Text>
          Основываюсь на данных и поведении пользователей, чтобы сделать
          интерфейс интуитивным и удобным (JTBD, персоны, интервью, опросы,
          анализ конкурентов и аудитории)
        </Text>
      </Card>
      <Card variant="white" className="">
        <div className="flex flex-col justify-between h-full">
          <Text className="font-semibold text-[#777163]">
            Глубоко погружаюсь в проект
          </Text>
          <Text>
            Изучаю бизнес, аудиторию и цели, чтобы дизайн точно решал нужные
            задачи
          </Text>
        </div>
      </Card>
      <Card variant="orange" className="">
        <div className="flex flex-col justify-between h-full">
          <Text className="font-semibold text-[#777163]">
            Понимаю психологию пользователя
            <Image
              src={"/svg/group.svg"}
              alt=""
              width={24}
              height={24}
              className="mt-12"
            />
          </Text>
          <Text>
            Психологическое образование помогает мне проектировать интерфейсы,
            вызывающие доверие и эмоции у пользователей
          </Text>
        </div>
      </Card>
      <Card variant="filled" className={"col-span-2"}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex  justify-between mb-1.5">
            <Text className="font-semibold text-[#777163]">
              Комплексно подхожу к дизайну продукта
            </Text>
            <Image
              src={"/img/main/work/com.png"}
              width={250}
              height={200}
              alt=""
            />
          </div>

          <Text>
            Разрабатываю не только сайты, но и презентации, оформляю соцсети,
            готовлю PDF-файлы — всё в едином стиле
          </Text>
        </div>
      </Card>
      <Card variant="white" className="">
        <div className="flex flex-col justify-between h-full">
          <Text className="font-semibold text-[#777163]">
            Ответственно подхожу к своей работе
          </Text>
          <Text>
            Соблюдаю дедлайны, остаюсь на связи, держу в курсе этапов работы
          </Text>
        </div>
      </Card>
      <Card variant="filled" className="">
        <div className="flex flex-col justify-between h-full relative">
          <Text className="font-semibold text-[#777163]">
            Работаю легально и по договору
          </Text>
          <Text>
            Я зарегистрирована как самозанятая, выдаю чеки и работаю
            по договору, который защищает обе стороны
          </Text>{" "}
          <Image
            src={"/img/main/work/stamp.png"}
            width={100}
            height={100}
            alt=""
            className="right-[-12px] absolute top-8"
          />
        </div>
      </Card>
    </div>
  </div>
);
