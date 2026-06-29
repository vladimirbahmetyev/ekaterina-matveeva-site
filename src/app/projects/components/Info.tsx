import { Text } from "@/app/ui/typography/Text";
import { FC } from "react";

interface InfoProps {
  title: string;
  description: string;
}

export const Info: FC<InfoProps> = ({ title, description }) => (
  <div className="flex flex-col gap-4 lg:mt-10">
    <Text variant="h3" color="heading">
      {title}
    </Text>
    <Text
      variant="text"
      color="beige"
      className="lg:max-w-2/3"
      preserveFormatting
    >
      {description}
    </Text>
  </div>
);
