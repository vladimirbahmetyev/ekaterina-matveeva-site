"use client";

import { useContext } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";

import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";
import {
  MaterialsPopupProvider,
  PopupContext,
  registeredPopups,
} from "@/app/graphMaterials/MaterialsPopupProvider";
import { Popup } from "@/app/graphMaterials/Popup";
import { HiddableText, PopupSwiper } from "@/app/graphMaterials/page";
import "swiper/css";
import "swiper/css/pagination";

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

function WomenConference() {
  const { openPopup } = useContext(PopupContext);
  return (
    <div className="px-2.5 flex flex-col gap-10 md:px-30">
      <Image
        src="/img/projects/womenConference/portfolio_video2_conference.webp"
        width={1200}
        height={588}
        alt=""
        className="w-full"
      />
      <div className="flex flex-col gap-4">
        <ExternalLinkButton
          link="https://jul-n.ru/event"
          className="md:hidden"
        />
        <Text variant="h3" color="heading">
          Вводные данные
        </Text>
        <Text variant="text" color="dark-beige">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Image
          src="/img/projects/womenConference/conference_dk_1.webp"
          alt=""
          width={590}
          height={590}
        />
        <Image
          src="/img/projects/womenConference/conference_dk_2.webp"
          alt=""
          width={590}
          height={590}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Text variant="h3" color="heading">
          Основная цель сайта заключалась в том, чтобы эффективно собирать
          заявки на участие, предоставить всю ключевую информацию о событии и
          сделать это в современном и технологически продуманном формате.
        </Text>
        <Text variant="text" color="dark-beige">
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
        src="/img/projects/womenConference/conference_dk_3.webp"
        width={1200}
        height={588}
        alt=""
        className="w-full"
      />
      <div className="flex flex-col gap-4">
        <Text variant="h3" color="heading">
          Особое внимание было уделено разделу со спикерами.Поскольку список
          участников постоянно расширялся, я разработала адаптивное решение
        </Text>
        <Text variant="text" color="dark-beige">
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
        src="/img/projects/womenConference/conference_dk_4.webp"
        width={1200}
        height={588}
        alt=""
        className="w-full"
      />
      <div className="flex flex-col gap-4">
        <Text variant="h3" color="heading">
          Для регистрации я разработала четыре сценария подачи заявки —с учетом
          участия в финальном фуршете и опции амбассадорства.
        </Text>
        <Text variant="text" color="dark-beige">
          Все заявки автоматически отправлялись в Google Sheets и Telegram, что
          обеспечивало мгновенное уведомление команды и оперативную обратную
          связь с участницами.
        </Text>
      </div>

      <Image
        src="/img/projects/womenConference/conference_dk_5.webp"
        alt=""
        width={590}
        height={590}
        className="w-full"
      />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3">
          <Text variant="h3" color="heading" className="col-span-2">
            Кроме сайта я подготовила презентацию для выступления и карточки для
            спикеров
          </Text>
          <div
            className="hidden md:block cursor-pointer bg-[#F9F5EC] px-8 py-4 border-1 border-[#B6B2A8] rounded-full w-fit justify-self-end"
            onClick={() => openPopup("presentation_conference")}
          >
            <Text color="beige" variant="text">
              Узнать подробнее
            </Text>
          </div>
        </div>
        <Text variant="text" color="dark-beige">
          Презентация помогала в продвижении конференции,сопровождая выступление
          на других мероприятиях. Карточки спикеров нужны для публикации в
          соцсетях конференции и для объявления спикеров.А также, карточки могли
          использовать сами спикеры в своих соцсетях, для саморекламы.
        </Text>
      </div>
      <Image
        src="/img/projects/womenConference/conference_dk_6.webp"
        alt=""
        width={590}
        height={590}
        className="w-full"
      />
      <div
        className="flex justify-center md:hidden cursor-pointer bg-[#F9F5EC] px-8 py-4 border-1 border-[#B6B2A8] rounded-full w-full justify-self-end"
        onClick={() => openPopup("presentation_conference")}
      >
        <Text color="beige" variant="text">
          Узнать подробнее
        </Text>
      </div>
      <div className="flex flex-col gap-4">
        <Text variant="h3" color="heading">
          Визуальная подача и структура сайта усилили восприятие бренда
          конференции как профессионального и масштабного события.
        </Text>
        <Text variant="text" color="dark-beige">
          Благодаря продуманной архитектуре, адаптивному дизайну и удобному
          пользовательскому пути конверсия регистрации с мобильных устройств
          оказалась особенно высокой — это подтвердило, что акцент на мобильный
          UX был стратегически верным.
        </Text>
      </div>

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
    </div>
  );
}

export default function WomenConferenceWrap() {
  return (
    <MaterialsPopupProvider>
      <WomenConference />
    </MaterialsPopupProvider>
  );
}
