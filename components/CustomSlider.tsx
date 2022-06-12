import React from 'react'
import { Grid, InputLabel, Slider } from "@mui/material";

interface propTypes {
    name: string;
    label: string;
    required?: boolean;
    type?: string;
    value?: string;
    placeholder?: string;
    min: number;
    max: number;
    onChange?: (event: Event, value: number | Array<number>, activeThumb: number) => void;
}

const CustomSlider = ({ name, placeholder, label, onChange, value, type = "text", min, max }: propTypes) => {
    return (
        <Grid item xs={12} sx={{ m: 1, mt: 5, width: 300 }}>
            <InputLabel id={name} sx={{ fontWeight: 'bold', color: '#000' }}>{label}</InputLabel>
            <Slider
                size="medium"
                defaultValue={max}
                aria-label="Small"
                valueLabelDisplay="auto"
                min={min}
                max={max}
                onChange={onChange}
            />
        </Grid>
    )
}

export default CustomSlider