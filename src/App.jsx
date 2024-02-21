import React from "react";
import "./App.css";
import { Stack } from "@mui/material";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <div>
      <Stack display="flex" flexDirection="row">
        <Sidebar />
        <Main />
      </Stack>
    </div>
  );
};

export default App;
