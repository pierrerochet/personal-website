import React from "react";

import {
  Timeline,
  Container,
  Content,
} from "vertical-timeline-component-react";
import styles from "./styles.module.css";

import "react-vertical-timeline-component/style.min.css";

const customTheme = {
  yearColor: "var(--ifm-color-emphasis-800)",
  lineColor: "var(--ifm-color-emphasis-500)",
  dotColor: "var(--ifm-color-primary-contrast-background)",
  borderDotColor: "var(--ifm-color-emphasis-500)",
  titleColor: "var(--ifm-color-emphasis-800)",
  subtitleColor: "var(--ifm-color-primary)",
  textColor: "var(--ifm-color-content)",
};

export default function ExperienceTimeline() {
  return (
    <Timeline lang="en" theme={customTheme} dateFormat="short" withoutDay>
      <Container title="Machine Learning Engineer" startDate="2020/10/01" today>
        <Content
          title="Orange Bank &middot; Permanent &middot; 2y"
          description={[
            "Various topics such as:",
            "• Sentiment analysis",
            "• Natural language understanding",
            "• Logs anonymization",
            "• Multi-topic classification",
          ]}
        />
      </Container>
      <Container
        title="Natural Language Processing Engineer"
        startDate="2020/04/01"
        endDate="2020/09/01"
      >
        <Content
          title="Orange Bank &middot; Intership  &middot; 6m"
          description={["Search engine,", "Chatbot"]}
        />
      </Container>
      <Container
        title="Natural Language Processing Intern"
        startDate="2019/06/01"
        endDate="2019/12/01"
      >
        <Content
          title="CNRS &middot; Intership  &middot; 6m"
          description={[
            "Training a neural parser for French syntactic analysis",
            "Correction of recurring errors in treebanks by rewriting graphs",
          ]}
        />
      </Container>
    </Timeline>
  );
}
