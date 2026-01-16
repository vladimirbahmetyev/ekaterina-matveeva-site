import { Intro } from "@/app/main/components/Intro";
import { WorkWithMe } from "@/app/main/components/WorkWithMe";
import { Steps } from "@/app/main/components/Steps";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-full flex-col items-center justify-between">
        <Intro />
        <WorkWithMe />
        <Steps />
      </main>
    </div>
  );
}
