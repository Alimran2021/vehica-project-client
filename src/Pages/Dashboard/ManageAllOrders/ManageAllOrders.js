import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import { purple } from '@mui/material/colors';
import swal from 'sweetalert';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#001e3c',
        color: 'white',
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#001e3c',
        color: 'white'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
// button code here
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
// manage order start here
const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = React.useState([])
    const [manageOrderId, setManageOrderId] = React.useState('')
    const { register, handleSubmit } = useForm();
    React.useEffect(() => {
        fetch('https://guarded-savannah-01945.herokuapp.com/manageOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])
    const manageOrderIdHandler = (id) => {
        setManageOrderId(id)
    }
    const onSubmit = data => {
        fetch(`https://guarded-savannah-01945.herokuapp.com/manageOrder/${manageOrderId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    swal("updated completed");
                }
            })

        console.log(data)
    }
    const itemDeleteHandler = (id) => {
        const procced = swal({
            title: "Are you sure?",
            text: "Are you sure delete this Order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Deleted successfully!", {
                        icon: "success",
                    });
                } else {
                    swal("Your Order item safe!");
                }
            });
        if (procced) {
            const url = `https://guarded-savannah-01945.herokuapp.com/myOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const itemDelete = manageOrders.filter(myOrder => myOrder._id !== id)
                        setManageOrders(itemDelete)
                    }
                })
        }
    }
    return (
        <TableContainer xs={12} component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Adress</StyledTableCell>
                        <StyledTableCell align="right">Phone</StyledTableCell>
                        <StyledTableCell align="right">Product</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Remove</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {manageOrders.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                            <StyledTableCell align="right">{row.adress}</StyledTableCell>
                            <StyledTableCell align="right">{row.number}</StyledTableCell>
                            <StyledTableCell align="right">{row.productName}</StyledTableCell>
                            <StyledTableCell align="right">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select style={{ backgroundColor: 'pink', padding: '10px', borderRadius: '5px' }}
                                        onClick={() => manageOrderIdHandler(row?._id)}
                                        {...register("status")}
                                    >
                                        <option value={row?.status}>{row?.status}</option>
                                        <option value="shipped">shipped</option>
                                    </select>
                                    <ColorButton type="submit" sx={{ my: 1 }} variant="contained">Update</ColorButton>
                                </form>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Button onClick={() => itemDeleteHandler(row._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrders;