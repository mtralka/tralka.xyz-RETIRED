import { projectCard } from "@content/pages/index.json";
import React from "react";
import HorizontalCard from "../../../components/HorizontalCard";
import PageTitleSubtitleLayout from "../../../components/PageSubtitleTitleLayout";

export { Page };

function Page({projectAttrs}) {
  
  const projNames = projectAttrs.map((proj) => 
    <p key={proj.slug}>
      {proj.title}
    </p>
  )
  return (
    <>
      <section bg={projectCard.bgColor || light-blue-700} text="black">
        <PageTitleSubtitleLayout
          title={projectCard.title}
          subtitle="All"
          subtitleClasses=""
          w="max-7xl" m="x-auto"
          h="min-screen"
          >
          <div display="flex" flex="wrap" grid="gap-4" m="auto" align="items-center">
            {projectAttrs.map((proj) =>
                  <HorizontalCard
                    subtitle={proj.subtitle}
                    title={proj.title}
                    link={proj.link}
                    key={proj.slug}
                    w="xs:full"
                    flex="grow md:grow-0"/>
                )}
          </div>
        </PageTitleSubtitleLayout>
      </section>
    </>
  );
}
