import React from "react";

const skillColors = {
  expert: "var(--ifm-color-primary)",
  proficient: "var(--ifm-color-primary-lighter)",
  intermediate: "var(--ifm-color-primary-lightest)",
};

export default function SkillCard({ Icon, title, description, tools }) {
  return (
    <div className="card shadow--md" style={{ height: "100%" }}>
      <div
        className="card__body"
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <div
          className="margin-bottom--md"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // textAlign: "justify",
          }}
        >
          <Icon size="25" className="margin-right--xs" />
          <h4 className="margin--none">{title}</h4>
        </div>
        <div className="margin-bottom--md">
          <small>{description}</small>
        </div>
        <div className="text--center" style={{ marginTop: "auto" }}>
          {tools.map((tool, index) => (
            <span
              key={index}
              className="badge margin--xs"
              style={{ background: skillColors[tool.level] }}
            >
              {tool.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
