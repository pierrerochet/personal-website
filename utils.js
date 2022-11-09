const spamFilterBase = `---
title: Spam filter
toc_max_heading_level: 2
---

import GithubLink from "@site/src/components/GithubLink";

:::info
All the documentation below comes directly from the project's Readme available on <GithubLink url="https://github.com/pierrerochet/ml-spam-filter-fr"></GithubLink>
:::

`;

function modifyContent(filename, content) {
  const newFilename = filename.replace(
    "/ml-spam-filter-fr/master/README.md",
    "/ml-spam-filter-fr/README.mdx"
  );

  const newContent = spamFilterBase + content;

  return { filename: newFilename, content: newContent };
}

module.exports = { modifyContent };
