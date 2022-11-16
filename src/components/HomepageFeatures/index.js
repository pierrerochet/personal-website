import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Data engineering",
    Svg: require("@site/static/img/undraw_data_report_re_p4so.svg").default,
    description: (
      <>
        I process and analyze the data, select the right features in order to
        exploit them to their full potential
      </>
    ),
  },

  {
    title: "Model training",
    Svg: require("@site/static/img/undraw_firmware_re_fgdy.svg").default,
    description: (
      <>
        I select the best algorithm for the data, choice the best parameters and
        perform the training
      </>
    ),
  },
  {
    title: "Application building",
    Svg: require("@site/static/img/undraw_programming_re_kg9v.svg").default,
    description: (
      <>
        I build the product to serve and exploit the model. It is usually an
        independent API but it can also be a plugin for third party software
      </>
    ),
  },
  {
    title: "Deployment",
    Svg: require("@site/static/img/undraw_server_cluster_jwwq.svg").default,
    description: (
      <>
        I deploy the product in any server or cloud platform. You will then be
        able to benefit from its functionalities
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
