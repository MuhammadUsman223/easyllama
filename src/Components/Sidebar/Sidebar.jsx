import React from "react";
import Box from "@mui/material/Box";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
const Sidebar = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          position: "fixed",
          width: "206px",
          height: "100vh",
          py: "16px",
          backgroundColor: "white",
        }}
      >
        <TopMenu />
        <BottomMenu />
      </Box>
    </div>
  );
};

export default Sidebar;
