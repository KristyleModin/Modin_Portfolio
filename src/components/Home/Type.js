import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Quality Assurance Specialist",
          "UI/UX Designer",
          "Community Volunteer & Tech Advocate",
          "Front-End Developer",
          "Technical Support Specialist"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
