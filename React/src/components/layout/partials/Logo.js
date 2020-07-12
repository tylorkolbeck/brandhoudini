import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div
      {...props}
      className={classes}
      style={{
        display: "flex",
        alignItems: "baseline"
      }}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require("./../../../assets/images/logo.png")}
            alt="Neon"
            width={48}
            height={48}
          />
        </Link>
      </h1>
      <h2 className="m-0 ml-16" style={{ whiteSpace: "nowrap" }}>
        Brand Houdini
      </h2>
    </div>
  );
};

export default Logo;
