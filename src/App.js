import Result from "./Components/Result";
import Navbar from "./Components/Navbar";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
// import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 0,
    downPayment: 3000 * 2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 10 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
