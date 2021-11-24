import React from "react";


export { Page };

function Page({projectAttrs}) {
  
  const projNames = projectAttrs.map((proj) => 
    <p key={proj.slug}>
      {proj.title}
    </p>
  )
  return (
    <>
      PROJECT NAMES
      {projNames}
    </>
  );
}
