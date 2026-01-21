import { FC } from "react";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";
import { project } from "@/app/hooks/useProjectMeta";

export interface ProjectCardProps {
  imgUrl: string;
  title: string;
  link?: `/projects/${project}` | "/graphMaterials";
  tags: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  imgUrl,
  tags,
  link,
  title = "",
}) => {
  return (
    <div className="flex flex-col w-full gap-2 mb-10">
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={title}
          width={300}
          height={372}
          className="w-full"
        />
      )}
      <div className="flex justify-between w-full items-center py-1">
        <Text className="max-w-2/3">{title}</Text>
        <a
          href={link}
          className="cursor-pointer flex w-10 h-10 border-1 border-[#FAF4E8] justify-center items-center rounded-full"
        >
          <Image src="/svg/linkArrow.svg" alt="" width={10} height={10} />
        </a>
      </div>
      <div className="flex gap-1">
        {tags?.map((tag) => (
          <div
            className="px-2 py-1 border-1 border-[#C2BCAF] rounded-full flex justify-center items-center text-[10px] text-[#C2BCAF]"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
