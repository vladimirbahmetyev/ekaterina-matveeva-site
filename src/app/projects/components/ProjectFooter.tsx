"use client";

import { useProjectMeta } from "@/app/hooks/useProjectMeta";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";

export const ProjectFooter = () => {
  const projectMeta = useProjectMeta();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full  px-2.5 lg:px-30 mt-10 gap-5">
      <NavigationButton
        text="На главную"
        url="/"
        className="order-2 lg:order-1 lg:justify-self-start"
      />
      {projectMeta.link && (
        <ExternalLinkButton
          link={projectMeta.link}
          className="lg:order-2 lg:justify-self-end"
        />
      )}
    </div>
  );
};
