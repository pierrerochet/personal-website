import React from "react";

import {
  Timeline,
  Container,
  Content,
} from "vertical-timeline-component-react";
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

export default function EducationTimeline() {
  return (
    <Timeline lang="en" theme={customTheme} dateFormat="short" withoutDay>
      <Container
        title="Institut national des langues et civilisations orientales"
        startDate="2019/09/01"
        endDate="2020/06/01"
      >
        <Content
          title="Master 2 (Master’s degree) &middot; Natural Language Processing"
          description={["Computer science, Statistics,", "Programming"]}
        />
      </Container>
      <Container
        title="Université Paris-Nanterre"
        startDate="2018/09/01"
        endDate="2019/06/01"
      >
        <Content
          title="Master 1 &middot; Natural Language Processing"
          description={[
            "Computer science, Statistics, ",
            "Linguistic",
            "Programming",
          ]}
        />
      </Container>
      <Container
        title="Université Paris-Nanterre"
        startDate="2017/09/01"
        endDate="2018/06/01"
      >
        <Content
          title="Licence 3 (Bachelor’s degree) &middot; Information and Communication"
          description={["Journalism, Design,", "Web development"]}
        />
      </Container>
      <Container
        title="Université de Bourgogne"
        startDate="2016/09/01"
        endDate="2017/06/01"
      >
        <Content
          title="Licence 2 &middot; Philosophy"
          description={["History, Semantics,", "Text analyze, Logic"]}
        />
      </Container>
      <Container
        title="Université de Bourgogne"
        startDate="2015/09/01"
        endDate="2016/06/01"
      >
        <Content
          title="Licence 1 &middot; Philosophy"
          description={["History, Semantics,", "Text analyze, Logic"]}
        />
      </Container>
      <Container
        title="Lycée Edouart Herriot"
        startDate="2014/09/01"
        endDate="2015/06/01"
      >
        <Content
          title="Baccalauréat (High-School Diploma) &middot; Scientific"
          description={[""]}
        />
      </Container>
    </Timeline>
  );
}
