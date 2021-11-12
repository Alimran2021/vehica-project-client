import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Grid } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const { user } = useAuth()
    console.log(myOrders.length)
    useEffect(() => {
        const url = `https://guarded-savannah-01945.herokuapp.com/myOrders/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])
    const itemDeleteHandler = id => {
        console.log(id)
        const procced = window.confirm('Are You Sure Delete This Item?')
        if (procced) {
            const url = `https://guarded-savannah-01945.herokuapp.com/myOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const itemDelete = myOrders.filter(myOrder => myOrder._id !== id)
                        setMyOrders(itemDelete)
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
                    {myOrders.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                            <StyledTableCell align="right">{row.adress}</StyledTableCell>
                            <StyledTableCell align="right">{row.number}</StyledTableCell>
                            <StyledTableCell align="right">{row.productName}</StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
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

export default MyOrders;