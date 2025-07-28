import React from "react";
import "./SpeechBubble.css";

type SpeechBubbleProps = {
  as?: "div" | "p";
  angle?: number;
  thickness?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  as = "div",
  angle = 20,
  thickness = 2,
  children,
  className = "",
  style = {},
}) => {
  const Tag = as;
  const cssVars = {
    "--border-angle": `${angle}deg`,
    "--border-thickness": `${thickness}px`,
    ...style,
  } as React.CSSProperties;

  return (
    <Tag className={`speech-bubble ${className}`} style={cssVars}>
      {children}
    </Tag>
  );
};

export default SpeechBubble;
