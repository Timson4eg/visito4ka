import React from "react";

type AnimatedTextProps = {
  text: string;
  tag?: React.ElementType;
  className?: string;
};

const AnimatedText = ({
  text,
  tag = "h1",
  className = "",
}: AnimatedTextProps) => {
  const Tag = tag;

  return (
    <Tag className={className}>
      {text.split("").map((char, i) =>
        char === "\n" ? (
          <br key={i} />
        ) : (
          <span
            key={i}
            className="letter"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        )
      )}
    </Tag>
  );
};

export default AnimatedText;
