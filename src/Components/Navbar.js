import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography>Project</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
