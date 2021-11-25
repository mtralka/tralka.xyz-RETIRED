import { landing, projectCard, skillCard } from "@content/pages/index.json";
import skills from "@content/skills.json";
import React from "react";
import { useMediaQuery } from 'react-responsive';
import CondensedCardIcon from "../../components/CondensedCardIcon";
import HorizontalCard from "../../components/HorizontalCard";
import HorizontalContainer from "../../components/HorizontalContainer";
import PageTitleSubtitleLayout from "../../components/PageSubtitleTitleLayout";
import EarthSatScene from "./EarthSatScene";

export { Page };



function Page({projectAttrs}) {

  const isMobile = useMediaQuery({query: '(max-width: 750px'})

  return (
    <>
      {/* LANDING */}
      <section bg="black" text="white">
        <PageTitleSubtitleLayout
        title={landing.title}
        subtitle={landing.subtitle}
        subtitleClasses="text-cool-gray-400"
        >
        
          <div pos="absolute bottom-0 right-0" w="full" h="full" cursor="">
            <EarthSatScene />
          </div>
        </PageTitleSubtitleLayout>
      </section>

      {/* PROJECTS */}
      <section bg={projectCard.bgColor || light-blue-700} text="black">
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
      <section bg={skillCard.bgColor || green-900} text="black">
        <PageTitleSubtitleLayout
          title={skillCard.title}
          subtitle={skillCard.subtitle}
          subtitleClasses=""
          w="max-7xl"
          h="auto"
          m="x-auto"
          
          >
          <div display="grid" grid="cols-1 sm:cols-2 md:cols-3 lg:cols-4 gap-4" m="auto" align="items-center">
            {skills.slice(0, isMobile ? skillCard.mobileLimit : skillCard.limit).map((skill) =>
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

            {
            ((isMobile && skills.length > skillCard.mobileLimit)
            ||
            (skills.length > skillCard.limit))
            && 
            <div
              display="flex"
              align="items-center"
              justify="center"
            > 
              <a
                href="/skills"
                h="20 md:18 min-12"
                w="2/3 sm:52 md:58 min-44">
                <CondensedCardIcon
                  title="See all skills"
                />
              </a>
            </div>
            }
          </div>
        </PageTitleSubtitleLayout>
      </section>
    </>
  );
}
