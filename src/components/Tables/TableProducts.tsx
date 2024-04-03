import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteProduct} from "../../api/deleteProduct";
import {Box, useTheme} from "@mui/material";

import {ToastSuccess} from "../../components/Toasts/ToastSuccess";
import {ToastDelete} from "../../components/Toasts/ToastDelete";
import {useNavigate} from "react-router-dom";

interface Column {
    id: 'id' | 'title' | 'price' | 'category' | 'description' | 'image' | 'action';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
}

const columns: readonly Column[] = [
    {id: 'id', label: 'ID', minWidth: 20},
    {id: "title", label: 'Título', minWidth: 120, align: 'center',},
    {
        id: 'price',
        label: 'Precio',
        minWidth: 80,
        align: 'right',
    },
    {
        id: 'category',
        label: 'Categoria',
        minWidth: 100,
        align: 'center',
    },

    {
        id: 'image',
        label: 'Imagen',
        minWidth: 70,
        align: 'center',
    },
    {
        id: 'description',
        label: 'Descripción',
        minWidth: 270,
        align: 'center',
    },
    {
        id: 'action',
        label: 'Acciones',
        minWidth: 170,
        align: 'right',
    }
];

export interface product {
    id: number,
    title: string,
    price: number,
    category: {
        id: number,
        name: string,
        image: string
    },
    description: string,
    images: string[]

}

type CustomTableProps = {
    data: product[]
    getProductsAll: () => void
};

export const TableProducts: React.FC<CustomTableProps> = ({data, getProductsAll}) => {
    const { breakpoints, palette } = useTheme();
    const navigate = useNavigate()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [currentElement, setCurrentElement] = React.useState<number>(0);

    const [title, setTitle] = React.useState("");

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteUserAction = (id: number) => {
        deleteProduct(id).then(res => {
            getProductsAll()
            setOpenDelete(false)
            setOpen(true);
            setTitle("Producto eliminado correctamente")
        }).catch(e => {
            console.error(e)
        })
    }
    const showOptionDelete = (product: product) => {
        setOpenDelete(true)
        setTitle("Desea eliminar el producto " + product.title)
        setCurrentElement(product.id)
    }
    const deleteIcon = (product: product) => (
        <IconButton onClick={() => {
            showOptionDelete(product)
        }}>
            <DeleteIcon color="error"/>
        </IconButton>
    );
    const editIcon = (id: number) => (
        <IconButton onClick={() => {
            navigate("/product/"+id)
        }}>
            <EditIcon color="primary"/>
        </IconButton>
    );

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCloseDelete = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenDelete(false);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>

            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead sx={{
                        "& .MuiTableCell-head": {
                            color: palette.common.white,
                            backgroundColor: palette.primary.main
                        }}} >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="left">{row.title}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="center">{row.category.name}</TableCell>
                                        <TableCell align="center"><Box component={'img'} src={row.images[0]}
                                                                       sx={{width: 60, height: 60}}/></TableCell>
                                        <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="right">
                                            {editIcon(row.id)}
                                            {deleteIcon(row)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {
                openDelete &&
              <ToastDelete open={openDelete} actionClose={handleCloseDelete} text={title} actionEvent={() => {
                  deleteUserAction(currentElement)
              }}/>
            }
            {
                open &&
              <ToastSuccess open={open} actionClose={handleClose} text={title} type={'success'}
                            position={{vertical: "top", horizontal: "center"}}/>
            }
        </Paper>
    );
}
