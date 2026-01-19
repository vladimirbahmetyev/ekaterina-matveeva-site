import { ProjectHeader } from "@/app/projects/components/ProjectHeader";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <ProjectHeader />
      <section>{children}</section>
    </div>
  );
}
