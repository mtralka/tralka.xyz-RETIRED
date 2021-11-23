import React from "react";
import HorizontalCard from "../../components/HorizontalCard";
import HorizontalContainer from "../../components/HorizontalContainer";
import EarthSatScene from "./EarthSatScene";
import PageTitleSubtitleLayout from "./PageSubtitleTitleLayout";

export { Page };

function Page() {
  return (
    <>
      {/* INDEX LANDING */}
      <section bg="black" text="white">
        <PageTitleSubtitleLayout
        title="Remote Sensing Scientist"
        subtitle="Matthew Tralka">
          <div pos="absolute bottom-0 right-0" w="full" h="full" cursor="">
            <EarthSatScene />
            </div>
          </PageTitleSubtitleLayout>
      </section>
      {/* INDEX PROJECTS */}
      <section bg="amber-600" text="black">
      <PageTitleSubtitleLayout
        title="Projects"
        subtitle="Featured">
          <HorizontalContainer w="full" h="full">
              <HorizontalCard subtitle="SUBTITLE" title="EOPlatform" link="text.com"></HorizontalCard>
              <HorizontalCard subtitle="SUBTITLE" title="EOPlatform" link="http://www.github.com"></HorizontalCard>
              <HorizontalCard subtitle="SUBTITLE" title="EOPlatform" link="http://www.github.com"></HorizontalCard>
              <HorizontalCard subtitle="SUBTITLE" title="EOPlatform" link="http://www.github.com"></HorizontalCard>
              <HorizontalCard subtitle="SUBTITLE" title="EOPlatform" link="http://www.github.com"></HorizontalCard>
          </HorizontalContainer>

          </PageTitleSubtitleLayout>
      </section>

      {/* INDEX SKILLS */}
      <section bg="red-600" text="black">
      <PageTitleSubtitleLayout
        title="Skills"
        >
          <div w="full" h="full" bg="blue-500">
              ss
          </div>

          </PageTitleSubtitleLayout>
      </section>
    </>
  );
}
