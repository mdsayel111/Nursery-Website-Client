import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./pagination.css"

export default function BasicPagination({ totalData }: { totalData: number }) {
    // find total page
    const totalPage = Math.ceil(Number(totalData) / 10)
    console.log(totalPage)
    return (
        <Stack spacing={2}>
            <Pagination  count={totalPage} size='large' />
        </Stack>
    );
}