import { landing, projectCard, skillCard } from "@content/pages/index.json";
import skills from "@content/skills.json";
import React from "react";
import CondensedCardIcon from "../../components/CondensedCardIcon";
import HorizontalCard from "../../components/HorizontalCard";
import HorizontalContainer from "../../components/HorizontalContainer";
import PageTitleSubtitleLayout from "../../components/PageSubtitleTitleLayout";
import EarthSatScene from "./EarthSatScene";

export { Page };

function Page({projectAttrs}) {

  return (
    <>
      {/* LANDING */}
      <section bg="black" text="white">
        <PageTitleSubtitleLayout
        title={landing.title}
        subtitle={landing.subtitle}>
          <div pos="absolute bottom-0 right-0" w="full" h="full" cursor="">
            <EarthSatScene />
          </div>
        </PageTitleSubtitleLayout>
      </section>

      {/* PROJECTS */}
      <section bg={projectCard.bgColor} text="black">
        <PageTitleSubtitleLayout
          title={projectCard.title}
          subtitle={projectCard.subtitle}
          w="max-7xl" m="x-auto"
        >
          <HorizontalContainer w="full" h="full">
            {projectAttrs.map((proj) => 
              <HorizontalCard subtitle={proj.subtitle} title={proj.title} link={proj.link} key={proj.slug} />
            )}
            <HorizontalCard subtitle="" title="See all projects" link="/projects/" key="/projects/" />
          </HorizontalContainer>
        </PageTitleSubtitleLayout>
      </section>

      {/* SKILLS */}
      <section bg={skillCard.bgColor} text="black">
      <PageTitleSubtitleLayout
        title={skillCard.title}
        subtitle={skillCard.subtitle}
        w="max-7xl" m="x-auto"
        >
        <div display="grid" grid="cols-1 sm:cols-2 md:cols-3 lg:cols-4 gap-4" m="auto" align="items-center">
          {skills.map((skill) =>
              <div
                display="flex"
                align="items-center"
                justify="center"
                > 
                <CondensedCardIcon
                  title={skill.name}
                  icon={skill.icon}
                  key={skill.name}
                  h="22 md:18 min-12"
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
