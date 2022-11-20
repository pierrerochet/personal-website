import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import HomeImage from "@site/static/img/Data-report.svg";
import AvatarImage from "@site/static/img/undraw_male_avatar_re_y880.svg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <head>
        <meta name="keywords" content="cooking, blog" />
      </head>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6 vertical-align")}>
            <div className="hero">
              <div className="container">
                <AvatarImage
                  width="120px"
                  height="120px"
                  className="margin-bottom--md"
                />

                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <p>
                  Welcome to my personal website, I'm Pierre Rochet a Machine
                  Learning Engineer. I use your data to build Machine Learning
                  products.
                </p>
                <div className={clsx(styles.buttons, "row margin-horiz--none")}>
                  <div className="col col--5 padding-vert--md padding-horiz--none">
                    <Link
                      className="button button--primary button--lg button--outline col"
                      to="/resume"
                    >
                      Resume
                    </Link>
                  </div>
                  <div className="col col--5 col--offset-1 padding-vert--md padding-horiz--none">
                    <Link
                      className="button button--primary button--lg col"
                      to="docs/projects"
                    >
                      Projects
                    </Link>
                  </div>
                </div>

                {/* <div className={clsx(styles.buttons, "col")}>See my Resume</div> */}
              </div>
            </div>
          </div>

          <div className={clsx("col col--6")}>
            <HomeImage height="100%" className={clsx("col padding--lg")} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Pierre Rochet personal website"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
