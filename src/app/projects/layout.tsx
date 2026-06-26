import { ProjectHeader } from "@/app/projects/components/ProjectHeader";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10" id="top">
      <ProjectHeader />
      <section>{children}</section>
      <div className="flex justify-center md:justify-start w-full items-center px-2.5 md:px-30 mt-10">
        <NavigationButton text="На главную" url="/" />
      </div>
    </div>
  );
}
