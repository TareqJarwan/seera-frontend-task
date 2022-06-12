import React from 'react'
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

interface propTypes {
    name: string;
    label: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    options: {
        value: string;
        label: string;
    }[];
}

const CustomSelectList = ({ name, label, options, value, onChange }: propTypes) => {
    return (
        <Grid item xs={12} sx={{ width: 220, marginX: '8px' }}>
            <InputLabel id={name} sx={{ marginBottom: '8px', fontWeight: 'bold', color: '#000' }}>{label}</InputLabel>
            <FormControl fullWidth size="small">
                <Select
                    labelId={name}
                    name={name}
                    id={name}
                    value={value}
                    displayEmpty
                    onChange={onChange}
                    variant='outlined'
                >
                    {options.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}

export default CustomSelectList
