/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  projectsSidebar: [
    {
      type: "category",
      label: "Projects",
      link: { type: "doc", id: "projects/index" },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Spam Filter",
          link: { type: "doc", id: "projects/ml-spam-filter-fr/index" },
          items: [
            "projects/ml-spam-filter-fr/objective",
            "projects/ml-spam-filter-fr/using",
            "projects/ml-spam-filter-fr/tools",
            "projects/ml-spam-filter-fr/structure",
            "projects/ml-spam-filter-fr/data",
            "projects/ml-spam-filter-fr/performances",
            "projects/ml-spam-filter-fr/choices",
            "projects/ml-spam-filter-fr/improvement",
          ],
        },
        "projects/ml-anomaly-detection/index",
        "projects/ml-fraud-detection/index",
        "projects/ml-malicious-url-detection/index",
      ],
    },
  ],
};

module.exports = sidebars;
