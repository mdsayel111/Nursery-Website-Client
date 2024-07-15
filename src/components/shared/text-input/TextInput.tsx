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
            inputProps={{ maxLength: maxLength && maxLength }}
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