import { Intro } from "@/app/main/components/Intro";
import { WorkWithMe } from "@/app/main/components/WorkWithMe";
import { Steps } from "@/app/main/components/Steps";
import { Projects } from "@/app/main/components/Projects";
import { Services } from "@/app/main/components/Services";
import Image from "next/image";
import { Text } from "@/app/ui/typography/Text";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-full flex-col items-center justify-between">
        <Intro />
        <WorkWithMe />
        <Steps />
        <Projects />
        <Services />
        <div className="px-2.5 w-full mb-10">
          <div className="bg-white flex flex-col items-center border-[#B6B2A8] border-1 rounded-xl p-4 relative w-full">
            <Image
              src={"/img/footer/klev.png"}
              alt=""
              width={50}
              height={50}
              className="absolute top-[-25%] left-[-3%]"
            />
            <Text className="text-center">
              Если вы не нашли в списке услуг
              <br />
              то, что вам нужно, <span className="underline">напишите мне</span>
              <br />
              для обсуждения задач
            </Text>
          </div>
        </div>
      </main>
    </div>
  );
}
