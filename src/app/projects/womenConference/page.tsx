"use client";

import { FC } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";

import { useRouter } from "next/navigation";
import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";

export default function WomenConference(): FC {
  const router = useRouter();
  return (
    <div className="px-2.5 flex flex-col gap-10">
      <Image
        src="/img/projects/aboutLips/portfolio_video2_conference.png"
        width={1200}
        height={588}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <ExternalLinkButton link={"test.com"} className="justify-center mb-8" />
        <Text color="primary" className="font-semibold text-[16px]">
          Вводные данные
        </Text>
        <Text color="secondary" className="text-[12px]">
          Необходимо было создать сайт для сбора заявок на мероприятие. Кроме
          разработки сайта, я взяла на себя задачу формирования визуальной
          концепции мероприятия. На момент старта работы у заказчика не было
          идей о стиле конференции, поэтому я подготовила несколько вариантов
          цветовой гаммы. Основным был выбран оранжевый — он отражает энергию и
          яркость события, а также органично вписывается в осенний сезон
          проведения конференции. Такое решение позволило объединить сайт и
          мероприятие в единой стилистике и выделить конференцию среди
          конкурентов.
        </Text>
      </div>
      <Image
        src="/img/projects/aboutLips/portfolio_mockup_conference.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/aboutLips/portfolio_mockup_screen_1_conference.png"
        alt=""
        width={590}
        height={590}
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          Основная цель сайта заключалась в том, чтобы эффективно собирать
          заявки на участие, предоставить всю ключевую информацию о событии и
          сделать это в современном и технологически продуманном формате.
        </Text>
        <Text color="secondary" className="text-[12px]">
          Я полностью разработала дизайн и верстку на платформе Tilda, создав
          структуру, которая сочетает информационную насыщенность и легкость
          восприятия. На сайте были реализованы следующие блоки: секция с
          видео-приглашением, описание конференции, отзывы и фото с прошлых
          мероприятий, блок о хедлайнере, раздел со спикерами, тарифы участия,
          информация об организаторе, интерактивная карта с адресом и блок со
          спонсорами.
        </Text>
      </div>
      <Image
        src="/img/projects/aboutLips/portfolio_mockup_screen_2_conference.png"
        width={1200}
        height={588}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          Особое внимание было уделено разделу со спикерами. Поскольку список
          участников постоянно расширялся, я разработала адаптивное решение
        </Text>
        <Text color="secondary" className="text-[12px]">
          На мобильной версии реализовала горизонтальный скролл карточек, чтобы
          экономить пространство и при этом сохранить наглядность. На десктопной
          версии сделала фиксированный баннер с кнопками слева и динамический
          скроллинг карточек справа. При увеличении числа спикеров добавила
          кнопку «Смотреть всех спикеров», открывающую отдельную страницу с
          полным списком. Такое решение позволило удержать внимание
          пользователей и избежать перегрузки страницы большим количеством
          карточек.
        </Text>
      </div>
      <Image
        src="/img/projects/aboutLips/portfolio_mockup_screen_3_conference.png"
        width={1200}
        height={588}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          Для регистрации я разработала четыре сценария подачи заявки — с учетом
          участия в финальном фуршете и опции амбассадорства.
        </Text>
        <Text color="secondary" className="text-[12px]">
          Все заявки автоматически отправлялись в Google Sheets и Telegram, что
          обеспечивало мгновенное уведомление команды и оперативную обратную
          связь с участницами.
        </Text>
      </div>

      <Image
        src="/img/projects/aboutLips/portfolio_mockup_screen_4_conference.png"
        alt=""
        width={590}
        height={590}
      />

      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          Кроме сайта я подготовила презентацию для выступления  и карточки для
          спикеров
        </Text>
        <Text color="secondary" className="text-[12px]">
          Презентация помогала в продвижении конференции, сопровождая
          выступление на других мероприятиях. Карточки спикеров нужны для
          публикации в соцсетях конференции и для объявления спикеров. А также,
          карточки могли использовать сами спикеры в своих соцсетях, для
          саморекламы.
        </Text>
      </div>
      <Image
        src="/img/projects/aboutLips/portfolio_mockup_screen_5_conference.png"
        alt=""
        width={590}
        height={590}
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          Визуальная подача и структура сайта усилили восприятие бренда
          конференции как профессионального и масштабного события.
        </Text>
        <Text color="secondary" className="text-[12px]">
          Благодаря продуманной архитектуре, адаптивному дизайну и удобному
          пользовательскому пути конверсия регистрации с мобильных устройств
          оказалась особенно высокой — это подтвердило, что акцент на мобильный
          UX был стратегически верным.
        </Text>
      </div>
      <div className="flex justify-between w-full items-center">
        <NavigationButton text="На главную" onClick={() => router.push("/")} />
        <ExternalLinkButton link={"test.com"} />
      </div>
    </div>
  );
}
