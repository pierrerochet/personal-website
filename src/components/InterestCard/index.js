import React from "react";

export default function InterestCard({ Icon, title, description }) {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card__body">
        <div className="text--center">
          <Icon size={30} color="var(--ifm-color-primary)" />
          <h4>{title}</h4>
        </div>
        <small>{description}</small>
      </div>
    </div>
  );
}
