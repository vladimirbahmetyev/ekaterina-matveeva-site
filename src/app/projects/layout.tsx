import { ProjectHeader } from "@/app/projects/components/ProjectHeader";
import { NavigationButton } from "@/app/ui/buttons/NavigationButton";
import { ExternalLinkButton } from "@/app/ui/buttons/ExternalLinkButton";
import { ProjectFooter } from "./components/ProjectFooter";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10" id="top">
      <ProjectHeader />
      <section>{children}</section>
      <ProjectFooter />
    </div>
  );
}
