// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { modifyContent } = require("./utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pierre Rochet",
  tagline: "Machine Learning Engineer",
  url: "https://pierrerochet.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon_io/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "personal-website", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "Pierre Rochet, Machine Learning Engineer",
        },
      ],
      // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
      navbar: {
        title: "Pierre Rochet",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/pierrerochet",
            label: "GitHub",
            position: "left",
          },
          {
            to: "Resume",
            position: "right",
            label: "Resume",
          },
          {
            type: "doc",
            docId: "projects/index",
            position: "right",
            label: "Projects",
          },
          // { to: "blog", label: "Blog", position: "right" },
          {
            to: "Resources",
            label: "Resources",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/pierrerochet",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/pierre-rochet",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Resume",
                to: "/Resume",
              },
              {
                label: "Projects",
                to: "/docs/Projects",
              },
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "Resources",
                to: "/resources",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pierre Rochet. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "content", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/pierrerochet/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs", // the base directory to output to.
        documents: ["/ml-spam-filter-fr/master/README.md"], // the file names to download
        performCleanup: false,
        noRuntimeDownloads: true,
        modifyContent: modifyContent,
      },
    ],
  ],
};

module.exports = config;
