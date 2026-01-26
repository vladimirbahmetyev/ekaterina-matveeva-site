"use client";

import { Text } from "@/app/ui/typography/Text";

import { useProjectMeta } from "@/app/hooks/useProjectMeta";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";

export const ProjectHeader = () => {
  const projectMeta = useProjectMeta();
  return (
    <div className="px-2.5 md:px-30 py-4 md:py-15">
      <NavigationButton back text="назад" className="mb-3" />
      <div className="flex flex-col md:flex-row gap-4 md:justify-between">
        <div className="flex flex-col gap-4 md:w-1/3">
          <Text className="font-semibold text-[#35322A] md:mt-4">
            {projectMeta.title}
          </Text>
          <Text className="text-[#35322A]">{projectMeta.description}</Text>
        </div>
        <div className="flex flex-col w-full md:w-1/3 gap-2">
          <div className="flex w-full">
            <Text className="text-[#B6B2A8] w-1/2 ">тип сайта</Text>
            <Text className="text-[#35322A] max-w-1/2">
              {projectMeta.siteType}
            </Text>
          </div>
          <div className="flex  w-full">
            <Text className="text-[#B6B2A8] w-1/2 ">ниша</Text>
            <Text className="text-[#35322A] max-w-1/2">
              {projectMeta.niche}
            </Text>
          </div>
          <div className="flex w-full">
            <Text className="text-[#B6B2A8] w-1/2 max-w-1/2">
              формат разработки
            </Text>
            <Text className="text-[#35322A]">{projectMeta.type}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
