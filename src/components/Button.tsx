import * as React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: any;
  onClick?: (event: any) => void;
}) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
