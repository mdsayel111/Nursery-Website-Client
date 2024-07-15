import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./pagination.css"

export default function BasicPagination({ totalData, setPage }: { totalData: number, setPage: any }) {
    // find total page
    const totalPage = Math.ceil(Number(totalData) / 8)

    // console.log(totalData, totalPage)

    // Event handler for page change
    const handlePageChange = (event: any, value: number) => {
        event
        setPage((prevState: any) => ({ ...prevState, page: value - 1 }));
    };

    return (
        <Stack spacing={2}>
            <Pagination onChange={handlePageChange} count={totalPage} size='large' />
        </Stack>
    );
}