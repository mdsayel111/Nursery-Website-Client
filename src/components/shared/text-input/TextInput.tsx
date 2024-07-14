import { TextField } from '@mui/material';
import { primary } from '../../../constants/color';
import "./text-input.css"
import { Controller } from 'react-hook-form';

// create text input prop type
type TTextInput = {
    name: string;
    required: boolean;
    fullWidth: boolean;
    id: string;
    label: string;
    type?: string
}

const TextInput = ({ name, required, id, fullWidth, label, type }: TTextInput) => {
    return (
        <TextField
            name={name}
            required={required}
            fullWidth={fullWidth}
            id={id}
            label={label}
            type={type}
            sx={{
                '& .MuiInputBase-input': {
                    main: primary.main,
                },
                '& .MuiInputLabel-root': {
                    main: primary.main,
                },
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
                },
            }}
        />)
};

export default TextInput;