import React from "react";

const ProfileEdit1 = () => {
  return (
    <svg
      className="CircularProgressbar "
      viewBox="0 0 100 100"
      data-test-id="CircularProgressbar"
    >
      <path
        className="CircularProgressbar-trail"
        d="
M 50,50
m 0,-42.5
a 42.5,42.5 0 1 1 0,85
a 42.5,42.5 0 1 1 0,-85
"
        strokeWidth={15}
        fillOpacity={0}
        style={{
          stroke: "rgb(245, 245, 245)",
          strokeDasharray: "267.035px, 267.035px",
          strokeDashoffset: "0px",
        }}
      />
      <path
        className="CircularProgressbar-path"
        d="
M 50,50
m 0,-42.5
a 42.5,42.5 0 1 1 0,85
a 42.5,42.5 0 1 1 0,-85
"
        strokeWidth={15}
        fillOpacity={0}
        style={{
          stroke: "rgb(31, 31, 31)",
          strokeDasharray: "267.035px, 267.035px",
          strokeDashoffset: "80.1106px",
        }}
      />
    </svg>
  );
};

export default ProfileEdit1;
