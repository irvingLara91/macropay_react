import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {product} from "../../components/Tables/TableProducts";
import {Container} from "@mui/material";
import {FormProduct} from "../../components/Forms/FormProduct";
import {ToastSuccess} from "../../components/Toasts/ToastSuccess";
import {createProduct} from "../../api/createProduct";


export const AddProduct: React.FC = () => {
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [typeAction, setTypeAction] = React.useState<'success' | 'info' | 'warning' | 'error'>('success');



    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const addProductAction = (params: any) => {
        createProduct(params).then(res => {
            if (res.data){
                setOpen(true)
                setTypeAction("success")
                setTitle("Se agrego el producto.")
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            }else {
                if (res.response.data.statusCode===400){
                    setOpen(true)
                    setTypeAction("error")
                    setTitle("Error al agregar el producto.")
                }
            }



        }).catch(e => console.log(e))
    }


return (<Container maxWidth={'md'}>
    <FormProduct actionApi={addProductAction}/>
    {
        open &&
      <ToastSuccess open={open} type={typeAction} actionClose={handleClose} text={title}
                    position={{vertical: "top", horizontal: "center"}}/>
    }
</Container>)
}
