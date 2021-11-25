import { skillCard } from "@content/pages/index.json";
import skills from "@content/skills.json";
import React from "react";
import CondensedCardIcon from "../../components/CondensedCardIcon";
import PageTitleSubtitleLayout from "../../components/PageSubtitleTitleLayout";


export { Page };

function Page({}) {
  
  return (
    <>
      <section bg={skillCard.bgColor || green-900} text="black">
        <PageTitleSubtitleLayout
          title={skillCard.title}
          subtitle="All"
          subtitleClasses=""
          w="max-7xl" m="x-auto"
          h="min-screen"
          >
          <div display="grid" grid="cols-1 sm:cols-2 md:cols-3 lg:cols-4 gap-4" m="auto" align="items-center">
            {skills.map((skill) =>
                <div
                  display="flex"
                  align="items-center"
                  justify="center"
                  key={skill.name}
                  > 
                  <CondensedCardIcon
                    title={skill.name}
                    icon={skill.icon}
                    h="20 md:18 min-12"
                    w="2/3 sm:52 md:58 min-44"
                  />
                </div>
                )}
          </div>
        </PageTitleSubtitleLayout>
      </section>
    </>
  );
}



