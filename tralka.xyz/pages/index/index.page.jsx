import React from "react";
import EarthSatScene from "../../components/EarthSatScene";
import PageTitleSubtitleLayout from "../../components/PageSubtitleTitleLayout";

export { Page };

function Page() {
  return (
    <>
      <section bg="black" text="white">
        <PageTitleSubtitleLayout
        title="Remote Sensing Scientist"
        subtitle="Matthew Tralka">
          <div pos="absolute bottom-0 right-0" w="full" h="full" cursor="">
            <EarthSatScene />
            </div>
          </PageTitleSubtitleLayout>
      </section>
      <section bg="amber-600" text="black">
      <PageTitleSubtitleLayout
        title="Projects"
        subtitle="Featured">
          </PageTitleSubtitleLayout>

      </section>
    </>
  );
}
