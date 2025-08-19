import { useState } from "react";
import PropTypes from "prop-types";
const styleContainer = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const styleStarContainer = {
  display: "flex",
};
StarRating.prototype = {
  maxStar: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.array.isRequired,
  defaultRating: PropTypes.number,
  className: PropTypes.string,
};
export default function StarRating({
  maxStar = 5,
  color = "yellow",
  size = 48,
  className = "",
  message = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [temRating, setTemRating] = useState(0);
  function onhandleRating(rating) {
    setRating(rating);
    try {
      onSetRating(rating);
    } catch (e) {
      console.log(e);
    }
  }
  const textContainer = {
    lineHeight: "0",
    margin: "0",
    fontSize: `${size / 1.5}px`,
    color: `${color}`,
  };
  return (
    <div style={styleContainer} className={className}>
      <div style={styleStarContainer}>
        {Array.from({ length: maxStar }, (_, i) => (
          <Star
            key={i}
            onRating={() => onhandleRating(i + 1)}
            full={temRating ? temRating >= i + 1 : rating >= 1 + i}
            onHoverIn={() => setTemRating(i + 1)}
            onHoverOut={() => setTemRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textContainer}>
        {message.length === maxStar
          ? message[temRating ? temRating - 1 : rating - 1]
          : temRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ onRating, full, onHoverIn, onHoverOut, color, size }) {
  const starContainerStyle = {
    height: `${size}px`,
    width: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={starContainerStyle}
      onClick={onRating}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
