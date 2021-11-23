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
      <section bg="amber-600 green-900 light-blue-700" text="black">
      <PageTitleSubtitleLayout
        title="Projects"
        subtitle="">
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
      {/* green-900 purple-800 light-blue-700 */}
      <section bg=" green-900" text="black">
      <PageTitleSubtitleLayout
        title="Skills"
        >
          <div w="full" h="full" >
              ss
          </div>

          </PageTitleSubtitleLayout>
      </section>
    </>
  );
}
