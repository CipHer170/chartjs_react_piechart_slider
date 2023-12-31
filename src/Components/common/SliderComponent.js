import { Slider, Stack, Typography } from "@mui/material";
import React from "react";

function SliderComponent({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps,
}) {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit}
          {amount}
        </Typography>
        <Slider
          aria-label="Small steps"
          defaultValue={defaultValue}
          step={10}
          marks
          min={min}
          max={max}
          valueLabelDisplay="auto"
          onChange={onChange}
          value={value}
        />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" color="text.secondary">
            {unit}
            {min}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {unit}
            {max}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SliderComponent;
