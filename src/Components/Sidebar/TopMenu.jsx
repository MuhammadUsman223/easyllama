import React from "react";
import "./topMenu.css";
import { Box, Stack, Typography } from "@mui/material";
import { menu } from "./MenuData";
import logo from "../../assets/logo.png";

const TopMenu = () => {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        style={{ paddingLeft: "10.97px", marginBottom: "13px" }}
      />

      {menu.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: "12px",
          }}
        >
          <Stack
            width="191px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            pr="12px"
            ml="8px"
            sx={{
              height: item.id === 3 && "42px",
              backgroundColor: item.id === 3 && "#9738FF",
              borderRadius: item.id === 3 && "8px",
            }}
          >
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="8px"
            >
              <Stack width="35px" height="35px">
                <img src={item.img} alt="menu1" />
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "14px",
                  color: item.id === 3 && "#FFFFFF",
                }}
                variant="body1"
              >
                {item.text} <br /> {item.textb}
              </Typography>
            </Stack>
            {item.id === 3 ? (
              <img
                src={item.colorIcon}
                alt="vector"
                style={{
                  width: "8.18px",
                  height: "14.32px",
                }}
              />
            ) : (
              <img
                src={item.icon}
                alt="vector"
                style={{
                  width: "8.18px",
                  height: "14.32px",
                }}
              />
            )}
          </Stack>
        </Box>
      ))}
    </div>
  );
};

export default TopMenu;
