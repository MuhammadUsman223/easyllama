import React from "react";
import filter1 from "../../assets/filter1.png";

import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Stack,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Edit,
  Archive,
  FileCopy,
  MoreHoriz,
  KeyboardArrowDown,
} from "@mui/icons-material";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const typography = {
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "16.49px",
  textTransform: "upperCase",
};
const Top = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ px: "33px", pt: "37px" }}>
        <Typography sx={{ fontSize: "36px", lineHeight: "48.96px" }}>
          All Cases
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ mt: "29px" }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
            sx={{
              width: "160px",
              height: "38px",
              backgroundColor: "#F3ECFF",
              color: "#9738FF",
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "21px",
              textAlign: "center",
              textTransform: "unset",
              borderRadius: "10px",
              px: "20px",
              py: "6px",
            }}
          >
            Bulk Actions
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Edit />
              Edit
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <FileCopy />
              Duplicate
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <Archive />
              Archive
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHoriz />
              More
            </MenuItem>
          </StyledMenu>
          <Stack display="flex" flexDirection="row" gap="6px">
            <Stack
              sx={{
                width: "38px",
                height: "38px",
                backgroundColor: "#F3ECFF",
                borderRadius: "10px",
                p: "6px",
              }}
            >
              <img
                src={filter1}
                alt="filter"
                style={{ width: "15.08", height: "13.97" }}
              />
            </Stack>
            <Button
              sx={{
                backgroundColor: "#9738FF",
                color: "white",
                borderRadius: "8px",
                px: "20px",
                py: "6px",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "21px",
                textAlign: "center",
                textTransform: "unset",
              }}
            >
              Create New
            </Button>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          sx={{
            flexDirection: { sm: "row" },

            mt: "23px",
          }}
        >
          <Stack display="flex" flexDirection="row" gap="18px">
            <input type="checkbox" />
            <Typography sx={{ typography }}>Case</Typography>{" "}
          </Stack>

          <Typography
            sx={{
              ml: { sm: "15px", md: "30px", lg: "95px", xl: "120px" },

              typography,
            }}
          >
            Admin
          </Typography>
          <Typography
            sx={{
              ml: {
                sm: "15px",
                md: "30px",
                lg: "80px",
                xl: "130px",
              },
              typography,
            }}
          >
            Reporter
          </Typography>
          <Typography
            sx={{
              ml: {
                sm: "15px",
                md: "40px",
                lg: "120px",
                xl: "190px",
              },
              typography,
            }}
          >
            Last Active
          </Typography>
          <Typography
            sx={{
              ml: {
                sm: "15px",
                md: "30px",
                lg: "80px",
                xl: "130px",
              },
              typography,
            }}
          >
            Created
          </Typography>
          <Typography
            sx={{
              ml: {
                sm: "15px",
                md: "40px",
                lg: "90px",
                xl: "130px",
              },
              typography,
            }}
          >
            Status
          </Typography>
        </Stack>
        <Divider sx={{ mt: "18px", color: "#E0E0E0" }}></Divider>
      </Box>
    </div>
  );
};

export default Top;
