import * as React from "react";

const NavLink = ({
  text,
  isActive,
  onClick,
}: {
  text: string;
  isActive: boolean;
  onClick?: (event: any) => void;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative transition hover:bg-gray-100 p-4 text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute transition-all ${[
          !isActive && !isHovered ? "h-0 w-0" : "",
          !isActive && isHovered ? "h-1 w-4" : "",
          isActive ? "h-1 w-8" : "",
        ].join(
          ""
        )} bottom-0 left-1/2 origin-center transform -translate-x-1/2 bg-blue-500 rounded-full shadow-md`}
      />
      {text}
    </div>
  );
};

export default NavLink;
