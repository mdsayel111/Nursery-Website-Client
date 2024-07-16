import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import "./select-box.css"
import { primary } from '../../../constants/color';

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

export default function SelectBox({ id, data, name, title, setSelectValue }: TSelectBoxProps) {
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
                            borderColor: primary.main,
                        },
                        '&:hover fieldset': {
                            borderColor: primary.main,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: primary.main,
                        },
                        '& .MuiInputBase-input': {
                            color: primary.main,
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: primary.main,
                        '&.Mui-focused': {
                            color: primary.main,
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
