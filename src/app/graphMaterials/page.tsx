import { Text } from "@/app/ui/typography/Text";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";

export default function GraphMaterials() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <NavigationButton text="Назад" back />
          <Text>Создание графических материалов для вашего проекта </Text>
          <Text>
            Здесь собраны последние кейсы с разработкой презентаций, гайдов,
            оформление соцсетей, PDF-материалов для рассылки, обложки, банеры,
            креативы и т.п.
          </Text>
        </div>
      </div>
    </div>
  );
}
