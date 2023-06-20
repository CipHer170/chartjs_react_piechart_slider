import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function TenureSelect({ data, setData }) {
  const handleChange = (e) => {
    setData({ ...data, loanTterm: e.target.value });
  };
  return (
    <div>
      <FormControl fullWidth my={10}>
        <InputLabel id="demo">Tenure</InputLabel>
        <Select
          labelId="demo"
          id="demo-select"
          value={data.loanTterm}
          label="Tenur"
          defaultValue={5}
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default TenureSelect;
// 8600533316449856
