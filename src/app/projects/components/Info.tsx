import { Text } from "@/app/ui/typography/Text";
import { FC } from "react";

interface InfoProps {
  title: string;
  description: string;
}

export const Info: FC<InfoProps> = ({ title, description }) => (
  <div className="flex flex-col gap-4">
    <Text color="primary" className="font-semibold text-[16px]">
      {title}
    </Text>
    <Text color="secondary" className="text-[12px]">
      {description}
    </Text>
  </div>
);
