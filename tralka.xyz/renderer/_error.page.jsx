import React from "react";

export { Page };

function Page({ is404 }) {
  if (is404) {
    return (
      <>
        <section
          h="screen"
          w="screen"
          display="flex"
          flex="col"
          align="items-center"
          justify="center"
          space="y-3"
          bg="gray-600"
          text="light-600 "
        >
          <h1
            font="bold"
          >404 Page Not Found</h1>
          <p>This page could not be found.</p>
          <a
            href="/"
            text="hover:underline purple-200"
          > 
            Return home
          </a>
        </section>
        
      </>
    );
  } else {
    return (

      <>
      <section
          h="screen"
          w="screen"
          display="flex"
          flex="col"
          align="items-center"
          justify="center"
          space="y-3"
          bg="gray-600"
          text="light-600 "
        >
          <h1
            font="bold"
          >500 Internal Server Error</h1>
          <p>Something went wrong.</p>
          <a
            href="/"
            text="hover:underline purple-200"
          > 
            Return home
          </a>
        </section>
      </>
    );
  }
}
