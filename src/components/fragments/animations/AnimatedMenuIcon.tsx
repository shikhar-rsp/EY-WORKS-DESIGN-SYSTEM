"use client";

interface IAnimatedMenuIconProps {
  isOpen: boolean;
}

const AnimatedMenuIcon = (props: IAnimatedMenuIconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="2"
      y1="8"
      x2="14"
      y2="8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      style={{
        transformOrigin: "8px 8px",
        transform: props.isOpen ? "rotate(45deg)" : "translateY(-4px)",
        transition: "transform 0.3s ease",
      }}
    />
    <line
      x1="2"
      y1="8"
      x2="14"
      y2="8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      style={{
        transformOrigin: "8px 8px",
        transform: props.isOpen ? "rotate(-45deg)" : "translateY(4px)",
        transition: "transform 0.3s ease",
      }}
    />
  </svg>
);

export default AnimatedMenuIcon;
