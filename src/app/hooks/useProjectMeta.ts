import { usePathname } from "next/navigation";

export type project =
  | "cosmetics"
  | "aboutLips"
  | "businessMentoring"
  | "germes"
  | "whereYouWant"
  | "mendi"
  | "skillSwap"
  | "womenConference";

export type projectMetaType = {
  title: string;
  description: string;
  siteType: string;
  niche: string;
  type: string;
};

const projects: Partial<Record<project, projectMetaType>> = {
  cosmetics: {
    title: "Интернет-магазин японской примиум косметики SK-II",
    description:
      "Сайт для импортера японской косметики, позволяющий заказать и оплатить товары на сайте с доставкой",
    siteType: "интернет-магазин",
    niche: "бьюти, e-commerse",
    type: "тильда",
  },
};

export const useProjectMeta: () => projectMetaType = () => {
  const currentPage = usePathname().split("\/").at(-1) || "";
  if (!!currentPage && projects[currentPage] !== undefined) {
    return projects[currentPage];
  }
  return { title: "", description: "", siteType: "", niche: "", type: "" };
};
