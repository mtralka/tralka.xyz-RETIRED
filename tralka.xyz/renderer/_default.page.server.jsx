import '@purge-icons/generated';
import React from "react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import { PageShell } from "./PageShell";

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname", "routeParams"];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // <link rel="icon" href="${logoUrl}" />
  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "Matthew Tralka";
  const desc = (documentProps && documentProps.description) || "Geospatial software engineer and remote sensing scientist";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3Ctext%20x='0'%20y='14'%3E🛰️%3C/text%3E%3C/svg%3E" type="image/svg+xml" />
        <meta name="image" content="https://tralka.xyz/icon.svg">
        <meta name="description" content="${desc}" />
        <meta name="Keywords" content="matthew, tralka, matthew tralka, remote sensing, gis, software engineer">

        <meta itemprop="name" content="Matthew Tralka">
        <meta itemprop="description" content="Geospatial software engineer and remote sensing scientist">
        <meta itemprop="image" content="https://tralka.xyz/icon.svg">

        <meta name="og:title" content="Matthew Tralka">
        <meta name="og:description" content="Geospatial software engineer and remote sensing scientist">
        <meta name="og:url" content="http://tralka.xyz">
        <meta name="og:site_name" content="Matthew Tralka">
        <meta name="og:locale" content="en_US">
        <meta name="og:type" content="website">
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
