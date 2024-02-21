import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { bottomMenu } from "./MenuData";
import move from "../../assets/move.png";
import menu10 from "../../assets/menu-10.png";

const BottomMenu = () => {
  return (
    <div>
      {bottomMenu.map((item) => (
        <Box key={item.id} display="flex" flexDirection="column" mb="12px">
          <Stack
            height="35px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            pr="12px"
            ml="8px"
          >
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="20px"
            >
              <Stack
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "34px",
                  height: "35px",
                  borderRadius: "8px",
                  backgroundColor: "#F5F5F5",
                }}
              >
                <img src={item.img} alt="menu1" />
              </Stack>
              <Typography
                sx={{ fontFamily: "Raleway", fontSize: "14px" }}
                variant="body1"
              >
                {item.text}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
      <Stack
        width="184px"
        height="35px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        pr="12px"
        ml="8px"
      >
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="20px"
        >
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "34px",
              height: "35px",
              borderRadius: "8px",
              backgroundColor: "#F5F5F5",
            }}
          >
            <img src={menu10} alt="menu1" />
          </Stack>
          <Typography
            sx={{ fontFamily: "Raleway", fontSize: "14px" }}
            variant="body1"
          >
            Account
          </Typography>
        </Stack>
        <img
          src={move}
          alt="move"
          style={{ width: "14.38px", height: "15.81px" }}
        />
      </Stack>
    </div>
  );
};

export default BottomMenu;
