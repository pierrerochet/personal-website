// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pierre Rochet",
  tagline: "Machine Learning Engineer",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

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
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      navbar: {
        title: "Pierre Rochet",
        // logo: {
        //   alt: "Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "ml-spam-filter-fr",
            position: "left",
            label: "Projects",
          },
          // { to: "blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/pierrerochet",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    // [
    //   "docusaurus-plugin-remote-content",
    //   {
    //     // options here
    //     name: "readme", // used by CLI, must be path safe
    //     sourceBaseUrl: "https://raw.githubusercontent.com/pierrerochet/", // the base url for the markdown (gets prepended to all of the documents when fetching)
    //     outDir: "docs", // the base directory to output to.
    //     documents: ["/ml-spam-filter-fr/master/README.md"], // the file names to download
    //     modifyContent: modifyContent,
    //   },
    // ],
  ],
};

function modifyContent(filename, content) {
  const newFilename = filename.replace(
    "/ml-spam-filter-fr/master/README.md",
    "_README.md"
  );

  // we don't want to modify this item, since it doesn't contain "README" in the name
  return { filename: newFilename };
}

module.exports = config;
