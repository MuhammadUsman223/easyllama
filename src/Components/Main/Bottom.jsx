import React from "react";
import Card from "./Card";
import map from "../../assets/map.png";
import file from "../../assets/file.png";
import llama from "../../assets/Dr Llama.png";
// import llama from "../../assets/Llama2.png";

import { Box, Stack, Typography } from "@mui/material";
const typography = {
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "27px",
  textAlign: "center",
};
const para = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "21px",
};
const CardData = [
  {
    id: 1,
    img: map,
    text: "Share your webpage for capturing feedback",
    btn: "Share",
  },
  {
    id: 2,
    img: file,
    text: "Download a Word Doc to print and post",
    btn: "Download",
  },
];
const Bottom = () => {
  return (
    <div>
      <Box
        sx={{
          mt: "20px",
          mx: "33px",
          backgroundColor: "#F5F5F5",
          borderRadius: "16px",
        }}
      >
        <Stack display="flex" flexDirection="row" justifyContent="center">
          <Stack display="flex" flexDirection="column" alignItems="center">
            <Typography pt="61px" sx={{ typography }}>
              Oh my, well this is certainly unique... <br />
              You do not have any cases yet!
            </Typography>
            <Typography
              width="385px"
              pt="16px"
              textAlign="center"
              sx={{ para }}
            >
              Let your Teammates know that they have a safe and anonymous place
              to submit their feedback!
            </Typography>
            <Stack
              sx={{ flexDirection: { md: "row" }, gap: { md: "40px" } }}
              display="flex"
            >
              {CardData.map((data) => (
                <Card
                  key={data.id}
                  image={data.img}
                  text={data.text}
                  button={data.btn}
                />
              ))}
            </Stack>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <img
              src={llama}
              alt="drLlama"
              style={{ marginLeft: "40px", marginTop: "70px" }}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Bottom;
