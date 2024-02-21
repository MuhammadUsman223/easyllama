import React from "react";
import { Box, Button, Typography } from "@mui/material";
const typography = {
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "21px",
  textTransform: "unSet",
};
const Card = ({ image, text, button }) => {
  return (
    <div>
      <Box
        sx={{
          pt: "40px",
          pl: "20px",
          backgroundColor: "white",
          width: "202px",
          height: "218px",
          mt: "34px",
          borderRadius: "7.11px",
        }}
      >
        <Box
          sx={{
            width: "38px",
            height: "38px",
            pt: "4.55px",
            pl: "4.55px",
            borderRadius: "5.24px",
            backgroundColor: "#F3ECFF",
          }}
        >
          <img
            src={image}
            alt="map"
            style={{ width: "30.14px", height: "30.14px" }}
          />
        </Box>
        <Typography sx={{ height: "42px", mt: "11px", typography }}>
          {text}
        </Typography>
        <Button
          sx={{
            backgroundColor: "#9738FF",
            color: "white",
            typography,
            textAlign: "center",
            mt: "19px",
          }}
        >
          {button}
        </Button>
      </Box>
    </div>
  );
};

export default Card;
