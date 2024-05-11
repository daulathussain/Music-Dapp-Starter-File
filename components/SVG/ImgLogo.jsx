import React from "react";

const ImgLogo = () => {
  return (
    <>
      <img
        alt="Channel Profile Image"
        loading="lazy"
        width={29}
        height={29}
        decoding="async"
        data-nimg={1}
        className="rounded-md object-cover"
        sizes="29px"
        src="/logo.png"
        style={{ color: "transparent" }}
      />
    </>
  );
};

export default ImgLogo;
