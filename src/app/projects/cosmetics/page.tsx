"use client";

import { FC } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";

import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";

export default function Cosmetics(): FC {
  return (
    <div className="px-2.5 flex flex-col gap-10">
      <Image
        src="/img/projects/cosmetics/portfolio_video1.png"
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
          Компания, занимающаяся поставками и продажей японской косметики в
          России, обратилась ко мне с задачей создать современный
          интернет-магазин, который объединит функции продажи, информирования и
          вовлечения клиентов. Основной целью было сделать сайт удобным для
          покупателя и эффективным инструментом для бизнеса.
        </Text>
      </div>
      <Image
        src="/img/projects/cosmetics/portfolio_mockup1.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/cosmetics/portfolio_screen2.png"
        alt=""
        width={590}
        height={590}
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          Сайт был полностью разработан мной на платформе Tilda. Визуальное
          оформление я построила на сочетании минимализма и акцента на
          продукции, чтобы подчеркнуть премиальность бренда.
        </Text>
        <Text color="secondary" className="text-[12px]">
          Я реализовала сайт интернет-магазина с возможностью покупки и
          оформления доставки. Внедрила систему сбора контактов потенциальных
          клиентов, наполнила каталог товаров с фильтрацией, сортировкой и
          поиском, подключила рассылки по email, разработала раздел со статьями
          и информацией о бренде, оптимизировала сайт под SEO и настроила
          технические параметры.
        </Text>
      </div>
      <Image
        src="/img/projects/cosmetics/portfolio_screen3.png"
        width={1200}
        height={588}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          Для вовлечения пользователей я внедрила интерактивный квиз.  Это
          позволило компании эффективно собирать лиды и расширять базу клиентов.
        </Text>
        <Text color="secondary" className="text-[12px]">
          Посетитель отвечает на несколько вопросов о типе своей кожи, выделяет
          проблемы с которыми он сталкиевается в ходе за ней и получает гайд по
          уходу в обмен на контактные данные.
        </Text>
      </div>
      <Image
        src="/img/projects/cosmetics/portfolio_mockup4.png"
        width={1200}
        height={588}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          В результате проекта клиент получил не просто интернет-магазин, а
          полноценную платформу, объединяющую продажи, маркетинг и контент.
        </Text>
        <Text color="secondary" className="text-[12px]">
          Благодаря продуманной структуре и интуитивному интерфейсу пользователи
          быстро находят нужные товары и совершают покупку в несколько кликов.
          Квиз с гайд-подарком помогает регулярно пополнять базу подписчиков и
          повышает вовлеченность аудитории. А встроенная система рассылок и блог
          с новостями бренда создают устойчивую коммуникацию с клиентами.
        </Text>
      </div>

      <Image
        src="/img/projects/cosmetics/portfolio_screen5.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/cosmetics/portfolio_screen6.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/cosmetics/portfolio_mockups_7.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/cosmetics/portfolio_screen8.png"
        alt=""
        width={590}
        height={590}
      />
      <Image
        src="/img/projects/cosmetics/portfolio_screen9.png"
        alt=""
        width={590}
        height={590}
      />
      <div className="flex flex-col gap-4">
        <Text color="primary" className="font-semibold text-[16px]">
          С технической стороны проект оптимизирован под SEO и адаптирован для
          самостоятельного ведения: заказчик может без помощи разработчика
          обновлять каталог, публиковать статьи и управлять контентом.
        </Text>
        <Text color="secondary" className="text-[12px]">
          Моя работа охватывала весь цикл — от аналитики и дизайна до настройки
          продаж. Это позволило создать цельный, функциональный и визуально
          гармоничный продукт, который помогает бренду японской косметики
          укреплять присутствие на рынке и выстраивать долгосрочные отношения с
          клиентами.
        </Text>
      </div>
    </div>
  );
}
