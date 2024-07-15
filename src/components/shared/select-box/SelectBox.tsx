import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import "./select-box.css"

// value type for select elements
type TValue = {
    name: string
    value: string
}

// select box prop type
type TSelectBoxProps = {
    id?: string;
    name?: string;
    data: TValue[];
    title: string;
    setSelectValue?: any;
}

export default function SelectBox({ id, data, name,  title, setSelectValue }: TSelectBoxProps) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        const valueFromFeild = event.target.value
        setValue(valueFromFeild as string);
        setSelectValue && setSelectValue(valueFromFeild)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#8EC136',
                        },
                        '&:hover fieldset': {
                            borderColor: '#8EC136',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#8EC136',
                        },
                        '& .MuiInputBase-input': {
                            color: '#8EC136',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#8EC136',
                        '&.Mui-focused': {
                            color: '#8EC136',
                        },
                    },
                }}
            >
                <InputLabel
                    id={id}>{title}</InputLabel>
                <Select
                    name={name}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={handleChange}
                    sx={{ padding: "2px" }}
                >
                    {
                        data.map((value) => <MenuItem key={value.name} value={value.value}>{value.name.toUpperCase()}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
