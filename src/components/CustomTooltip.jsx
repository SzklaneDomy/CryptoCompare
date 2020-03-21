import React from "react";
import Box from "@material-ui/core/Box";

const CustomTooltip = ({ active, payload, label }) =>
  active ? (
    // <div
    //   style={{
    //     backgroundColor: "#ccd5e3",
    //     background: "rgba(211,211,211, 0.2)",
    //     padding: "10px",

    //   }}
    // >
    //   <p>{`date: ${label}`}</p>
    //   <p>{`price: $ ${payload[0].value}`}</p>
    // </div>
    <Box color="primary.contrastText" p={1} borderRadius={8} style={{background: "rgba(25, 118, 210, 0.5)"}}>
      <p>{`date: ${label}`}</p>
      <p>{`price: $ ${payload[0].value}`}</p>
    </Box>
  ) : null;

export default CustomTooltip;
