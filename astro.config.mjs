import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";

export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: SITE_URL,
  base: '/astro-portfolio-template/',  // Replace 'repository-name' with your actual GitHub repo name
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    }
  }
});


// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap";
// import robotsTxt from "astro-robots-txt";
// import { SITE_URL } from "./src/data/config";


// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind(), sitemap(), robotsTxt()],
//   site: SITE_URL,
//   markdown: {
//     syntaxHighlight: "shiki",
//     shikiConfig: {
//       theme: "nord",
//       wrap: false
//     }
//   }
// });