import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./pagination.css"

export default function BasicPagination() {
    return (
        <Stack spacing={2}>
            <Pagination count={10} size='large' />
        </Stack>
    );
}