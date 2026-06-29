"use client";

import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";

import { Info } from "@/app/projects/components/Info";
import BackgroundVideo from "next-video/background-video";

export default function Cosmetics() {
  return (
    <div className="px-2.5 lg:px-30 flex flex-col gap-10">
      <div className="rounded-2xl overflow-hidden">
        <BackgroundVideo
          src={
            "https://whgtds5inw9f5bmn.public.blob.vercel-storage.com/video/sk-II.mp4"
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <Text color="heading" variant="h3">
          Вводные данные
        </Text>
        <Text color="beige" variant="text" className="lg:max-w-2/3">
          Компания, занимающаяся поставками и продажей японской косметики в
          России, обратилась ко мне с задачей создать современный
          интернет-магазин, который объединит функции продажи, информирования и
          вовлечения клиентов. Основной целью было сделать сайт удобным для
          покупателя и эффективным инструментом для бизнеса.
        </Text>
      </div>
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-5">
        <Image
          src="/img/projects/cosmetics/sk_dk_1.webp"
          alt=""
          width={590}
          height={590}
        />
        <Image
          src="/img/projects/cosmetics/sk_dk_2.webp"
          alt=""
          width={590}
          height={590}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Text color="heading" variant="h3" className="lg:maw-w-4/5">
          Сайт был полностью разработан мной на платформе Tilda. Визуальное
          оформление я построилана сочетании минимализма и акцента на продукции,
          чтобы подчеркнуть премиальность бренда.
        </Text>
        <Text color="beige" variant="text" className="lg:max-w-2/3">
          Я реализовала сайт интернет-магазина с возможностью покупки и
          оформления доставки. Внедрила систему сбора контактов потенциальных
          клиентов, наполнила каталог товаров с фильтрацией, сортировкой и
          поиском, подключила рассылки по email, разработала раздел со статьями
          и информацией о бренде, оптимизировала сайт под SEO и настроила
          технические параметры.
        </Text>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Image
          src="/img/projects/cosmetics/sk_dk_3.webp"
          width={1200}
          height={588}
          alt=""
          className="w-full"
        />
        <Image
          src="/img/projects/cosmetics/sk_dk_4.webp"
          width={1200}
          height={588}
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Text color="heading" variant="h3" className="lg:max-w-3/4">
          Для вовлечения пользователей я внедрила интерактивный квиз. Это
          позволило компании эффективно собирать лиды и расширять базу клиентов.
        </Text>
        <Text color="beige" variant="text" className="lg:max-w-2/3">
          Посетитель отвечает на несколько вопросов о типе своей кожи, выделяет
          проблемы с которыми он сталкиевается в ходе за ней и получает гайд по
          уходу в обмен на контактные данные.
        </Text>
      </div>
      <Image
        src="/img/projects/cosmetics/sk_dk_5.webp"
        alt=""
        width={590}
        height={590}
        className="w-full"
      />
      <div className="flex flex-col gap-4">
        <Text color="heading" variant="h3">
          В результате проекта клиент получил не просто интернет-магазин, а
          полноценную платформу, объединяющую продажи, маркетинг и контент.
        </Text>
        <Text color="beige" variant="text" className="lg:max-w-3/4">
          Благодаря продуманной структуре и интуитивному интерфейсу пользователи
          быстро находят нужные товары и совершают покупку в несколько кликов.
          Квиз с гайд-подарком помогает регулярно пополнять базу подписчиков и
          повышает вовлеченность аудитории. А встроенная система рассылок и блог
          с новостями бренда создают устойчивую коммуникацию с клиентами.
        </Text>
      </div>
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-5">
        <Image
          src="/img/projects/cosmetics/sk_dk_6.webp"
          alt=""
          width={590}
          height={590}
        />
        <Image
          src="/img/projects/cosmetics/sk_dk_7.webp"
          alt=""
          width={590}
          height={590}
        />
        <Image
          src="/img/projects/cosmetics/sk_dk_8.webp"
          alt=""
          width={590}
          height={590}
          className="lg: col-span-2 w-full"
        />
        <Image
          src="/img/projects/cosmetics/sk_dk_9.webp"
          alt=""
          width={590}
          height={590}
        />
        <Image
          src="/img/projects/cosmetics/sk_dk_10.webp"
          alt=""
          width={590}
          height={590}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Info
          title={
            "  С технической стороны проект оптимизирован под SEO и адаптирован для\n" +
            "          самостоятельного ведения: заказчик может без помощи разработчика\n" +
            "          обновлять каталог, публиковать статьи и управлять контентом."
          }
          description={
            "          Моя работа охватывала весь цикл — от аналитики и дизайна до настройки\n" +
            "          продаж. Это позволило создать цельный, функциональный и визуально\n" +
            "          гармоничный продукт, который помогает бренду японской косметики\n" +
            "          укреплять присутствие на рынке и выстраивать долгосрочные отношения с\n" +
            "          клиентами."
          }
        />
      </div>
    </div>
  );
}
