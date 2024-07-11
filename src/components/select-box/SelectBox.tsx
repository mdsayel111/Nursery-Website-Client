import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import "./select-box.css"

// select box prop type
type TSelectBoxProps = {
    id: string; data: Record<string, any>; setSearchObj: any;
}

export default function SelectBox({ id, data, setSearchObj }: TSelectBoxProps) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        const valueFromFeild = event.target.value
        setValue(valueFromFeild as string);
        setSearchObj(valueFromFeild)
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
                    id={id}>{data.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={handleChange}
                    sx={{ padding: "2px" }}
                >
                    {
                        data.values.map((value: string) => <MenuItem key={value} value={value}>{value.toUpperCase()}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
