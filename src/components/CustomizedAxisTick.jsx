import React from "react";
export const CustomizedAxisTick = ({
  payload: { value },
  verticalAnchor,
  visibleTicksCount,
  ...rest
}) => (
  <text {...rest} className="bar-chart-tick" dy={12}>
    {value}
  </text>
);

export default CustomizedAxisTick;