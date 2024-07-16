import { TextField } from '@mui/material';
import { primary } from '../../../constants/color';
import "./text-input.css"

// create text input prop type
type TTextInput = {
    name: string;
    required: boolean;
    fullWidth: boolean;
    id: string;
    label: string;
    type?: string

    maxLength?: number
}

const TextInput = ({ name, required, maxLength, id, fullWidth, label, type }: TTextInput) => {
    return (
        <TextField
            name={name}
            required={required}
            fullWidth={fullWidth}
            id={id}
            label={label}
            type={type}
            inputProps={{ maxLength: maxLength }}
            sx={{
                '& .MuiInputBase-input': {
                    color: primary.main, // Assuming you want to apply primary.main color to input text
                },
                '& .MuiInputLabel-root': {
                    color: 'var(--primary)', // Use CSS variable for primary color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'var(--primary)', // Use CSS variable for primary color when focused
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