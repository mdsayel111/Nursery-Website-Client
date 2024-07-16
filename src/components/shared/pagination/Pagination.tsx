import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./pagination.css"
import { primary } from '../../../constants/color';

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
            <Pagination sx={{
                '& .MuiPaginationItem-root': {
                    // Default styles for pagination items
                },
                '& .Mui-selected': {
                    backgroundColor: `${primary.main} !important`, // Customize the active button background color
                    color: "white", // Customize the active button text color (optional)
                },
                '& .MuiPaginationItem-page:hover': {
                    backgroundColor: primary.main,
                    color: "white" // Customize hover state for pagination items
                },
            }} onChange={handlePageChange} count={totalPage} size='large' />
        </Stack>
    );
}