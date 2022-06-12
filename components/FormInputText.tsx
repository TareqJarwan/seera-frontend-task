import React from 'react'
import { Grid, InputAdornment, InputLabel, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface propTypes {
    name: string;
    label: string;
    required?: boolean;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputText = ({ name, placeholder, label, onChange, value, type = "text" }: propTypes) => {

    return (
        <Grid item xs={12} sx={{ m: 1, width: 300 }}>
            <InputLabel id={name} sx={{ fontWeight: 'bold', color: '#000' }}>{label}</InputLabel>
            <TextField
                size="small"
                name={name}
                variant="outlined"
                fullWidth
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type}
                sx={{ marginTop: '8px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Grid>
    )
}

export default FormInputText
