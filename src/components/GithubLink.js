import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GithubLink({ url }) {
  return (
    <span className="">
      <a href={url} className="inline-flex justify-items-center">
        <span>GitHub</span>
        <FaGithub size="24" className="ml-2" />
      </a>
    </span>
  );
}
