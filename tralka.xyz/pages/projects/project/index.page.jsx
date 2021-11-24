// import { attributes, html } from "@content/test.md";
import React from "react";
import Pill from "../../../components/Pill";
export { Page };

function Page({ attributes, html}) {
  return (
    <>
      {/* BACKGROUND */}
      <div 
        display="flex"
        align="items-start"
        justify="center"
        bg="cool-gray-200"
        h="min-screen"
      >
        {/* BOX */}
        <div
          p="4"
          m="x-2 t-10 b-16 md:x-10"
          space="y-12"
          overflow="hidden"
          bg="gray-100"
          border="rounded-md"
          shadow="2xl"
          w="max-7xl"
        >
          {/* BOX CONTENT */}
          <div
            w="full max-5xl"
            space="y-12"
            p="md:x-20"
          >
            <section>
              <div 
                p="y-2"
                space="y-4"
                text="center"
              >
                <h2 
                  text="2xl md:4xl"
                  font="bold tracking-wide"
                >
                  { attributes.title }
                </h2>

                {/* SKILL PILLS */}
                {attributes.skills &&
                  <div space="x-3">
                  {attributes.skills.map((skill) => 
                    <Pill
                      text={skill}
                      key={skill}
                    />
                  )}
                  </div>
                  
                }
              </div>

              <article
                w="max-3xl"
                p="x-1 md:x-0"
                m="x-auto t-4"
                text="prose justify"
                className="prose prose-lg"
                dangerouslySetInnerHTML={{__html: html}}
              />  
            </section>

            {/* <div
            class="
            flex flex-col
            items-center
            justify-around
            md:items-start md:flex-row
            "
            >
            <nuxt-link
            v-if="prev.value"
            :to="prev.value.path"
            class="
              flex flex-col
              items-center
              justify-around
              p-2
              space-y-1
              md:space-y-3
            "
            >
            <Icon
              icon="ic:outline-keyboard-arrow-left"
              class="flex-shrink-0 w-12 h-12 text-indigo-600"
              aria-hidden="true"
            />
            <div class="space-y-1 text-center">
              <p
                class="
                  hidden
                  overflow-hidden
                  font-semibold
                  text-center
                  break-normal
                  md:block
                "
                style="max-width: 12rem; max-height: 6rem"
              >
                {{ prev.value.title }}
              </p>
              <span class="text-xs text-gray-500 uppercase md:hidden"
                >Previous</span
              >
            </div>
            </a>

            <a
            v-if="next.value"
            :to="next.value.path"
            class="
              flex flex-col
              items-center
              justify-around
              p-2
              space-y-1
              md:space-y-3
            "
            >
            <Icon
              icon="ic:outline-keyboard-arrow-right"
              class="flex-shrink-0 w-12 h-12 text-indigo-600"
              aria-hidden="true"
            />
            <div class="space-y-1 text-center">
              <p
                class="
                  hidden
                  overflow-hidden
                  font-semibold
                  text-center
                  break-normal
                  md:block
                "
                style="max-width: 12rem; max-height: 6rem"
              >
                {{ next.value.title }}
              </p>
              <span class="text-xs text-gray-500 uppercase md:hidden"
                >Next</span
              >
            </div>
            </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}