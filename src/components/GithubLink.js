import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GithubLink({ url }) {
  return (
    <a href={url} className="github-link">
      <span>GitHub</span>
      <FaGithub className="github-link-icon" />
    </a>
  );
}
