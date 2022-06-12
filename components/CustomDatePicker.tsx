import { Grid, InputLabel, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react'

interface propTypes {
    name: string;
    label: string;
    value: Date | string;
    placeholder?: string;
    onChange: (value: Date | null) => void;
}

const CustomDatePicker = ({ label, name, placeholder, value, onChange }: propTypes) => {
    return (
        <Grid item xs={12} sx={{ m: 1, width: 400 }}>
            <InputLabel id={name} sx={{ marginBottom: '8px', fontWeight: 'bold', color: '#000' }}>{label}</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label={placeholder}
                    value={value ? value : null}
                    inputFormat="yyyy/MM/dd"
                    mask="____/__/__"
                    onChange={onChange}
                    minDate={new Date()}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            fullWidth
                            name={name}
                            size='small'
                            id={name}
                            label=''
                        />
                    }
                />
            </LocalizationProvider>
        </Grid>
    )
}

export default CustomDatePicker