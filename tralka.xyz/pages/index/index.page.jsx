import { landing, projectCard, skillCard } from "@content/pages/index.json";
import React from "react";
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
          subtitle={projectCard.subtitle}>
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
        >
        <div w="full" h="full" >
            ss
        </div>
        </PageTitleSubtitleLayout>
      </section>
    </>
  );
}
