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
          <div className="grid grid-cols-2 w-full">
            <Text variant="text" color="light-beige">
              тип сайта
            </Text>
            <Text variant="text" color="heading" className="self-start">
              {projectMeta.siteType}
            </Text>
          </div>
          <div className="grid grid-cols-2 w-full">
            <Text variant="text" color="light-beige" className="self-start">
              ниша
            </Text>
            <Text variant="text" color="heading">
              {projectMeta.niche}
            </Text>
          </div>
          <div className="grid grid-cols-2 w-full">
            <Text variant="text" color="light-beige">
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
