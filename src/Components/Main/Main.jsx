import React from "react";
import { Box } from "@mui/material";
import Top from "./Top";
import Bottom from "./Bottom";

const Main = () => {
  return (
    <div>
      <Box
        sx={{
          width: { sm: "81vw" },
          height: "100vh",
          backgroundColor: "white",
          borderRadius: "23px",
          mt: "20px",
          mr: "14px",
          ml: "222px",
        }}
      >
        <Top />
        <Bottom />
      </Box>
    </div>
  );
};

export default Main;
