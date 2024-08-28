import { ThemeProvider } from "@emotion/react";
import {
  Box,
  createTheme,
  CssBaseline,
  Divider,
  Stack,
} from "@mui/material";
import getDesignTokens from "Componants/theme";
import React, { useMemo, useState } from "react";
import AbbBar from "../Componants/AbbBar";
import Draweer from "Componants/Draweer";
import Cards from "Componants/Cards";
import Asaid from "Componants/asaid";
import Addpost from "Componants/addpost";


const Root = () => {
  const [showmenue, setshowmenue] = useState(false);
  const [mode, setmode] = useState(
    localStorage.getItem("thememod") === null
      ? "light"
      : localStorage.getItem("thememod") === "light"
      ? "light"
      : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode === "light"? "light" : "dark"}>
        <AbbBar {...{setshowmenue, showmenue}} />

        <Stack  divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexDirection: "row" }}>

          <Draweer {...{setmode, showmenue}} />

          <Cards/>

          <Asaid/>

        </Stack>

        <Addpost/>

      
      </Box>
    </ThemeProvider>
  );
};

export default Root;
