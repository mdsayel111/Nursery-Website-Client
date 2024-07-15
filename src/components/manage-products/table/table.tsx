import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TProduct } from '../../../types';
import BasicTableRow from '../../shared/table-row/TableRow';
import "./table.css";

export default function BasicTable({ data }: { data: TProduct[] }) {

  return (
    <div id='table'>
      <TableContainer component={Paper} sx={{ overflowX: "scroll" }}>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">rating</TableCell>
              <TableCell align="right">Update/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((eachData) => (
              <BasicTableRow data={eachData} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
