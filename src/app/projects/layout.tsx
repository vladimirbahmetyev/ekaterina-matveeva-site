import { ProjectHeader } from "@/app/projects/components/ProjectHeader";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <ProjectHeader />
      <section>{children}</section>
      <div className="flex justify-between w-full items-center px-2.5 mt-10">
        <NavigationButton text="На главную" url="/" />
        <ExternalLinkButton link={"test.com"} />
      </div>
    </div>
  );
}
