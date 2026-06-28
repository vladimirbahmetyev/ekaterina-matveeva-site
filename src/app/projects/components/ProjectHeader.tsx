"use client";

import { Text } from "@/app/ui/typography/Text";

import { useProjectMeta } from "@/app/hooks/useProjectMeta";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";

export const ProjectHeader = () => {
  const projectMeta = useProjectMeta();
  return (
    <div className="px-2.5 md:px-30 pt-15! md:pt-[auto] md:py-15 pb-10">
      <NavigationButton
        back
        text="На главную"
        className="md:block hidden mb-3"
      />
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mt-10">
        <div className="flex flex-col gap-6 md:w-1/3">
          <Text variant="h3" color="heading">
            {projectMeta.title}
          </Text>
          <Text variant="text" color="beige">
            {projectMeta.description}
          </Text>
          {projectMeta.link && (
            <ExternalLinkButton
              link={projectMeta.link}
              className="hidden md:inline-flex w-fit"
            />
          )}
        </div>
        <div className="flex flex-col w-full md:w-1/3 gap-2 md:gap-4">
          <div className="flex w-full">
            <Text variant="text" color="light-beige" className="w-1/2 ">
              тип сайта
            </Text>
            <Text variant="text" color="heading" className="max-w-1/2">
              {projectMeta.siteType}
            </Text>
          </div>
          <div className="flex  w-full">
            <Text variant="text" color="light-beige" className="w-1/2 ">
              ниша
            </Text>
            <Text className="text-[#35322A] max-w-1/2">
              {projectMeta.niche}
            </Text>
          </div>
          <div className="flex w-full">
            <Text
              variant="text"
              color="light-beige"
              className="w-1/2 max-w-1/2"
            >
              формат разработки
            </Text>
            <Text variant="text" color="heading">
              {projectMeta.type}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
