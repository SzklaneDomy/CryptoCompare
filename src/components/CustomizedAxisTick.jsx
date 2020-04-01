import React from "react";
export const CustomizedAxisTick = ({
  payload: { value },
  verticalAnchor,
  visibleTicksCount,
  x,
  y,
  ...rest
}) => (
  <g transform={`translate(${x},${y})`}>
    <text
      {...rest}
      className="bar-chart-tick"
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      transform="rotate(-20)"
    >
      {value}
    </text>
  </g>
);

export default CustomizedAxisTick;
